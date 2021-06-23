const express = require('express');
// saves session data on the client within a cookie (rather than session identifer and data in a DB)
const cookieSession = require('cookie-session');
// middleware to help with authentication
const authController = require('./auth/authController');
const passport = require('passport');
require('./services/passport');
require('passport-github2');
const sequelize = require('../db/indexDB');

const path = require('path');
const keys = require('../config/keys');
const routes = require('./routes/routes');

const port = 3000;

const app = express();
app.use(express.json());
app.use(
  cookieSession({
    // takes max age in milliseconds, so I set this to 30 minutes
    maxAge: 4 * 60 * 60 * 1000,
    // encription key given to cookies as first element in array
    keys: [keys.cookieKey],
  })
);

app.use(passport.initialize());
app.use(passport.session());

// calling all the routes with the express app
routes(app);


app.use(express.static(path.resolve(__dirname, '../client/assets/')));
app.use(express.static('client/public'));

app.get('/auth', authController.checkCookie, function(req, res){
  res.status(200).redirect('/dashboard')
});


app.get('/dashboard', ensureAuthenticated, function(req, res){
  res.render('account', { user: req.user });
});

// console.log('node-ENV is', process.env.NODE_ENV);
if (process.env.NODE_ENV === 'production') {
  app.use('/build', express.static(path.join(__dirname, '../build')));
  app.get('/', (req, res) => {
    return res
      .status(200)
      .sendFile(path.join(__dirname, '../client/public/index.html'));
  });
}

/* Simple route middleware to ensure user is authenticated.
  Use this route middleware on any resource that needs to be protected.  If
  the request is authenticated (typically via a persistent login session),
  the request will proceed.  Otherwise, the user will be redirected to the
  login page. */
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/')
}

sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`We're now listening on port ${port}`);
  });
})