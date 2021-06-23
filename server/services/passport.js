const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var GitHubStrategy = require('passport-github2').Strategy;
var session = require('express-session');
const keys = require('../../config/keys');

// upon successfull login and cookie creation, we serialize the user to the session
passport.serializeUser((user, done) => {
  console.log('serializing user, user is', user);
  done(null, user.id);
});

// if there is a valid cookie session, passport will deserialize the user and based on thier googleID
passport.deserializeUser((id, done) => {
  console.log('deserializing user, userid', id);
  const user = { id: id };
  done(null, id);
});

passport.use(
  // anyone that wants to authenticate with the string 'google' use this strategy

  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      // third arugment is where it gets sent back
      callbackURL: '/auth/google/callback',
    },
    // once successful, we get access token, this happens when the get request at /callback
    (accessToken, refreshToken, profile, done) => {
      // opportunity to save user to DB
      console.log('Google profile id is', profile.id);
      const user = {
        firstName: profile.name.givenName,
        id: profile.id,
      };
      done(null, user);
    }
  )
);

// Use the GitHubStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and GitHub
//   profile), and invoke a callback with a user object.
passport.use(
  new GitHubStrategy(
    {
      clientID: keys.GITHUB_CLIENT_ID,
      clientSecret: keys.GITHUB_CLIENT_SECRET,
      callbackURL: '/dashboard',
    },
    (accessToken, refreshToken, profile, done) => {
      // asynchronous verification, for effect...
      process.nextTick(function () {
        // To keep the example simple, the user's GitHub profile is returned to
        // represent the logged-in user.  In a typical application, you would want
        // to associate the GitHub account with a user record in your database,
        // and return that user instead.
        return done(null, profile);
      });
    }
  )
);
