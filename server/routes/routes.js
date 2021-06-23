const passport = require('passport');

// Exported to be use everywhere
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
      console.log('req.user in callback is', req.user);
      console.log('at the google callback, sending to dashboard');
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

  // ! Github's authentication. All ready to play ball!
  app.get(
    '/auth/github',
    passport.authenticate('github', { scope: ['user:email'] }),
    function (req, res) {
      // The request will be redirected to GitHub for authentication, so this
      // function will not be called.
    }
  );

  // GET /auth/github/callback
  //   Use passport.authenticate() as route middleware to authenticate the
  //   request.  If authentication fails, the user will be redirected back to the
  //   login page.  Otherwise, the primary route function will be called,
  //   which, in this example, will redirect the user to the home page.
  app.get(
    '/auth/github/callback',
    passport.authenticate('github', { failureRedirect: '/' }),
    function (req, res) {
      console.log('at the github callback, sending to dashboard');
      res.redirect('/dashboard');
    }
  );

  app.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
  });
};
