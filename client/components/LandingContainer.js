import React, { Component } from 'react';
import styles from './../public/bootstrap.css';
//import image from '../assets/bug-buddy.jpg';

const LandingContainer = () => {
  return (
    <div>
      <br></br>
      <p>Welcome!</p>
      <p>Bug-Buddy is your buddy for managing all your tickets!</p>      
      <img src="https://www.bgosoftware.com/blog/wp-content/uploads/2016/03/iStock_000004435884_Large.jpg" alt="bug-buddy" width="650" height="349"></img>
      <br></br>
      <br></br>
      <button type="button" size="lg" class="btn btn-outline-primary" href="#" variant="primary" >Get Started</button>
    </div>
  );
};

export default LandingContainer;


