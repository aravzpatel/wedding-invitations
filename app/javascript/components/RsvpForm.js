import React from "react"
import PropTypes from "prop-types"
class RsvPform extends React.Component {
  constructor(props){
    super(props);
    this.state = { value: 'Grandma' }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleSubmit.bind(this);
  }

  handleChange(e){
    this.setState({value: e.target.value })
  }

  handleSubmit(e){
    alert('Form is working? ' + this.state.value );
    e.preventDefault();
  }

  render () {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit}>
          <input type="text" value={this.state.value} onChange={this.props.handleChange} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default RsvPform
