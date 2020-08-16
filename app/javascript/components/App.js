import React from "react"
import Welcome from "./Welcome"
import PropTypes from "prop-types"
import Artwork from "./Artwork"
import Button from "./Button"
import RsvPform from "./RsvpForm"
import AddressForm from "./AddressForm"

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      displayWelcome: true,
      completedRSVP: 0,
      numberGuests: this.props.guests.length
    }

    this.changeView = this.changeView.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  changeView(){
    this.setState({
      displayWelcome: false
    })
  }

  onSubmit(){
    this.setState({
      completedRSVP: this.state.completedRSVP + 1
    })
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
          <RsvPform guests={this.props.guests} onSubmit = {this.onSubmit} />
        </div>
      )
    }

    if(this.state.completedRSVP === this.state.numberGuests){
      form = null;
      address = (
        <div>
          <AddressForm party = {this.props.party} />
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
