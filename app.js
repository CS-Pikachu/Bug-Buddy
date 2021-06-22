const express = require('express')
import models from './db/models'
// const mountRoutes = require('./routes')
const app = express()
// mountRoutes(app)
models.sequelize.sync().then(() => {
    // app.listen(3000);
})




