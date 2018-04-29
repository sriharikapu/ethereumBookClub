import React, { Component } from 'react';
import './App.css';
import {  Navbar, NavItem, Nav, NavDropdown, MenuItem,  } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
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
          <h3 style={{padding: 100 + 'px', textAlign: 'center'}}>You've just made sent transactions on two differt chains with a bridge function thanks to Oraclize.it</h3>
      </div>
    )
  }
}

export default Home;
