const express = require('express');
<<<<<<< HEAD

require('./routes');

const keys = require('./keys');
=======
require('../routes/routes');
const keys = require('../../config/keys');
>>>>>>> dev

const authController = {};
  
authController.validateUser = (req, res, next) => {
<<<<<<< HEAD
    // try {
      // console.log('authentication succesful', req)
    // } catch (error) {
    //   console.log('There was a problem in the auhentication middleware (authController - line 20): ', error);
    //   return;
    // }
  

  return next();
};





=======
  return next();
};

>>>>>>> dev
authController.checkCookie = (req, res, next) => {
    console.log('Successful: access dashboard');
  return next();
};


module.exports = authController;