import React, { Component } from 'react';
//import image from '../assets/bugbuddy.jpg';
import { Container } from 'react-bootstrap';
import Landing1 from './Landing1';
import Landing2 from './Landing2';

const LandingContainer = () => {
  return (
    <Container>
      <div className="main-div">
        <Landing1 />
        <br></br>
        <Landing2 />
      </div>
    </Container>
  );
};

export default LandingContainer;
