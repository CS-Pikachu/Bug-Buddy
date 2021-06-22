import React, { Component } from 'react';
import styles from './../public/bootstrap.css';

const NavBar = () => {
  return (
    <div>
      {/* <h1>NavBar Here</h1> */}
      <nav class="navbar navbar-light bg-light">
          <div class="container-fluid">
             <a class="navbar-brand" href="#">Bug-Buddy</a>
             {/* <img src="../assets/bblog.png" alt="bblog" width="30" height="30"> */}
             <a class="navbar-brand" href="#">Login</a>

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
