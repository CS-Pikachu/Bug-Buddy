const tests = require('./test')
module.exports = app => {
    app.use('/tests', tests);
    app.use('/bugs/', tests);
}