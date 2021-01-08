import React from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import axios from "axios";
class RsvPform extends React.Component {
  constructor(props){
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){
    const data = new FormData(event.target);
    var id = data.get("guestID");
    var firstName = data.get("firstName");
    var lastName = data.get("lastName");
    var email = data.get("email");
    var attending;
    data.get("isGoing") === "on" ? attending = true : attending = false;
    var guestbutton = document.getElementById(id);

    axios.put("/guests", {
      id: id, first_name: firstName, 
      last_name: lastName, email: email, 
      rsvp: attending
    })
      .then((response) => {
        console.log("it worked");
        guestbutton.style.display = "none";
        this.props.onSubmit(); 
      }), (error) => {
      console.log(error);
    };

    event.preventDefault();
  }

  render () {
    var guests = this.props.guests;

    var guest_form = [];

    for (const [index, value] of guests.entries()) {
      guest_form.push(
        <div key={value.id} className={value.first_name}>
          <Form onSubmit={this.handleSubmit}>
            <Form.Control type="hidden" name="guestID" value={value.id}></Form.Control>
            <Form.Row>
              <Col>
                <Form.Control name="firstName" defaultValue= {value.first_name}></Form.Control>
              </Col>
              <br></br>
              <Col>
                <Form.Control name="lastName" defaultValue= {value.last_name}></Form.Control>
              </Col>
            </Form.Row>
            <br></br>
            <Form.Row>
              <Col>
                <Form.Control name="email" type="email" placeholder="Enter email"></Form.Control>
              </Col>
            </Form.Row>
              
            <br></br>
            <Form.Row className="align-items-center">
              <Col>
                <Form.Check label="Attending?" type="checkbox" name="isGoing"></Form.Check>
              </Col>
              <br></br>
              <Col>
                <Button className="rsvp-button" id={value.id} type="submit">
                  Submit
                </Button>
              </Col>
            </Form.Row>
            <br></br>
          </Form>
        </div>
      );
    }

    return (
      <div className="form">
        <div className="header">Please reply ASAP to let us know if you can make it</div>
        <div>
          {guest_form}
        </div>
      </div>
    );
  }
}

export default RsvPform;
