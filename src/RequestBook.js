import React, { Component } from 'react';
import './App.css';
import { Button, Modal, Popover, OverlayTrigger} from 'react-bootstrap';


class RequestBook extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    const popover = (
      <Popover id="modal-popover" title="User">
        <strong>Ratings:</strong>
        [match.ratings]
        <hr/>
        <strong>Reputation:</strong>
        [match.reputation]
      </Popover>
    );

    return (
      <div className="App">
        <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>
          Request Book
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Result Matched</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4><strong>You are matched with </strong></h4>
            <p>
              <strong>Username:</strong>
              [match.username]
              <hr/>
            </p>
            <p>
              Click for {' '}
              <OverlayTrigger overlay={popover}>
                <a href="#popover"> user detail </a>
              </OverlayTrigger>{' '}
              here
            </p>

            <hr />
            <h4><strong>Book Offered: </strong></h4>
              <div><img src={'http://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781442499577/random-9781442499577_lg.jpg'} alt="boohoo" className="img-responsive"/><span></span></div>
            <p>
              <strong>Title:</strong>
              [book.username]
              <hr/>
              <strong>Author:</strong>
              [book.author]
              <hr/>
              <strong>Review:</strong>
              [book.review]

            </p>

          </Modal.Body>
          <Modal.Footer>
            <Button bsStyle="success" bsSize="large">
              Accept
            </Button>
            <Button  bsStyle="danger" bsSize="large" onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

export default RequestBook;
