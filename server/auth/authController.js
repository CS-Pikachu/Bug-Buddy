const express = require('express');

require('./routes');

const keys = require('./keys');

const authController = {};
  
authController.validateUser = (req, res, next) => {
    // try {
      // console.log('authentication succesful', req)
    // } catch (error) {
    //   console.log('There was a problem in the auhentication middleware (authController - line 20): ', error);
    //   return;
    // }
  

  return next();
};





authController.checkCookie = (req, res, next) => {
    console.log('Successful: access dashboard');
  return next();
};


module.exports = authController;