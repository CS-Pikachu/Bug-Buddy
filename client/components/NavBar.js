import React, { Component } from 'react';
import bblog from '../assets/bblog.png';
import { Button, Container } from 'react-bootstrap';

const NavBar = () => {
  return (
    <Container>
      <div className="nav-div">
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid">
            <div className="nav_leftside">
              <a
                className="navbar-brand"
                href="/auth/google"
                style={{ color: '4e73df' }}
              >
                Bug-Buddy
              </a>
              <img src={bblog} alt="bblog" width="30" height="30"></img>
            </div>

            <div className="nav_rightside">
              <Button
                className="mx-2"
                href="/auth/google"
                variant="outline-primary"
              >
                Login
              </Button>
              <Button
                className="mx-2"
                href="/auth/google"
                variant="outline-primary"
              >
                Get Started
              </Button>
            </div>
          </div>
        </nav>
      </div>
    </Container>
  );
};

export default NavBar;
