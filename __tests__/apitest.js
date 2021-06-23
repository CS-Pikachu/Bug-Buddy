const app = require('../server/jestserver')
const supertest = require('supertest')
const request = supertest(app)


xit('Tests Google auth', async () => {
    // Sends GET Request to google endpoint
    const res = await request.get('/auth/google')

    expect(res.status).toBe(302)
    expect(res.header['location']).toContain('accounts.google.com')
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