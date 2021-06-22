import React, { Component } from 'react';
import programming from '../assets/programming.svg'

console.log(programming);

const Landing2 = () => {
    return (
        <div className="row">
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
              <img src={programming} alt="landing" width="498" height="300"></img>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
              <h5 className="card-title">Next Generation Ticketing Management System</h5>
                <p className="card-text">If your IT team is feeling these constraints, it may be time to implement an IT ticketing system. As a central point of contact, an IT ticketing system saves time by routing all service requests into a single help desk and implements workflows that prioritize and resolve issues. Departments across the organization can easily ask and get the help they need, enabling employees to focus on getting their work done.</p>
                <a href="#" className="btn btn-primary">Get Started</a>
                </div>
            </div>
          </div>
        </div>
    );
  };
  
  export default Landing2;