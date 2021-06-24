import React, { Component } from 'react';
import {
  Container,
  Card,
  Button,
  Col,
  Row,
  ListGroup,
  Accordion,
} from 'react-bootstrap';

const TicketCard = (title, dueDate, description, updatedAt) => {
  return (
    <Card className="mt-2">
      <Card.Header>
        <Card.Title style={{ color: '4e73df' }}>{title}</Card.Title>
      </Card.Header>
      <Card.Body>
        <Accordion defaultActiveKey="1">
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
              <Card.Body>Chris: This is rubbish</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>

        <Container>
          <Row>
            <Col>
              <Button variant="primary" size="sm" className="left-side-button">
                Edit
              </Button>
            </Col>
            <Col>
              <Button variant="primary" size="sm" className="right-side-button">
                Done
              </Button>
            </Col>
          </Row>
        </Container>
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
            <small className="text-muted">Erik Matevosyan</small>
          </Col>
          <Col>
            <small className="text-muted">{updatedAt}</small>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
};

export default TicketCard;
