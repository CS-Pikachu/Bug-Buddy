import React, { Component } from 'react';
import styles from './../public/bootstrap.css';
import bblog from '../assets/bblog.png';

const NavBar = () => {
  return (
    <div>
      {/* <h1>NavBar Here</h1> */}
      {/* bg-light */}
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <div className="nav_leftside">
            <a className="navbar-brand" href="#" style={{ color: 'blue' }}>
              Bug-Buddy
            </a>
            <img
              src={bblog}
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
