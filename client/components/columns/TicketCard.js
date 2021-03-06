import React, { useState } from 'react';
import { Container, Card, Button, Col, Row, Accordion } from 'react-bootstrap';

import { connect } from 'react-redux';
import * as actions from '../../actions'; // make sure to look at route;

const TicketCard = (title, dueDate, description, updatedAt, comment, owner) => {
  console.log('inside ticket card', title);
  const donehelper = (details) => {
    // takes in a bugId
    // creates an object with bug id and status:done
    // calls the updateBug action creater
  };

  switch (comment) {
    case '':
      return (
        <Card className="mt-2">
          <Card.Header>
            <Card.Title style={{ color: '4e73df' }}>{title}</Card.Title>
          </Card.Header>
          <Card.Body>
            <Accordion defaultActiveKey="3">
              <Card>
                <Card.Header>
                  <span className="left-side">Due:</span>
                  <span className="right-side">{dueDate}</span>
                </Card.Header>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1">
                  Details:
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>{description}</Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>

            {/* <Container>
              <Row>
                <Col>
                  <Button
                    variant="primary"
                    size="sm"
                    className="left-side-button"
                  >
                    Edit
                  </Button>
                </Col>
                <Col>
                  <Button
                    variant="primary"
                    size="sm"
                    className="right-side-button"
                  >
                    Done
                  </Button>
                </Col>
              </Row>
            </Container> */}
          </Card.Body>
          <Card.Footer>
            <Row>
              <Col sm="7">
                <small className="text-muted">Owner:</small>
              </Col>
              <Col>
                <small className="text-muted">Last updated:</small>
              </Col>
            </Row>
            <Row>
              <Col sm="7">
                <small className="text-muted">{owner}</small>
              </Col>
              <Col>
                <small className="text-muted">{updatedAt}</small>
              </Col>
            </Row>
          </Card.Footer>
        </Card>
      );
    default:
      return (
        <Card className="mt-2">
          <Card.Header>
            <Card.Title style={{ color: '4e73df' }}>{title}</Card.Title>
          </Card.Header>
          <Card.Body>
            <Accordion defaultActiveKey="3">
              <Card>
                <Card.Header>
                  <span className="left-side">Due:</span>
                  <span className="right-side">{dueDate}</span>
                </Card.Header>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1">
                  Details:
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>{description}</Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="2">
                  Comments:
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                  <Card.Body>{comment}</Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>

            {/* <Container>
              <Row>
                <Col>
                  <Button
                    variant="primary"
                    size="sm"
                    className="left-side-button"
                  >
                    Edit
                  </Button>
                </Col>
                <Col>
                  <Button
                    variant="primary"
                    size="sm"
                    className="right-side-button"
                  >
                    Done
                  </Button>
                </Col>
              </Row>
            </Container> */}
          </Card.Body>
          <Card.Footer>
            <Row>
              <Col sm="7">
                <small className="text-muted">Owner:</small>
              </Col>
              <Col>
                <small className="text-muted">Last updated:</small>
              </Col>
            </Row>
            <Row>
              <Col sm="7">
                <small className="text-muted">{owner}</small>
              </Col>
              <Col>
                <small className="text-muted">{updatedAt}</small>
              </Col>
            </Row>
          </Card.Footer>
        </Card>
      );
  }
};

// const mapStateToProps = (state) => {
//   console.log('supsect a crash coming');
//   return { update: state.update };
// };

// export default connect(mapStateToProps, actions)(TicketCard);

export default TicketCard;
