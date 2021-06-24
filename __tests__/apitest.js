const app = require('../server/jestserver')
const supertest = require('supertest')
const request = supertest(app)
const sequelize = require('../db/indexDB')
const User = sequelize.models.user
const Team = sequelize.models.team
const Comment = sequelize.models.comment

afterAll(() => {
    User.destroy({
        where: {
            username: "test1"
        }
    })
    User.destroy({
        where: {
            username: "test2"
        }
    })
    User.destroy({
        where: {
            username: "test3"
        }
    })
});

describe("GET /auth/google", () => {
    describe("when a user logs in with Google", () => {
        // should set a location header containing accounts.google.com
        // should respond with a 302 status code
        it('Tests Google responds with a redirect', async () => {
            // Sends GET Request to google endpoint
            const res = await request.get('/auth/google')

            expect(res.status).toBe(302)
            expect(res.header['location']).toContain('accounts.google.com')
        })

    })

})

describe("GET /api/users", () => {
    describe("when users are requested", () => {
        it('sets a content-type header application/json', async () => {
            const res = await request.get('/api/users')
            expect(res.headers['content-type']).toEqual(expect.stringContaining("json"))
        })
        it('sends a status code 200', async () => {
            const res = await request.get('/api/users')
            expect(res.status).toBe(200)
        })
        xit('responds with an array of users', async () => {
            const res = await request.get('/api/users')
            expect(res.body).toStrictEqual([{
                "id": 1,
                "username": "Jane",
                "password": "pass",
                "isAdmin": false,
                "createdAt": "2021-06-24T00:26:31.374Z",
                "updatedAt": "2021-06-24T00:26:31.374Z"
            },
            {
                "id": 2,
                "username": "George",
                "password": "pass",
                "isAdmin": false,
                "createdAt": "2021-06-24T00:26:49.641Z",
                "updatedAt": "2021-06-24T00:26:49.641Z"
            },
            {
                "id": 3,
                "username": "Michael",
                "password": "pass",
                "isAdmin": true,
                "createdAt": "2021-06-24T00:27:01.463Z",
                "updatedAt": "2021-06-24T00:27:01.463Z"
            },
            {
                "id": 4,
                "username": "Laura",
                "password": "pass",
                "isAdmin": false,
                "createdAt": "2021-06-24T00:27:14.510Z",
                "updatedAt": "2021-06-24T00:27:14.510Z"
            },
            {
                "id": 5,
                "username": "Michaela",
                "password": "pass",
                "isAdmin": false,
                "createdAt": "2021-06-24T00:27:26.839Z",
                "updatedAt": "2021-06-24T00:27:26.839Z"
            },
            {
                "id": 6,
                "username": "charlie",
                "password": "password123",
                "isAdmin": true,
                "createdAt": "2021-06-24T00:27:44.861Z",
                "updatedAt": "2021-06-24T00:27:44.861Z"
            }])
        })
    })
})

describe("POST /api/user", () => {
    describe("When a new user is created", () => {
        it('sets a content-type header application/json', async () => {
            const testUser1 = {
                username: "test1",
                password: "password",
                isAdmin: true
            }
            const res = await request.post('/api/user').send(testUser1)
            expect(res.headers['content-type']).toEqual(expect.stringContaining("json"))
        })
        it('sends a status code 201', async () => {
            const testUser2 = {
                username: "test2",
                password: "password",
                isAdmin: true
            }
            const res = await request.post('/api/user').send(testUser2)
            expect(res.status).toBe(201)

        })
        xit('responds with the new user', async () => {
            const testUser3 = {
                username: "test3",
                password: "password",
                isAdmin: true
            }
            const res = await request.post('/api/user').send(testUser3)
            expect(res.body).toHaveProperty("username", "test3")
            expect(res.body).toHaveProperty("password", "password")
            expect(res.body).toHaveProperty("isAdmin", true)

        })
        xit('handles duplicate user errors', async () => {
            const testUser3 = {
                username: "test3",
                password: "password",
                isAdmin: true
            }
            const res = await request.post('/api/newUser').send(testUser3)
            expect(res.body).toBe('We could not create this user')
            expect(res.status).toBe(400)
        })
    })
})

describe("POST /api/updateUser", () => {
    describe("When a user is updated", () => {
        it('sets a content-type header application/json', async () => {
            const testUser1 = {
                username: "changed",
                password: "password",
                isAdmin: true
            }
            const res = await request.post('/api/updateUser/1').send(testUser1)
            expect(res.headers['content-type']).toEqual(expect.stringContaining("json"))
        })
        it('sends a status code 201', async () => {
            const testUser1 = {
                username: "changed",
                password: "password",
                isAdmin: true
            }
            const res = await request.post('/api/updateUser/1').send(testUser1)
            expect(res.status).toBe(201)

        })
        it('responds with the updated user', async () => {
            const testUser1 = {
                username: "changed",
                password: "password",
                isAdmin: true
            }
            const res = await request.post('/api/updateUser/1').send(testUser1)
            expect(res.body).toHaveProperty("username", "changed")
            expect(res.body).toHaveProperty("password", "password")
            expect(res.body).toHaveProperty("isAdmin", true)

        })
        it('handles non-existant user errors', async () => {
            const testUser1 = {
                username: "changed",
                password: "password",
                isAdmin: true
            }
            const res = await request.post('/api/updateUser/0123').send(testUser1)
            expect(res.body).toStrictEqual({ "err": "An error occured in the server" })
            expect(res.status).toBe(400)
        })
    })
})


xit('Tests Google redirects to dashboard', async () => {
    // Sends GET Request google endpoint
    const res = await request.get('/auth/google/callback')

    expect(res.status).toBe(302)
    expect(res.header['location']).toBe('/dashboard')
})
xit('Tests /api/logout redirect', async () => {
    // Sends GET Request to logout endpoint
    const res = await request.get('/api/logout')

    expect(res.status).toBe(302)
    expect(res.header['location']).toBe('/')
})
xit('Tests /logout redirect', async () => {
    // Sends GET Request to logout endpoint
    const res = await request.get('/logout')

    expect(res.status).toBe(302)
    expect(res.header['location']).toBe('/')
})
xit('Returns current user', async () => {
    // Sends GET Request
    const res = await request.get('/api/current_user')

    expect(res.status).toBe(200)
    expect(res.body).toBe('Steve')
})
xit('Tests GitHub auth', async () => {
    // Sends GET Request
    const res = await request.get('/auth/github')

    expect(res.status).toBe(302)
    expect(res.header['location']).toContain('githubauth')
})
xit('Tests GitHub redirects to dashboard', async () => {
    // Sends GET Request google endpoint
    const res = await request.get('/auth/github/callback')

    expect(res.status).toBe(302)
    expect(res.header['location']).toBe('/dashboard')
})
xit('Tests users are returned', async () => {
    const res = await request.get('/api/users')

    expect(res.status).toBe(200)
    expect(res.body).toContain([{
        "id": 1,
        "username": "Jane",
        "password": "pass",
        "isAdmin": false,
        "createdAt": "2021-06-23T02:36:09.076Z",
        "updatedAt": "2021-06-23T02:36:09.076Z"
    }])
})