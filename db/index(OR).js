const { Pool } = require('pg')
const connectionString = 'postgres://hbaqcbwm:VAaIBVRxSZ1Tsymdihc9uCdPIVri6rR8@tai.db.elephantsql.com/hbaqcbwm'
const pool = new Pool({
    connectionString,
    max: 3
});

module.exports = {
    async query(text, params) {
        const start = Date.now()
        const res = await pool.query(text, params)
        const duration = Date.now() - start
        console.log("executed query", { text, duration, rows: res.rowCount })
        return res
    },
    async getClient() {
        const client = await pool.connect()
        return client
    }
}