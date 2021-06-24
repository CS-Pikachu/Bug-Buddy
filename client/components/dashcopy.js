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
      title: 'High Card Title',
      description: 'High Card example',
      priority: 'high',
      status: 'closed',
      createdAt: '2021-06-23T03:04:41.921Z',
      updatedAt: '2021-06-23T03:04:41.921Z',
      dueDate: '2021-06-29T03:04:41.921Z',
    },
    {
      id: 4,
      title: 'Med Card Title',
      description: 'Medium Card Example',
      priority: 'medium',
      status: 'closed',
      createdAt: '2021-06-23T03:04:41.921Z',
      updatedAt: '2021-06-23T03:04:41.921Z',
      dueDate: '2021-06-29T03:04:41.921Z',
    },
    {
      id: 6,
      title: 'Low Card Title',
      description: 'Low Card Example',
      priority: 'low',
      status: 'open',
      createdAt: '2021-06-21T03:04:41.921Z',
      updatedAt: '2021-06-21T03:04:41.921Z',
      dueDate: '2021-06-29T03:04:41.921Z',
    },
    {
      id: 7,
      title: 'Another low Card Title',
      description: 'Another Card Example',
      priority: 'low',
      status: 'open',
      createdAt: '2021-06-21T03:04:41.921Z',
      updatedAt: '2021-06-21T03:04:41.921Z',
      dueDate: '2021-06-29T03:04:41.921Z',
    },
  ];
  const bugParser = (bugsApiCall, type) => {
    console.log('Dashboard.js | bugParser: bugs are', bugsApiCall);
    const high = [];
    const medium = [];
    const low = [];

    console.log('priority is', bugsApiCall[0]['priority']);
    console.log('type is', type);
    for (let i = 0; i < bugsApiCall.length; i++) {
      if (bugsApiCall[i]['priority'] == type) {
        if (type === 'high') {
          high.push(
            TicketCard(
              bugsApiCall[i]['title'],
              bugsApiCall[i]['dueDate'].slice(5, 10),
              bugsApiCall[i]['description'],
              bugsApiCall[i]['updatedAt'].slice(5, 10)
            )
          );
        } else if (type === 'medium') {
          medium.push(
            TicketCard(
              bugsApiCall[i]['title'],
              bugsApiCall[i]['dueDate'].slice(5, 10),
              bugsApiCall[i]['description'],
              bugsApiCall[i]['updatedAt'].slice(5, 10)
            )
          );
        } else if (type === 'low') {
          low.push(
            TicketCard(
              bugsApiCall[i]['title'],
              bugsApiCall[i]['dueDate'].slice(5, 10),
              bugsApiCall[i]['description'],
              bugsApiCall[i]['updatedAt'].slice(5, 10)
            )
          );
        }
      }
      // we have details to input into ticket card
      // bugid
      // bug description
      // bug status
      // bug priority
      // updated
      // if priority == high, highBugs.push(ticket)
    }
    const allBugs = {
      high,
      medium,
      low,
    };
    // array of ticket cards
    return allBugs[type];
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
