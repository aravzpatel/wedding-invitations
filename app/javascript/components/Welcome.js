import React from "react"
import PropTypes from "prop-types"
class Welcome extends React.Component {
  constructor(props){
    super(props);

    this.listNames = this.listNames.bind(this)
  }

  listNames(){
    var guests = this.props.guests;
    var names = [];
    names = guests.map((guest) => guest.first_name);
    var guestList;

    if(names.length > 1){
      return guestList = names.splice(0, names.length-1).join(', ') + ' and '+ names[names.length - 1]
    } else {
      return guestList = names[0]
    }
  }

  render () {
    return (
      <div className = 'welcome_greeting'>
        <h1>
          {this.listNames()}
        </h1>
      </div>
    );
  }
}

Welcome.propTypes = {
  guests: PropTypes.array
};

export default Welcome
