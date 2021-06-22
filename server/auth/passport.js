const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const keys = require('./keys');

// upon successfull login and cookie creation, we serialize the user to the session
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// if there is a valid cookie session, passport will deserialize the user and based on thier googleID in our mongoDB
passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

passport.use(
  // anyone that wants to authenticate with the string 'google' use this strategy
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      // third arugment is where it gets sent back
      callbackURL: '/auth/google/callback',
    },
    // once successful, we get access token, this happens when the get request at /auth/google/callback
    async (accessToken, refreshToken, profile, done) => {
      // opportunity to save user to DB
      const existingUser = await User.findOne({ googleId: profile.id });
      if (existingUser) {
        return done(null, existingUser);
      }
      const user = await new User({
        googleId: profile.id,
        firstName: profile.name.givenName,
      }).save();
      done(null, user);
    }
  )
);
