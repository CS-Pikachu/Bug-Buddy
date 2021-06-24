const app = require('../server/jestserver')
const supertest = require('supertest')
const request = supertest(app)
const sequelize = require('../db/indexDB')
const User = sequelize.models.user
const Team = sequelize.models.team
const Bug = sequelize.models.bug
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
    Bug.destroy({
        where: {
            title: "testbugger1"
        }
    })
    Bug.destroy({
        where: {
            title: "testbugger2"
        }
    })
    Bug.destroy({
        where: {
            title: "testbugger3"
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
            expect(res.header['Content-Type']).toBe('application/json')
        })
        it('sends a status code 200', async () => {
            const res = await request.get('/api/users')
            expect(res.status).toBe(200)
        })
        it('responds with an array of users', async () => {
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


describe("GET /api/bugs", () => {
    describe("when bugs are requested", () => {
        it('sets a content-type header application/json', async () => {
            const res = await request.get('/api/bugs')
            expect(res.header['Content-Type']).toBe('application/json')
        })
        it('sends a status code 200', async () => {
            const res = await request.get('/api/bugs')
            expect(res.status).toBe(200)
        })
        it('responds with an array of bugs', async () => {
            const res = await request.get('/api/bugs')
            expect(res.body).toStrictEqual([{
                "id": 6,
                "title": null,
                "description": null,
                "priority": null,
                "status": null,
                "dueDate": "2021-07-08T00:26:02.772Z",
                "createdAt": "2021-06-24T00:26:02.772Z",
                "updatedAt": "2021-06-24T00:26:02.772Z",
                "userId": null,
                "teamId": null
            },
            {
                "id": 7,
                "title": "Home Route",
                "description": "You can still access home even if you are not logged in. This needs to rerouted to landing.",
                "priority": "high",
                "status": "open",
                "dueDate": "2021-07-08T00:37:34.567Z",
                "createdAt": "2021-06-24T00:37:34.568Z",
                "updatedAt": "2021-06-24T00:37:34.568Z",
                "userId": null,
                "teamId": null
            },
            {
                "id": 8,
                "title": "Update sql schema to include team id",
                "description": "Add team id to schema so we do not have to iterate over all bugs",
                "priority": "medium",
                "status": "open",
                "dueDate": "2021-07-08T00:39:02.533Z",
                "createdAt": "2021-06-24T00:39:02.533Z",
                "updatedAt": "2021-06-24T00:39:02.533Z",
                "userId": null,
                "teamId": null
            },
            {
                "id": 9,
                "title": "Change font size in headers",
                "description": "Font size in headers is too big, make it smaller and potentially add shadows",
                "priority": "low",
                "status": "open",
                "dueDate": "2021-07-08T00:40:05.462Z",
                "createdAt": "2021-06-24T00:40:05.462Z",
                "updatedAt": "2021-06-24T00:40:05.462Z",
                "userId": null,
                "teamId": null
            },
            {
                "id": 1,
                "title": "first title",
                "description": "First description, I'm still keeping it together",
                "priority": "high",
                "status": "open",
                "dueDate": "2021-07-08T00:22:50.651Z",
                "createdAt": "2021-06-24T00:22:50.652Z",
                "updatedAt": "2021-06-24T00:43:52.578Z",
                "userId": 1,
                "teamId": 2
            },
            {
                "id": 2,
                "title": "second title",
                "description": "This actually started to make some sense",
                "priority": "medium",
                "status": "open",
                "dueDate": "2021-07-08T00:23:02.897Z",
                "createdAt": "2021-06-24T00:23:02.897Z",
                "updatedAt": "2021-06-24T00:44:26.124Z",
                "userId": 5,
                "teamId": 3
            },
            {
                "id": 3,
                "title": "third title",
                "description": "Sometimes it actually makes me want to break stuff",
                "priority": "medium",
                "status": "open",
                "dueDate": "2021-07-08T00:23:13.264Z",
                "createdAt": "2021-06-24T00:23:13.264Z",
                "updatedAt": "2021-06-24T00:45:05.663Z",
                "userId": 4,
                "teamId": 2
            },
            {
                "id": 4,
                "title": "fourth title",
                "description": "I forgot how to turn my laptop on today...",
                "priority": "high",
                "status": "open",
                "dueDate": "2021-07-08T00:23:25.231Z",
                "createdAt": "2021-06-24T00:23:25.231Z",
                "updatedAt": "2021-06-24T00:46:14.244Z",
                "userId": 3,
                "teamId": 1
            },
            {
                "id": 5,
                "title": "fifth title",
                "description": "SQL is going to be the crux of this project",
                "priority": "low",
                "status": "open",
                "dueDate": "2021-07-08T00:23:39.408Z",
                "createdAt": "2021-06-24T00:23:39.408Z",
                "updatedAt": "2021-06-24T00:46:57.348Z",
                "userId": 2,
                "teamId": 1
            }])
        })
    })
})


describe("POST /api/newUser", () => {
    describe("When a new user is created", () => {
        it('sets a content-type header application/json', async () => {
            const testUser1 = {
                username: "test1",
                password: "password",
                isAdmin: true
            }
            const res = await request.post('/api/newUser').send(testUser1)
            expect(res.header['Content-Type']).toBe('application/json')
        })
        it('sends a status code 201', async () => {
            const testUser2 = {
                username: "test2",
                password: "password",
                isAdmin: true
            }
            const res = await request.post('/api/newUser').send(testUser2)
            expect(res.status).toBe(201)

        })
        it('responds with the new user', async () => {
            const testUser3 = {
                username: "test3",
                password: "password",
                isAdmin: true
            }
            const res = await request.post('/api/newUser').send(testUser3)
            expect(res.body).toHaveProperty("username", "test3")
            expect(res.body).toHaveProperty("password", "password")
            expect(res.body).toHaveProperty("isAdmin", true)

        })
        it('handles duplicate user errors', async () => {
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


describe("POST /api/newBug", () => {
    describe("When a new bug is created", () => {
        it('sets a content-type header application/json', async () => {
            const testBug1 = {
                title: "testbugger",
                description: "testdescription",
                priority: "high",
                status: "open",
                dueDate: new Date(Date.now() + 12096e5)
            }
            const res = await request.post('/api/newBug').send(testBug1)
            expect(res.header['Content-Type']).toBe('application/json')
        })
        it('sends a status code 201', async () => {
            const testBug2 = {
                title: "testbugger2",
                description: "testdescription",
                priority: "high",
                status: "open",
                dueDate: new Date(Date.now() + 12096e5)
            }
            const res = await request.post('/api/newBug').send(testBug2)
            expect(res.status).toBe(201)

        })
        it('responds with the new bug', async () => {
            const date = new Date(Date.now() + 12096e5)
            const testBug3 = {
                title: "testbugger3",
                description: "testdescription",
                priority: "high",
                status: "open",
                dueDate: date
            }
            const res = await request.post('/api/newBug').send(testBug3)
            expect(res.body).toHaveProperty("title", "testbugger3")
            expect(res.body).toHaveProperty("description", "testdescription")
            expect(res.body).toHaveProperty("status", "open")
            expect(res.body).toHaveProperty("priority", "high")
            // expect(res.body).toHaveProperty("dueDate", date)

        })
        it('handles duplicate bug errors', async () => {
            const testBug2 = {
                title: "testbugger2",
                description: "testdescription",
                priority: "high",
                status: "open",
                dueDate: new Date(Date.now() + 12096e5)
            }
            const res = await request.post('/api/newbug').send(testBug2)
            expect(res.body).toBe('We could not log this Bug, sorry!')
            expect(res.status).toBe(400)
        })
    })
})

it('Tests Google redirects to dashboard', async () => {
    // Sends GET Request google endpoint
    const res = await request.get('/auth/google/callback')

    expect(res.status).toBe(302)
    expect(res.header['location']).toBe('/dashboard')
})
it('Tests /api/logout redirect', async () => {
    // Sends GET Request to logout endpoint
    const res = await request.get('/api/logout')

    expect(res.status).toBe(302)
    expect(res.header['location']).toBe('/')
})
it('Tests /logout redirect', async () => {
    // Sends GET Request to logout endpoint
    const res = await request.get('/logout')

    expect(res.status).toBe(302)
    expect(res.header['location']).toBe('/')
})
it('Returns current user', async () => {
    // Sends GET Request
    const res = await request.get('/api/current_user')

    expect(res.status).toBe(200)
    expect(res.body).toBe('Steve')
})
it('Tests GitHub auth', async () => {
    // Sends GET Request
    const res = await request.get('/auth/github')

    expect(res.status).toBe(302)
    expect(res.header['location']).toContain('githubauth')
})
it('Tests GitHub redirects to dashboard', async () => {
    // Sends GET Request google endpoint
    const res = await request.get('/auth/github/callback')

    expect(res.status).toBe(302)
    expect(res.header['location']).toBe('/dashboard')
})
it('Tests users are returned', async () => {
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