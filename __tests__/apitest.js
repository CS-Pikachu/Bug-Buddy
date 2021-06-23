const app = require('../server/jestserver')
const supertest = require('supertest')
const request = supertest(app)


it('Gets the test endpoint', async () => {
    // Sends GET Request to /test endpoint
    const res = await request.get('/api/logout')

    expect(res.status).toBe(302)
    expect(res.header['location']).toBe('/')
})