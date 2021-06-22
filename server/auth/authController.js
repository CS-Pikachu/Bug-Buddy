const express = require('express');
require('../routes/routes');
const keys = require('../../config/keys');

const authController = {};
  
authController.validateUser = (req, res, next) => {
  return next();
};

authController.checkCookie = (req, res, next) => {
    console.log('Successful: access dashboard');
  return next();
};


module.exports = authController;