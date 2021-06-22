import React, { Component } from 'react';
import { Card, Row, Col, Image } from 'react-bootstrap';

class HighLabel extends Component {
  render() {
    return (
      <div className="bg-high">
        <div className="cardLabel" style={{ color: 'e81500' }}>
          <Card.Body>
            <Row>
              <Col>
                <Card.Title className="left-label">High Priority</Card.Title>
              </Col>
              <Col className="right-label">
                <Image
                  width="25"
                  height="25"
                  src="https://image.flaticon.com/icons/png/512/3203/3203142.png"
                />
              </Col>
            </Row>
          </Card.Body>
        </div>
      </div>
    );
  }
}

export default HighLabel;
