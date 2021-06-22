const Router = require('express-promise-router')
const db = require('../db')

// quick test

// async function afunc() {
//     const { rows } = await db.query('SELECT * FROM people')
//     console.log(rows[0])
// }
// afunc()


const router = new Router()
// export our router to be mounted by the parent application
router.get('/:id', async (req, res) => {
    const { id } = req.params
    const { rows } = await db.query('SELECT * FROM users WHERE id = $1', [id])
    res.send(rows[0])
});

router.get('/', async (req, res) => {
    const { rows } = await db.query('SELECT * FROM users')
    res.send(rows)
});

router.get('create/:id', async (req, res) => {
    // const { id } = req.params
    // const { rows } = await db.query('SELECT * FROM users WHERE id = $1', [id])
    // res.send(rows[0])
});

router.get('update/:id', async (req, res) => {
    // const { id } = req.params
    // const { rows } = await db.query('SELECT * FROM users WHERE id = $1', [id])
    // res.send(rows[0])
});

router.get('delete/:id', async (req, res) => {
    // const { id } = req.params
    // const { rows } = await db.query('SELECT * FROM users WHERE id = $1', [id])
    // res.send(rows[0])
});

module.exports = router