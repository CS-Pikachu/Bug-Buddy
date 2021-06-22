import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import TicketCard from './columns/TicketCard';

import HighLabel from './labels/HighLabel';
import MediumLabel from './labels/MediumLabel';
import LowLabel from './labels/LowLabel';

class DashBoard extends Component {
  render() {
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
            <Col>
              <TicketCard />
            </Col>
            <Col>
              <TicketCard />
            </Col>
            <Col>
              <TicketCard />
            </Col>
          </Row>
        </div>
      </Container>
    );
  }
}

export default DashBoard;
