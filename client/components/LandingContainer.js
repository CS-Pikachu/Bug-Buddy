import React, { Component } from 'react';
//import image from '../assets/bugbuddy.jpg';

const LandingContainer = () => {
  return (
      <div class="row">
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
            <img src='https://github.com/CS-Pikachu/Bug-Buddy/blob/landing/client/assets/langding.png?raw=true' alt="landing" width="498" height="300"></img>
            </div>
          </div>
        </div>
      </div>
  );
};

export default LandingContainer;


