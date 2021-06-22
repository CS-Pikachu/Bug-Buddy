const express = require('express');
const app = express();
const path = require('path');
var cookieParser = require('cookie-parser');
const { auth } = require('express-openid-connect');
const authController = require('./auth/authController');
// const cookieSession = require('cookie-session');
// middleware to help with authentication
const passport = require('passport');

const keys = require('./auth/keys');
const routes = require('./auth/routes');

const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(
//   cookieSession({
//     // takes max age in milliseconds, so I set this to 30 minutes
//     maxAge: 4 * 60 * 60 * 1000,
//     // encrption key given to cookieseeson as first element in array
//     keys: [keys.cookieKey],
//   })
// );

app.use(passport.initialize());
app.use(passport.session());

// calling all the routes with the express app
// routes(app);

app.use(express.static(path.resolve(__dirname, '../client/public')));

// app.get('/', (req, res) => {
//   res.status(200).sendFile(path.resolve(__dirname, '../client/public/index.html'));
// });

// app.get('/dashboard', authController.validateUser, (req, res) => {
//   res.status(200).sendFile(path.resolve(__dirname, '../client/public/index.html'));
// });

// // OAuth process
app.get('/auth', (req, res) => {
  res.status(200).redirect('/dashboard')
});


// ? Double check later if this is necessary
console.log('node_ENV is ', process.env.TERM_PROGRAM);
if (process.env.NODE_ENV === 'production') {
  app.use('/build', express.static(path.join(__dirname, '../build')));
  app.get('/', (req, res) => {
    return res
    .status(200)
    .sendFile(path.join(__dirname, '../client/public/index.html'));
  });
}


app.listen(port, () => {
  console.log(`We're now listening on port ${port}`);
});