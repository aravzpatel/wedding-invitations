import React from "react"
import PropTypes from "prop-types"
class RsvPform extends React.Component {
  constructor(props){
    super(props);
    this.state = { 
      firstName: 'Grandma',
      isGoing: true
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleChange(e){
    this.setState({value: e.target.value })
    
  }

  handleSubmit(e){
    console.log(this)
    alert('Form is working? ' + this.state.firstName + this.state.isGoing );
    e.preventDefault();
  }

  handleInputChange(event){
    const target = event.target;
    const value = target.name === 'isGoing' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    })
  }

  render () {
    return (
      <div>
          <form onSubmit={this.handleSubmit}>
            <input
              name="firstName"
              type="text"
              defaultValue = {this.state.firstName}
              onChange = {this.handleInputChange}
            ></input>
            <label>
              Yes
              <input
                name='isGoing'
                type='checkbox'
                checked = {this.state.isGoing}
                onChange={this.handleInputChange}
              ></input>
            </label>
            <input type="submit" value="Submit"></input>
          </form>
      </div>
    );
  }
}



export default RsvPform
