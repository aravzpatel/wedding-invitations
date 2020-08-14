import React from "react"
import RsvpForm from "/Users/arav/Documents/Coding/weddingparty/wedding-form-app/app/javascript/components/RsvpForm.js"
import PropTypes from "prop-types"
class Button extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      displayForm: false
    }
  }
  
  // activateForm(e){
  //   e.preventDefault();
  //   console.log("Shit I've been clicked");
  //   this.setState({
  //     displayForm: !this.state.displayForm
  //   })
  // }
  
  render () {
    let form = null;

    if (this.state.displayForm) {
      form = (
        <div>
          <RsvpForm />
        </div>
      )
    }

    return (
      <div>
        <div>
          <button onClick={this.props.onClick}>RSVP</button>
        </div>
        <div>
          {form}
        </div>
      </div>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.function
};

export default Button
