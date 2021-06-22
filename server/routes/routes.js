const passport = require('passport');

// const Accounts = mongoose.model('accounts');

// we need to have express invoke this in server.js, so we wrap it in an export function
module.exports = (app) => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      // what permissions we ask for from the google account
      scope: ['profile', 'email'],
    })
  );
  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      res.redirect('/dashboard');
    }
  );

  app.get('/api/logout', (req, res) => {
    // passport attaches many functions to req object, one being logout
    req.logout();
    res.redirect('/');
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};
