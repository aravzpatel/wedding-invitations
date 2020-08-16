import React from "react"
import PropTypes from "prop-types"
import $ from 'jquery';
class RsvPform extends React.Component {
  constructor(props){
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
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
      }
    })

    e.preventDefault();
  }

  handleInputChange(event){
    const target = event.target;
    const value = target.name === 'isGoing' ? target.checked : target.value;
    const name = target.name;
    const guestid = target.title
  }

  render () {
    var guests = this.props.guests
    console.log(guests)

    var guest_form = []

    for (const [index, value] of guests.entries()) {
      guest_form.push(
        <div key={value.id} className={value.first_name}>
          <div>
            <form onSubmit={this.handleSubmit}>
              <input type="hidden" 
              name="guestID"
              value={value.id}
              >
              </input>
              <label>
                First Name
                <input
                name="firstName"
                type="text"
                defaultValue = {value.first_name}
                onChange = {this.handleInputChange}
              ></input>
              
              <br></br>
              
              <label>
                Last Name
                <input
                name="lastName"
                type="text"
                defaultValue = {value.last_name}
                onChange = {this.handleInputChange}
                ></input>
              </label>
              <br></br>

              </label>
              <label>
                Attending?
                <input
                  name='isGoing'
                  type='checkbox'
                  onChange={this.handleInputChange}
                ></input><br></br>
              </label>
              <label>
                Email Address
                <input
                  name='email'
                  type="text"
                  onChange = {this.handleInputChange}
                ></input><br></br>
              </label>
              <input type="submit" value="Submit"></input>
            </form>
          </div>
        </div>
      )
    }

    return (
      <div>
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
