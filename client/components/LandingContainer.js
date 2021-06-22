import React, { Component } from 'react';
//import image from '../assets/bugbuddy.jpg';

const LandingContainer = () => {
  return (
    <div>
      <br></br>
      <img src='https://github.com/CS-Pikachu/Bug-Buddy/blob/landing/client/assets/bugbuddy.jpg?raw=true' alt="bug-buddy" width="650" height="349"></img>
      <br></br>
      {/* <p>Welcome! Bug-Buddy is your buddy for managing all your tickets!</p>     */}
      <br></br>
      <p>As your organization grows, IT support has to be more organized and efficient. Without a clear overview of what the problem is, who's reporting it, and what its priority level is, it takes more time to resolve IT issues — as a result, operations will be bottlenecked within the company.</p>
      <p>If your IT team is feeling these constraints, it may be time to implement an IT ticketing system. As a central point of contact, an IT ticketing system saves time by routing all service requests into a single help desk and implements workflows that prioritize and resolve issues. Departments across the organization can easily ask and get the help they need, enabling employees to focus on getting their work done.</p>
      
      <button type="button" size="lg" class="btn btn-outline-primary" href="#" variant="primary" >Get Started with Bug-Buddy today for FREE</button>
    </div>
  );
};

export default LandingContainer;


