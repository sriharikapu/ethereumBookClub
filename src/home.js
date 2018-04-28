import React, { Component } from 'react';
import './App.css';
import { Button,ButtonToolbar  } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {RequestBook} from './RequestBook';

class Home extends Component {
  render() {
    return (
      <div>

      <a id="view-profile" href="/view-profile">View Profile</a>
      <div id="button-group-center">
        <RequestBook/>
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
