import React from "react"
import Welcome from "./Welcome"
import PropTypes from "prop-types"
import Artwork from "./Artwork"
import Button from "./Button"
import RsvPform from "./RsvpForm"
import AddressForm from "./AddressForm"
import Container from 'react-bootstrap/Container'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      displayWelcome: true,
      completedRSVP: 0,
      numberGuests: this.props.guests.length,
      completeAddress: false
    }

    this.changeView = this.changeView.bind(this)
    this.onRSVPSubmit = this.onRSVPSubmit.bind(this)
    this.onAddressSubmit = this.onAddressSubmit.bind(this)
  }

  changeView(){
    this.setState({
      displayWelcome: false
    })
  }

  onRSVPSubmit(){
    this.setState({
      completedRSVP: this.state.completedRSVP + 1
    })
  }

  onAddressSubmit(){
    console.log("do i get here?")
    this.setState({
      completeAddress: true
    })
    console.log(this.state)
  }

  render () {
    let form = null;

    let artwork = (
      <div>
        <Artwork />
      </div>
    )

    let welcome = (
      <div>
        <Welcome guests={this.props.guests}/>
      </div>
    )
    
    let button = (
      <div>
        <Button onClick={this.changeView}/>
      </div>
    )

    let address = null;
    
    if(this.state.displayWelcome === false){
      welcome = null;
      artwork = null;
      button = null;
      form = (
        <div>
          <RsvPform guests={this.props.guests} onSubmit = {this.onRSVPSubmit} />
        </div>
      )
    }

    if(this.state.completedRSVP === this.state.numberGuests){
      form = null;
      address = (
        <div>
          <AddressForm party = {this.props.party} onSubmit = {this.onAddressSubmit} />
        </div>
      )
    }

    if(this.state.completeAddress === true){
      address = null;
      artwork = (
        <div>
          Thank you for submitting your RSVP
          <Artwork />
        </div>
      )
    }

    return (
        <div>
          {welcome}
          {artwork}
          {button}
          {form}
          {address}
        </div>
    );
  }
}

App.propTypes = {
  guests: PropTypes.array
};

export default App
