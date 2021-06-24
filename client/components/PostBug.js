import React, { Component } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';


const PostBug = (auth) => {
    console.log('PostBug.js: props are', auth);

  return (
    <Container>
      <div className="main-div">
      
            <Form.Group controlId="formGridAddress1">
            <Form.Label>Title</Form.Label>
            <Form.Control placeholder="Title ..." />
            </Form.Group>
      
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Description</Form.Label>
              <Form.Control placeholder="Enter details ..." />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Due Date</Form.Label>
            <Form.Control placeholder="Due Date" />
            <Form.Text className="text-muted">
                  Please use "YYYY-MM-DD"
                </Form.Text>
        </Form.Group>
    
        <Form inline>
        <Form.Label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">
        Priority
        </Form.Label>
        <Form.Control
        as="select"
        className="my-1 mr-sm-2"
        id="inlineFormCustomSelectPref"
        custom
        >
        <option value="0">Choose...</option>
        <option value="1">high</option>
        <option value="2">medium</option>
        <option value="3">low</option>
        </Form.Control>
        </Form>

        <Button variant="primary" type="submit">
            Submit
        </Button>

    </Form>

      </div>
    </Container>
  );
};

const mapStateToProps = (state) => {
    return { auth: state.auth };
  };
  
  export default connect(mapStateToProps, null)(PostBug);
