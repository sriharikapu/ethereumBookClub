/*eslint-enable no-unused-vars*/

import React, { Component } from 'react';
import './App.css';
import { Button,Form, FormGroup, Col, ControlLabel, FormControl , Navbar, NavItem, Nav, NavDropdown, MenuItem
          } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

import getWeb4 from './utils/getWeb4'
import BookClub from '../build/contracts/BookClub.json'


class SignUp extends Component {

  constructor(props) {
    super(props)

    this.state = {
      email: "blank",
      books: "blank",
      trade: "blank",
      web3: null
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentWillMount() {
    // Get network provider and web3 instance.
    // See utils/getWeb4 for more info.


    getWeb4
    .then(results => {
      this.setState({
        web3: results.web3
      })

      // Instantiate contract once web3 provided.
    })
    .catch(() => {
      console.log('Error finding web3.')
    })
  }


  handleSubmit(e) {
    e.preventDefault()
    console.log(this.state)
    if (this.state.web3) {
      console.log("cool")
      
      const contract = require('truffle-contract')
      const bookClub = contract(BookClub)
      bookClub.setProvider(this.state.web3.currentProvider)
  
      // Declaring this for later so we can chain functions on bookClub.
      var bookClubInstance
  
      // Get accounts.
      this.state.web3.eth.getAccounts((error, accounts) => {
        bookClub.deployed().then((instance) => {
          bookClubInstance = instance
  
        }).then((result) => {
          // Get the value from the contract to prove it worked.
          console.log(accounts)
          bookClubInstance.setUserInfo.sendTransaction(this.state.email, this.state.books, this.state.trade, {from: accounts[0]}).then((result) => {
            if(result) {
              console.log("sent")

              this.props.history.push('/homepage')
                
  
            } 

          })
        })
      })
    }

  }

  handleChange(e) {
    let name = e.target.name
    let val = e.target.value
    let newState = {...this.state}
    newState[name] = val
    this.setState(newState)
  }

  render() {
    
    return (


      <div className="App">
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

      <Form horizontal  onSubmit={(e) => this.handleSubmit(e)} className="App-Form">
        <FormGroup controlId="formHorizontalEmail">
          <Col componentClass={ControlLabel} sm={2}>
            Email
          </Col>
          <Col sm={10}>
            <FormControl name='email' type="input" placeholder="Email" onChange={this.handleChange} />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalPassword">
          <Col componentClass={ControlLabel} sm={2}>
            Favourite Books
          </Col>
          <Col sm={10}>
            <FormControl name='books' type="input" placeholder="Book Preferences, seperated by commas" onChange={this.handleChange}/>
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalPassword">
          <Col componentClass={ControlLabel} sm={2}>
            Book Willing To Trade
          </Col>
          <Col sm={10}>
            <FormControl name='trade' type="input" placeholder="Books to trade, seperated by commas" onChange={this.handleChange}/>
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

export default withRouter(SignUp);
