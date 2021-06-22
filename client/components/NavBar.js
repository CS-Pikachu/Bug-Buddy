import React, { Component } from 'react';
import styles from './../public/bootstrap.css';

const NavBar = () => {
  return (
    <div>
      {/* <h1>NavBar Here</h1> */}
      {/* bg-light */}
      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <div className="nav_leftside">
            <a className="navbar-brand" href="#" style={{ color: 'blue' }}>
              Bug-Buddy
            </a>
            <img
              src="https://github.com/CS-Pikachu/Bug-Buddy/blob/landing/client/assets/bblog.png?raw=true"
              alt="bblog"
              width="30"
              height="30"
            ></img>
          </div>

          <div className="nav_rightside">
            <button
              type="button"
              size="lg"
              className="btn btn-outline-Primary mx-2"
              href="#"
            >
              Login
            </button>
            <button
              type="button"
              size="lg"
              className="btn btn-outline-Primary mx-2"
              href="#"
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
