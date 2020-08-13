import React from "react"
import PropTypes from "prop-types"
class Button extends React.Component {
  constructor(props){
    super(props);

    this.activateForm = this.activateForm.bind(this)
  }
  
  activateForm(e){
    e.preventDefault();
    console.log("Shit I've been clicked");
  }
  
  render () {
    return (
      <div>
        <button onClick={this.activateForm}>RSVP</button>
      </div>
    );
  }
}

export default Button
