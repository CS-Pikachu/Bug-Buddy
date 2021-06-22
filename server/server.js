const express = require('express');
// saves session data on the client within a cookie (rather than session identifer and data in a DB)
const cookieSession = require('cookie-session');
// middleware to help with authentication
const passport = require('passport');
// we just need this to run, so we don't need a constant
// models needed to be loaded before the passport file since passport utilizes models
// require('./models/user');
require('./services/passport');

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
    // encrption key given to cookieseeson as first element in array
    keys: [keys.cookieKey],
  })
);

app.use(passport.initialize());
app.use(passport.session());

// calling all the routes with the express app
routes(app);


app.use(express.static(path.resolve(__dirname, '../client/assets/')));
app.use(express.static('client/public'));

console.log('nodeENV is ', process.env.NODE_ENV);
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