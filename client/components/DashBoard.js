import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actions from '../actions'; // make sure to look at route;

import TicketCard from './columns/TicketCard';

import HighLabel from './labels/HighLabel';
import MediumLabel from './labels/MediumLabel';
import LowLabel from './labels/LowLabel';

const DashBoard = (props) => {
  // use effect and get all fetchBugs
  useEffect(() => {
    props.fetchBugs();
    props.fetchComments();
    props.fetchAllUsers();
  }, []);
  console.log('Dashboard.js: props are', props);
  const renderBugs = (type) => {
    switch (props.bugs && props.comments && props.users) {
      case null:
        return <div className="main-div">loading..</div>;
      default: {
        console.log('Dashboard.js | renderBugs: bugs are', props.bugs);
        console.log('Dashboard.js | renderBugs: comments are', props.comments);
        console.log('Dashboard.js | renderBugs: users are', props.users);

        // console.log('priority is', bugsApiCall[0]['priority']);
        // console.log('type is', type);
        const output = [];
        for (let i = 0; i < props.bugs.length; i++) {
          if (props.bugs[i]['priority'] == type) {
            if (props.bugs[i]['status'] == 'open') {
              // itterate over comments and see if any of thier id's match the bug.
              let commentDisplay = '';
              let ownerDisplay = '';
              props.comments.forEach((comment) => {
                if (comment.bugId == props.bugs[i]['id']) {
                  commentDisplay = comment.text;
                }
              });
              props.users.forEach((user) => {
                if (user.id == props.bugs[i]['userId']) {
                  ownerDisplay = user.username;
                }
              });

              output.push(
                TicketCard(
                  props.bugs[i]['title'],
                  props.bugs[i]['dueDate'].slice(5, 10),
                  props.bugs[i]['description'],
                  props.bugs[i]['updatedAt'].slice(5, 10),
                  commentDisplay,
                  ownerDisplay
                )
              );
            }
          }
        }
        return output;
      }
    }
  };

  return (
    <Container>
      <div className="main-div">
        <Row>
          <Col>
            <HighLabel />
          </Col>
          <Col>
            <MediumLabel />
          </Col>
          <Col>
            <LowLabel />
          </Col>
        </Row>
        <Row>
          {/* High priority column*/}
          <Col>{renderBugs('high')}</Col>
          {/* Medium priority column*/}
          <Col>{renderBugs('medium')}</Col>
          {/* Low priority column*/}
          <Col>{renderBugs('low')}</Col>
        </Row>
      </div>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return { bugs: state.bugs, comments: state.comments, users: state.users };
};

export default connect(mapStateToProps, actions)(DashBoard);
