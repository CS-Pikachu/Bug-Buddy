import React, { Component } from 'react';
import bblog from '../assets/bblog.png';
import { Button, Container } from 'react-bootstrap';
import { connect } from 'react-redux';

const NavBar = (auth) => {
  console.log('NavBar.js: props are', auth);

  const rightSideOfNavBar = () => {
    switch (auth.auth) {
      case null:
        // never supposed to hit
        return (
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
        );
        return;
      case false:
        // case where user is not logged in
        return (
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
        );
      default:
        // case where user is logged in
        return (
          <div className="nav_rightside">
            <Button
              className="mx-2"
              href="/api/logout"
              variant="outline-primary"
            >
              Logout
            </Button>
          </div>
        );
    }
  };

  return (
    <Container>
      <div className="nav-div">
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid">
            <div className="nav_leftside">
              <a
                className="navbar-brand"
                href="/checkdashboard"
                style={{ color: '4e73df' }}
              >
                Bug-Buddy
              </a>
              <img src={bblog} alt="bblog" width="30" height="30"></img>
            </div>

            <div className="nav_rightside">{rightSideOfNavBar()}</div>
          </div>
        </nav>
      </div>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return { auth: state.auth };
};

export default connect(mapStateToProps, null)(NavBar);
