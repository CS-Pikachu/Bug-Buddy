const express = require('express')
const app = express()
const sequelize = require('./db/index')

sequelize.sync().then(() => {
    app.listen(3000);
})




