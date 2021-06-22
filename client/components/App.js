import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
// import { connect } from 'react-redux';
// import * as actions from '../actions'; // make sure to look at route;
<<<<<<< HEAD
=======
import styles from './../public/bootstrap.css';
>>>>>>> dev
// import { Card, Nav } from 'react-bootstrap';
import styles from './../public/bootstrap.css';
import { Container } from 'react-bootstrap';

// import Header from './Header';
import LandingContainer from './LandingContainer.js';
import DashBoard from './DashBoard.js';
import NavBar from './NavBar.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}
  render() {
    return (
      <Container>
        <div>
          <NavBar />
          <br></br>
          <LandingContainer />
        </div>
      </Container>
    );
  }
}

// first arg is map state to props, second is action creaters
// all these actions are assigned to App as props
export default App;
