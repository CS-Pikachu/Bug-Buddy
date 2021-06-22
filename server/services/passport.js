const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const keys = require('../../config/keys');

// upon successfull login and cookie creation, we serialize the user to the session
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// // if there is a valid cookie session, passport will deserialize the user and based on thier googleID in our mongoDB
// passport.deserializeUser((id, done) => {
//   User.findById(id).then((user) => {
//     done(null, user);
//   });
// });

passport.use(
  // anyone that wants to authenticate with the string 'google' use this strategy
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      // third arugment is where it gets sent back
      callbackURL: '/dashboard',
    },
    // once successful, we get access token, this happens when the get request at /callback
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
