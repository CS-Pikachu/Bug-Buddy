import React, { Component, useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';

const useInput = (init) => {
    const [value, setValue] = useState(init);
    const onChange = (e) => {
      setValue(e.target.value);
    };
    return [value, onChange];
  };

const PostBug = (auth) => {
  //console.log('PostBug.js: props are', auth);
  console.log('PostBug.js: auth is', auth.auth);
  const thistime = new Date();
  console.log("this time is",thistime);
//   const shorttime = new Date().slice(0,10);
//   console.log("this time is",shorttime);

//   const shorttime = thistime.slice(0,10);
//   console.log(shorttime);
//   console.log("today",thistime);

  //const [userID, setuserID] = useInput(auth.auth);  
  const [title, setTitle] = useInput('title');
  const [description, setDescription] = useInput('description');
  const [priority, setPriority] = useInput("choose");
  const [status, setStatus] = useInput('open');
  const [createdAt, setCreatedAt] = useInput(thistime);
  const [updatedAt, setUpdatedAt] = useInput(thistime);
  const [dueDate, setDueDate] = useInput(thistime);

  const printBug = () => {
    console.log("button clicked");

    const body = {
        userID: auth.auth,
        title: title,
        description: description,
        priority: priority,
        status: status,
        createdAt: createdAt,
        updatedAt: updatedAt,        
        dueDate: dueDate
    };
    console.log("printBug body is: ", body)
}

  const sendBug = () => {
    const body = {
        userID: auth.auth,
        title: title,
        description: description,
        priority: priority,
        status: status,
        createdAt: createdAt,
        updatedAt: updatedAt,        
        dueDate: dueDate
    };
    console.log(body);
    fetch('/api/bugs/', {
        method: 'POST', 
        headers: {'Content-Type': 'Application/JSON',},
        body: JSON.stringify(body),
      })
    .then((res) => console.log('after the post sent', res))
    .catch((err) => console.log('error sending post request', err));
  };

  return (
    <Container>
      <div className="main-div">
      
            <Form.Group controlId="formTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control placeholder="Title ..."
                value={title}
                onChange={setTitle}
            />
            </Form.Group>
      
        <Form>
          <Form.Group controlId="formDesc">
            <Form.Label>Description</Form.Label>
              <Form.Control placeholder="Enter details ..." 
                value={description}
                onChange={setDescription}
              />
        </Form.Group>

        <Form.Group controlId="formDueDate">
          <Form.Label>Due Date</Form.Label>
            <Form.Control placeholder="Due Date"         
            value={dueDate}
            onChange={setDueDate}
            />
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
        value={priority}
        onChange={setPriority}
        className="my-1 mr-sm-2"
        id="inlineFormCustomSelectPref"
        custom
        >
        <option value="choose">Choose...</option>
        <option value="high">high</option>
        <option value="medium">medium</option>
        <option value="low">low</option>
        </Form.Control>
        </Form>

        <Button variant="primary" onClick={sendBug}>
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
