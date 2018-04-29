import React, { Component } from 'react';
import './App.css';
import { Button,ButtonToolbar, Navbar, NavItem, Nav, NavDropdown, MenuItem,  } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import {RequestBook} from './RequestBook';

class Home extends Component {
  render() {
    return (
      <div>
      <Navbar>
        <Navbar.Header>

          <Navbar.Brand>
            <a href="">Hackital</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="#">
            Home
          </NavItem>
          <NavItem eventKey={2} href="#">
            About
          </NavItem>
          <NavDropdown eventKey={3} title="Detail" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Technology Stack</MenuItem>
            <MenuItem eventKey={3.2}>Members</MenuItem>
            <MenuItem eventKey={3.3}>Hackital</MenuItem>
            <MenuItem divider />
          </NavDropdown>
        </Nav>
      </Navbar>




        <header className="App-header">
          <h1 className="App-title">Welcome To DeCentralBooking</h1>
        </header>

      <a id="view-profile" href="/view-profile">View Profile</a>
      <div id="button-group-center">
        <ButtonToolbar>
          <Button bsStyle="info"><Link to="request/"> View Member Ranking</Link> </Button>
        </ButtonToolbar>
        <ButtonToolbar>
          <Button bsStyle="warning"><Link to="request/"> View Current Scam Votes</Link> </Button>
        </ButtonToolbar>
        <ButtonToolbar>
          <Button bsStyle="danger"><Link to="request/"> Report Scammer </Link></Button>
        </ButtonToolbar>
      </div>
      </div>
    )
  }
}

export default Home;
