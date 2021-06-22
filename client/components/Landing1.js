import React, { Component } from 'react';

const Landing1 = () => {
    return (
        <div class="row">
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Next Generation Ticketing Management System</h5>
                <p class="card-text">As your organization grows, IT support has to be more organized and efficient. Without a clear overview of what the problem is, who's reporting it, and what its priority level is, it takes more time to resolve IT issues — as a result, operations will be bottlenecked within the company.</p>
                <a href="#" class="btn btn-primary">Get Started</a>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
              <img src='https://raw.githubusercontent.com/CS-Pikachu/Bug-Buddy/42c4b009b321cf32f84a166fe6d591533777db09/client/assets/statistics.svg' alt="landing" width="498" height="300"></img>
              </div>
            </div>
          </div>
        </div>
    );
  };
  
  export default Landing1;