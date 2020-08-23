import React from "react"
import PropTypes from "prop-types"
import $ from 'jquery';
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
class AddressForm extends React.Component {
  constructor(props){
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit(e){
    const data = new FormData(event.target);
    var id = data.get('partyID')
    var line1 = data.get('addressLine1')
    var line2 = data.get('addressLine2')
    var town = data.get('town')
    var postcode = data.get('postcode')
    var country = data.get('country')
    
    $.ajax({
      url: `/party`,
      type: 'PUT',
      data: {id: id, address_line_1: line1, address_line_2: line2, town: town, postcode: postcode, country: country},
      success: () => {
        console.log("it worked")
        console.log(this.props)
        this.props.onSubmit(); 
      }
    })

    e.preventDefault();
  }

  render () {
    console.log(this.props.party)
    return (
      <div className="form">
        <div className="header">Please provide your address</div>
        <Form onSubmit={this.handleSubmit}>
          <input type="hidden" name="partyID" value={this.props.party.slug}></input>
          <Form.Control name="addressLine1" placeholder="Address Line 1" required></Form.Control>
          <br></br>
          <Form.Control name="addressLine2" placeholder="Address Line 2" required></Form.Control>
          <br></br>
          <Form.Row>
            <Col>
              <Form.Control name="town" placeholder="City/Town" required></Form.Control>
            </Col>
            <br></br>
            <Col>
              <Form.Control name="postcode" placeholder="Postcode" required></Form.Control>
            </Col>
            <br></br>
          </Form.Row>
          <br></br>
          <Form.Row>
            <Col>
              <Form.Control name="country" placeholder="Country" required></Form.Control>
            </Col>
            <br></br>
            <Col>
              <Button className="rsvp-button" type="submit">Submit</Button>  
            </Col>
          </Form.Row>
        </Form>
      </div>
    );
  }
}

export default AddressForm
