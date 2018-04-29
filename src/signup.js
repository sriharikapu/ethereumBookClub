/*eslint-enable no-unused-vars*/

import React, { Component } from 'react';
import './App.css';
import { Button,Form, FormGroup, Col, ControlLabel, FormControl
          } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

class SignUp extends Component {

  handleSubmit(e) {
    e.preventDefault()
    
  }

  render() {
    
    return (


      <div className="App">

      <Form horizontal  onSubmit={(e) => this.handleSubmit(e)}>
        <FormGroup controlId="formHorizontalEmail">
          <Col componentClass={ControlLabel} sm={2}>
            Email
          </Col>
          <Col sm={10}>
            <FormControl type="input" placeholder="Email" />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalPassword">
          <Col componentClass={ControlLabel} sm={2}>
            Favourite Books
          </Col>
          <Col sm={10}>
            <FormControl type="input" placeholder="Book Preferences, seperated by commas" />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalPassword">
          <Col componentClass={ControlLabel} sm={2}>
            Book Willing To Trade
          </Col>
          <Col sm={10}>
            <FormControl type="input" placeholder="Books to trade, seperated by commas" />
          </Col>
        </FormGroup>
        <FormGroup>
          <Col smOffset={2} sm={8}>
            <Button id="create-profile-button" type="submit"><div onSubmit={(e) => this.handleSubmit(e)}>Submit</div></Button>
          </Col>
        </FormGroup>
      </Form>



      </div>
    )
  }
}

export default SignUp;
