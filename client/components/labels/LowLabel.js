import React, { Component } from 'react';
import { Card, Row, Col, Image } from 'react-bootstrap';

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
                <Image
                  width="25"
                  height="25"
                  src="https://github.com/CS-Pikachu/Bug-Buddy/blob/dashboard/client/assets/low.png?raw=true"
                />
              </Col>
            </Row>
          </Card.Body>
        </div>
      </div>
    );
  }
}

export default LowLabel;
