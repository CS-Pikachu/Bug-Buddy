import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions'; // make sure to look at route;

import { Container } from 'react-bootstrap';
import styles from './../public/bootstrap.css';

// import Header from './Header';
import LandingContainer from './LandingContainer.js';
import DashBoard from './DashBoard.js';
import PostBug from './PostBug.js';
import NavBar from './NavBar.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log('App.js: app mounted');
    this.props.fetchUser();
    console.log('App.js: props are', this.props);
  }
  render() {
    return (
      <BrowserRouter>
        <Container>
          <div>
            <NavBar />
            <Route exact path="/createbug" component={PostBug}></Route>
            <Route exact path="/dashboard" component={DashBoard}></Route>
            <Route exact path="/" component={LandingContainer}></Route>
          </div>
        </Container>
      </BrowserRouter>
    );
  }
}

// first arg is map state to props, second is action creaters
// all these actions are assigned to App as props
export default connect(null, actions)(App);
