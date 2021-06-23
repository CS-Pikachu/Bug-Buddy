const app = require('../server/jestserver')
const supertest = require('supertest')
const request = supertest(app)


it('Tests Google auth', async () => {
    // Sends GET Request to google endpoint
    const res = await request.get('/auth/google')

    expect(res.status).toBe(302)
    expect(res.header['location']).toContain('accounts.google.com')
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