import React, { Component } from 'react';
//import image from '../assets/bugbuddy.jpg';

const LandingContainer = () => {
  return (
    <div>
      <br></br>
      <p>Welcome!</p>
      <p>Bug-Buddy is your buddy for managing all your tickets!</p>      
      <img src='https://github.com/CS-Pikachu/Bug-Buddy/blob/landing/client/assets/bugbuddy.jpg?raw=true' alt="bug-buddy" width="650" height="349"></img>
      <br></br>
      <br></br>
      <button type="button" size="lg" class="btn btn-outline-primary" href="#" variant="primary" >Get Started</button>
    </div>
  );
};

export default LandingContainer;


