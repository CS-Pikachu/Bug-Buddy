import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
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
  }, []);
  console.log('Dashboard.js: props are', props);
  // console.log('Dashboard.js: bugs are', props.bugs);
  // const bugsApiCall = bugs.bugs;
  const bugsApiCall1 = [
    {
      id: 3,
      title: 'Home route',
      description:
        'You can still access home even if you are not logged in. This needs to rerouted to landing.',
      priority: 'high',
      status: 'open',
      dueDate: '2021-06-22T03:04:41.921Z',
      createdAt: '2021-06-23T03:04:41.921Z',
      updatedAt: '2021-06-23T03:04:41.921Z',
    },
    {
      id: 4,
      title: 'Update sql schema to include team id',
      description:
        'Add team id to schema so we do not have to iterate over all bugs',
      priority: 'medium',
      status: 'open',
      createdAt: '2021-06-23T03:04:41.921Z',
      updatedAt: '2021-06-23T03:04:41.921Z',
      dueDate: '2021-06-25T03:04:41.921Z',
    },
    {
      id: 6,
      title: 'Change font size in headers',
      description:
        'Font size in headers is too big, make it smaller and potentially add shadows',
      priority: 'low',
      status: 'open',
      createdAt: '2021-06-21T03:04:41.921Z',
      updatedAt: '2021-06-21T03:04:41.921Z',
      dueDate: '2021-06-29T03:04:41.921Z',
    },
    {
      id: 7,
      title: 'Add more rounded edges',
      description: 'Round out the edges on all the components',
      priority: 'low',
      status: 'open',
      createdAt: '2021-06-21T03:04:41.921Z',
      updatedAt: '2021-06-21T03:04:41.921Z',
      dueDate: '2021-06-29T03:04:41.921Z',
    },
  ];

  const renderBugs = (type) => {
    switch (props.bugs) {
      case null:
        return <div className="main-div">loading..</div>;
      default: {
        console.log('Dashboard.js | renderBugs: bugs are', props.bugs);

        // console.log('priority is', bugsApiCall[0]['priority']);
        // console.log('type is', type);
        const output = [];
        for (let i = 0; i < props.bugs.length; i++) {
          if (props.bugs[i]['priority'] == type) {
            if (props.bugs[i]['status'] == 'open') {
              output.push(
                TicketCard(
                  props.bugs[i]['title'],
                  props.bugs[i]['dueDate'].slice(5, 10),
                  props.bugs[i]['description'],
                  props.bugs[i]['updatedAt'].slice(5, 10)
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
  return { bugs: state.bugs };
};

export default connect(mapStateToProps, actions)(DashBoard);
