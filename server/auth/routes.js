const express = require('express');
const passport = require('passport');
const app = express();
const path = require('path');

module.exports = (app) => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );
  
  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      res.redirect('/dashboard');
    }
  );

  app.get('api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  app.get('api/current_user', (req, res) => {
    res.send(req.user);
  });

  app.post('/accounts/sendnew', (req, res, next) => {
    console.log('we received your post', req.body);
    const googleId = req.user.googleId;
    console.log('your google ID is: ', googleId);
    const { type, name, value } = req.body;
    console.log('body is now ', type, name, value);
    res.redirect('/dashboard')
  });

};