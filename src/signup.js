import React, { Component } from 'react';
import './App.css';
import { Button, Jumbotron, Navbar, NavItem, Nav, NavDropdown, MenuItem, Alert,
          Form, FormGroup, Col, ControlLabel, FormControl, Checkbox
          } from 'react-bootstrap';
import {Link} from 'react-router-dom';

class SignUp extends Component {
  render() {
    return (
      <div className="App">

      <Form horizontal>
        <FormGroup controlId="formHorizontalEmail">
          <Col componentClass={ControlLabel} sm={2}>
            Email
          </Col>
          <Col sm={10}>
            <FormControl type="email" placeholder="Email" />
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
            <Button id="create-profile-button" type="submit"><Link to="homepage/">Submit</Link></Button>
          </Col>
        </FormGroup>
      </Form>




      </div>
    )
  }
}

export default SignUp;
