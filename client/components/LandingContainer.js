import React, { Component } from 'react';
//import image from '../assets/bugbuddy.jpg';
import Landing1 from './Landing1';
import Landing2 from './Landing2';

const LandingContainer = () => {
  return (
    <div className="main-div">
      <Landing1 />
      <br></br>
      <Landing2 />
    </div>
  );
};

export default LandingContainer;
