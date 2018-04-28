import React, { Component } from 'react';
import './App.css';
import { Button, Jumbotron, Navbar, NavItem, Nav, NavDropdown, MenuItem, Alert} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class Begin extends Component {
  render() {
    return (
      <div className="App">
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="homepage/">CoinBook</Link>
          </Navbar.Brand>
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
          <h1 className="App-title">Welcome To CoinBook</h1>
        </header>
        <Jumbotron>
          <h1>Hello, Book Lover and Blockchain Enthusiast!</h1>
          <p>
            This is a special and limited book club exists on the blockchain to encourage blockgeeks to read books and
            potentially earn more money.
          </p>
          <p>
            <Button bsStyle="info" ><Link to="signup/">Join Club </Link></Button>
          </p>
        </Jumbotron>

        <Alert bsStyle="info"> Membership Agreement: 10 eth for membership fee and member for life!</Alert>



      </div>
    )
  }
}

export default Begin;
