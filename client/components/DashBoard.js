import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';

import TicketCard from './columns/TicketCard';

import HighLabel from './labels/HighLabel';
import MediumLabel from './labels/MediumLabel';
import LowLabel from './labels/LowLabel';

const DashBoard = (bugs) => {
  console.log('Dashboard.js: bugs are', bugs.bugs);
  const bugsApiCall = [
    {
      id: 3,
      title: 'Home route',
      description:
        'You can still access home even if you are not logged in. This needs to rerouted to landing.',
      priority: 'high',
      status: 'open',
      createdAt: '2021-06-23T03:04:41.921Z',
      updatedAt: '2021-06-23T03:04:41.921Z',
      dueDate: '2021-06-22T03:04:41.921Z',
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
  const bugParser = (bugsApiCall, type) => {
    console.log('Dashboard.js | bugParser: bugs are', bugsApiCall);

    console.log('priority is', bugsApiCall[0]['priority']);
    console.log('type is', type);
    const output = [];
    for (let i = 0; i < bugsApiCall.length; i++) {
      if (bugsApiCall[i]['priority'] == type) {
        if (bugsApiCall[i]['status'] == 'open') {
          output.push(
            TicketCard(
              bugsApiCall[i]['title'],
              bugsApiCall[i]['dueDate'].slice(5, 10),
              bugsApiCall[i]['description'],
              bugsApiCall[i]['updatedAt'].slice(5, 10)
            )
          );
        }
      }
    }
    return output;
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
          <Col>{bugParser(bugsApiCall, 'high')}</Col>
          {/* Medium priority column*/}
          <Col>{bugParser(bugsApiCall, 'medium')}</Col>
          {/* Low priority column*/}
          <Col>{bugParser(bugsApiCall, 'low')}</Col>
        </Row>
      </div>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return { bugs: state.bugs };
};

export default connect(mapStateToProps, null)(DashBoard);
