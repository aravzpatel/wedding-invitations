import React from "react";
import Artwork from "./Artwork";
import RsvPform from "./RsvpForm";
import AddressForm from "./AddressForm";
import Container from "react-bootstrap/Container";
import Thankyou from "./Thankyou";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      displayWelcome: true,
      completedRSVP: 0,
      numberGuests: this.props.guests.length,
      completeAddress: false
    };

    this.changeView = this.changeView.bind(this);
    this.onRSVPSubmit = this.onRSVPSubmit.bind(this);
    this.onAddressSubmit = this.onAddressSubmit.bind(this);
  }

  changeView(){
    this.setState({
      displayWelcome: false
    });
  }

  onRSVPSubmit(){
    this.setState({
      completedRSVP: this.state.completedRSVP + 1
    });
  }

  onAddressSubmit(){
    this.setState({
      completeAddress: true
    });
  }

  render () {
    let form = null;
    let address = null;
    let thankyou = null;

    let artwork = (
      <div>
        <Artwork onClick={this.changeView} guests={this.props.guests} submitted={this.props.submitted}/>
      </div>
    );

    if(this.state.displayWelcome === false){
      artwork = null;
      form = (
        <div>
          <RsvPform guests={this.props.guests} onSubmit = {this.onRSVPSubmit} />
        </div>
      );
    }

    if(this.state.completedRSVP === this.state.numberGuests){
      form = null;
      address = (
        <div>
          <AddressForm party = {this.props.party} onSubmit = {this.onAddressSubmit} />
        </div>
      );
    }

    if(this.state.completeAddress === true){
      address = null;
      thankyou = (
        <div>
          <Thankyou />
        </div>
      );
    }

    return (
      <Container>
        <div className="form-container">
          {artwork}
          {form}
          {address}
          {thankyou}
        </div>
      </Container>
    );
  }
}

export default App;
