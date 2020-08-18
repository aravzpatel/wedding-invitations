import React from "react"
import PropTypes from "prop-types"
import $ from 'jquery';
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
class RsvPform extends React.Component {
  constructor(props){
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    const data = new FormData(event.target);
    var id = data.get('guestID')
    var firstName = data.get('firstName')
    var lastName = data.get('lastName')
    var email = data.get('email')
    var attending;
    data.get('isGoing') === 'on' ? attending = true : attending = false
    
    $.ajax({
      url: `/guests`,
      type: 'PUT',
      data: {id: id, first_name: firstName, last_name: lastName, email: email, rsvp: attending},
      success: () => {
        console.log("it worked")
        this.props.onSubmit(); 
      }
    })

    e.preventDefault();
  }

  render () {
    console.log(this.props)
    var guests = this.props.guests

    var guest_form = []

    for (const [index, value] of guests.entries()) {
      guest_form.push(
        <div key={value.id} className={value.first_name}>
          <Form onSubmit={this.handleSubmit}>
            <Form.Control type="hidden" name="guestID" value={value.id}></Form.Control>
            <Form.Row>
              <Col xs="auto">
                <Form.Control name="firstName" defaultValue= {value.first_name}></Form.Control>
              </Col>
              <Col xs="auto">
                <Form.Control name="lastName" defaultValue= {value.last_name}></Form.Control>
              </Col>
            </Form.Row>
            <br></br>
            <Form.Row className="align-items-center">
              <Col xs="auto">
                <Form.Control name="email" type="email" placeholder="Enter email"></Form.Control>
              </Col>
              <Col xs="auto">
                <Form.Check label="Attending?" type="checkbox" name="isGoing"></Form.Check>
                <Form.Control.Feedback type="valid">WooHoo!</Form.Control.Feedback>
              </Col>
              <Col xs="auto">
                <Button className="rsvp-button" type="submit">
                  Submit
                </Button>
              </Col>
            </Form.Row>
            <br></br>
          </Form>
        </div>
      )
    }

    return (
      <div className="rsvp-form">
        <div className="Header">Please reply by 5th September 2020 to let us know if you can make it</div>
          <div>
            {guest_form}
          </div>
      </div>
    );
  }
}

RsvPform.propTypes = {
  guests: PropTypes.array
};

export default RsvPform
