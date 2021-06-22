import React, { Component } from 'react';
import { Card, Row, Col, Image } from 'react-bootstrap';
import medium from '../../assets/medium.png';

class MediumLabel extends Component {
  render() {
    return (
      <div className="bg-medium">
        <div className="cardLabel" style={{ color: 'f6c23e' }}>
          <Card.Body>
            <Row>
              <Col>
                <Card.Title className="left-label">Medium Priority</Card.Title>
              </Col>
              <Col className="right-label">
                <Image
                  width="25"
                  height="25"
                  src={medium}
                />
              </Col>
            </Row>
          </Card.Body>
        </div>
      </div>
    );
  }
}

export default MediumLabel;
