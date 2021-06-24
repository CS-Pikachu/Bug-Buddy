const app = require('../server/jestserver')
const supertest = require('supertest')
const request = supertest(app)
const sequelize = require('../db/indexDB')
const Bug = sequelize.models.bug

afterAll(() => {
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

describe("GET /api/bugs", () => {
    describe("when bugs are requested", () => {
        it('sets a content-type header application/json', async () => {
            const res = await request.get('/api/bugs')
            expect(res.headers['content-type']).toEqual(expect.stringContaining("json"))
        })
        it('sends a status code 200', async () => {
            const res = await request.get('/api/bugs')
            expect(res.status).toBe(200)
        })
        xit('responds with an array of bugs', async () => {
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
            expect(res.headers['content-type']).toEqual(expect.stringContaining("json"))
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
        xit('responds with the new bug', async () => {
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
        xit('handles duplicate bug errors', async () => {
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

describe("POST /api/updateBug", () => {
    describe("When a Bug is updated", () => {
        it('sets a content-type header application/json', async () => {
            const testBug1 = {
                title: "changed",
                description: "description",
                priority: "high",
                status: "open"
            }
            const res = await request.post('/api/updateBug/1').send(testBug1)
            expect(res.headers['content-type']).toEqual(expect.stringContaining("json"))
        })
        it('sends a status code 201', async () => {
            const testBug1 = {
                title: "changed",
                description: "description",
                priority: "high",
                status: "open"
            }
            const res = await request.post('/api/updateBug/1').send(testBug1)
            expect(res.status).toBe(201)

        })
        it('responds with the updated Bug', async () => {
            const testBug1 = {
                title: "changed",
                description: "description",
                priority: "high",
                status: "open"
            }
            const res = await request.post('/api/updateBug/1').send(testBug1)
            expect(res.body).toHaveProperty("title", "changed")
            expect(res.body).toHaveProperty("description", "description")
            expect(res.body).toHaveProperty("priority", "high")
            expect(res.body).toHaveProperty("status", "open")
        })
        it('handles non-existant Bug errors', async () => {
            const testBug1 = {
                title: "changed",
                description: "description",
                priority: "high",
                status: "open"
            }
            const res = await request.post('/api/updateBug/0123').send(testBug1)
            expect(res.body).toStrictEqual({ "err": "An error occured in the server" })
            expect(res.status).toBe(400)
        })
    })
})

describe("DELETE /api/deleteBug", () => {
    describe("When a Bug is deleted", () => {
        it('sets a content-type header application/json', async () => {
            const res = await request.delete('/api/deleteBug/1')
            expect(res.headers['content-type']).toEqual(expect.stringContaining("json"))
        })
        it('sends a status code 204', async () => {
            const res = await request.delete('/api/deleteBug/1')
            expect(res.status).toBe(204)

        })
        it('responds with the deleted Bug', async () => {
            const res = await request.delete('/api/deleteBug/1')
            expect(res.body).toHaveProperty("title", "changed")
            expect(res.body).toHaveProperty("description", "description")
            expect(res.body).toHaveProperty("priority", "high")
            expect(res.body).toHaveProperty("status", "open")
        })
        it('handles non-existant Bug errors', async () => {
            const res = await request.delete('/api/deleteBug/0123')
            expect(res.body).toStrictEqual({ "err": "An error occured in the server" })
            expect(res.status).toBe(400)
        })
    })
})