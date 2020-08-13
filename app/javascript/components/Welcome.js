import React from "react"
import PropTypes from "prop-types"
class Welcome extends React.Component {
  constructor(props){
    super(props);

    this.listNames = this.listNames.bind(this)
  }

  listNames(guestParty){
    guestParty.map((guest) =>
      <li>{guest.first_name}</li>
    )
    console.log("listing name")
  }

  render () {
    var guests = this.props.guests
    var names = []
    names = guests.map((guest) => guest.first_name)
    var guestList

    if(names.length > 1){
      guestList = names.splice(names.length-1, 1) + ' and '+ names[names.length - 1]
    } else {
      guestList = names[0]
    }

    return (
      <div className = 'secondary'>
        <h1>{
          'Welcome ' + guestList
        }</h1>
      </div>
    );
  }
}

Welcome.propTypes = {
  guests: PropTypes.array
};

export default Welcome
