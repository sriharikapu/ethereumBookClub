import React, { Component } from 'react';
import './App.css';
import { Button, Jumbotron, Navbar, NavItem, Nav, NavDropdown, MenuItem, Alert} from 'react-bootstrap';
import {Link, withRouter} from 'react-router-dom';

import getWeb3 from './utils/getWeb3'
import getWeb4 from './utils/getWeb4'
import Bridge from '../build/contracts/Bridge.json'

class Begin extends Component {

  constructor(props) {
    super(props)

    this.state = {
      web3: null,
      web4: null
    }
    this._poll()
    this.handleClick = this.handleClick.bind(this)
  }

  componentWillMount() {
    // Get network provider and web3 instance.
    // See utils/getWeb3 for more info.

    getWeb3
    .then(results => {
      this.setState({
        web3: results.web3
      })

      // Instantiate contract once web3 provided.
    })
    .catch(() => {
      console.log('Error finding web3.')
    })

    getWeb4
    .then(results => {
      this.setState({
        web4: results.web4
      })

      // Instantiate contract once web3 provided.
    })
    .catch(() => {
      console.log('Error finding web3.')
    })
  }

  _poll(){
    function myStopFunction() {
      clearTimeout(myTimeOut);
    }
    if (this.state.web3 && !this.state.web4) {
    const contract = require('truffle-contract')
    const bridge = contract(Bridge)
    bridge.setProvider(this.state.web3.currentProvider)

    // Declaring this for later so we can chain functions on bridge.
    var bridgeInstance

    // Get accounts.
    this.state.web3.eth.getAccounts((error, accounts) => {
      bridge.deployed().then((instance) => {
        bridgeInstance = instance

      }).then((result) => {
        // Get the value from the contract to prove it worked.
        console.log(accounts)
        bridgeInstance.isMember.call(accounts[0]).then((result) => {
          if(result) {
            alert("Your a Member! Switch to Rinkeby in MetaMask")
            if(this.props.history.location.pathname !== '/signup') { 
              myStopFunction()
              this.props.history.push('/signup')
              
            }

          } 
            // else {
            //   if(this.props.history.location.pathname !== '/') { 
            //     this.props.history.push('/')
            // }
          // }
        })
      })
    })
  }
  

    let myTimeOut = setTimeout(this._poll.bind(this), 1000);
  }

  handleClick() {
    /*
     * SMART CONTRACT EXAMPLE
     *
     * Normally these functions would be called in the context of a
     * state management library, but for convenience I've placed them here.
     */

    const contract = require('truffle-contract')
    const bridge = contract(Bridge)
    bridge.setProvider(this.state.web3.currentProvider)

    // Declaring this for later so we can chain functions on bridge.
    var bridgeInstance

    // Get accounts.
    this.state.web3.eth.getAccounts((error, accounts) => {
      bridge.deployed().then((instance) => {
        bridgeInstance = instance

        // Stores a given value, 5 by default.
        // return bridgeInstance.set(5, {from: accounts[0]})
      }).then((result) => {
        // Get the value from the contract to prove it worked.
        console.log(accounts)
        return bridgeInstance.joinBookClub.sendTransaction({from: accounts[0], value: 1e17})
      }).then((result) => {
        // Update state with the result.
        console.log(result)
      })
    })
  }

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
          <h2>
            Use MetaMask on the <strong>Ropsten Network</strong> to join
          </h2>
          <p>
            <Button bsStyle="info" ><div onClick={this.handleClick} >Join Club </div></Button>
          </p>
        </Jumbotron>

        <Alert bsStyle="info"> Membership Agreement: 0.1 eth for membership fee and member for life!</Alert>



      </div>
    )
  }
}

export default withRouter(Begin);
