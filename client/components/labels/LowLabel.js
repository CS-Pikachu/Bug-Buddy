import React, { Component } from 'react';
import { Card, Row, Col, Image } from 'react-bootstrap';
import low from '../../assets/low.png';

class LowLabel extends Component {
  render() {
    return (
      <div className="bg-low">
        <div className="cardLabel" style={{ color: '00ac69' }}>
          <Card.Body>
            <Row>
              <Col>
                <Card.Title className="left-label">Low Priority</Card.Title>
              </Col>
              <Col className="right-label">
                <Image width="35" height="35" src={low} />
              </Col>
            </Row>
          </Card.Body>
        </div>
      </div>
    );
  }
}

export default LowLabel;
