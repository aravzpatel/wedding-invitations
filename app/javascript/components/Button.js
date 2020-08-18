import React from "react"
import RsvpForm from "/Users/arav/Documents/Coding/weddingparty/wedding-form-app/app/javascript/components/RsvpForm.js"
import PropTypes from "prop-types"
class Button extends React.Component {
  render () {
    return (
      <div>
        <button className="submit" onClick={this.props.onClick}>RSVP</button>
      </div>
    );
  }
}

export default Button
