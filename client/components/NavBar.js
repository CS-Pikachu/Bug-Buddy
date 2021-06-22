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

                <div class="collapse navbar-collapse" id="navbarNav">
                  <ul class="navbar-nav">
                    <li class="nav-item">
                     <a class="nav-link active" aria-current="page" href="#">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Features</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Pricing</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                  </li>
                </ul>
              </div>

          </div>
      </nav>
    </div>
  );
};

export default NavBar;
