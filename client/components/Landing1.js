import React, { Component } from 'react';
import statistics from '../assets/statistics.svg';

const Landing1 = () => {
    return (
        <div className="row">
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Have a bug? No Problem!</h5>
                <p className="card-text">As your organization grows, IT support has to be more organized and efficient. Without a clear overview of what the problem is, who's reporting it, and what its priority level is, it takes more time to resolve IT issues — as a result, operations will be bottlenecked within the company.</p>
                <a href="#" className="btn btn-primary">Get Started</a>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
              <img src={statistics} alt="landing" width="415" height="250"></img>
              </div>
            </div>
          </div>
        </div>
    );
  };
  
  export default Landing1;