import React from "react"
import PropTypes from "prop-types"
import $ from 'jquery';
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
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="hidden" name="partyID" value={this.props.party.slug}></input>
          <input 
            type="text"
            name="addressLine1"
            placeholder="Address Line 1"
            required
          ></input>
          <input 
            type="text"
            name="addressLine2"
            placeholder="Address Line 2"
          ></input>
          <input 
            type="text"
            name="town"
            placeholder="Town"
            required
          ></input>
          <input 
            type="text"
            name="postcode"
            placeholder="postcode"
            required
          ></input>
          <input 
            type="text"
            name="country"
            placeholder="Country"
            required
          ></input>
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    );
  }
}

export default AddressForm
