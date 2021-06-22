import React, { Component } from 'react';
import styles from './../public/bootstrap.css';

const NavBar = () => {
  return (
    <div>
      {/* <h1>NavBar Here</h1> */}
      {/* bg-light */}
      <nav class="navbar navbar-light bg-light">
          <div class="container-fluid">
             <a class="navbar-brand" href="#">Bug-Buddy</a>
             <img src="https://github.com/CS-Pikachu/Bug-Buddy/blob/landing/client/assets/bblog.png?raw=true" alt="bblog" width="30" height="30"></img>
             <a class="navbar-brand" href="#">Home</a>
             <a class="navbar-brand" href="#">Features</a>
             {/* <button type="button" class="btn btn-primary">Primary</button> */}
             <button type="button" size="lg" class="btn btn-outline-primary" href="#" variant="primary" >Login</button>
             <button type="button" size="lg" class="btn btn-outline-primary" href="#" variant="primary" >Get Started</button>

          </div>
      </nav>
    </div>
  );
};

export default NavBar;
