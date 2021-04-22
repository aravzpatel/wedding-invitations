import React from "react";
import Artwork from "./Artwork";
import RsvPform from "./RsvpForm";
import AddressForm from "./AddressForm";
import Container from "react-bootstrap/Container";
import Thankyou from "./Thankyou";
import ConfirmationForm from "./ConfirmationForm";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayWelcome: true,
      completedRSVP: 0,
      numberGuests: this.props.guests.length,
      viewDetails: false,
      RSVPYes: 0,
    };

    this.changeView = this.changeView.bind(this);
    this.onRSVPSubmit = this.onRSVPSubmit.bind(this);
    this.onViewDetails = this.onViewDetails.bind(this);
  }

  changeView() {
    this.setState({
      displayWelcome: false,
    });
  }

  onRSVPSubmit() {
    this.setState({
      completedRSVP: this.state.completedRSVP + 1,
    });
  }

  rsvpYes() {
    this.setState({
      completedRSVP: this.state.completedRSVP + 1,
    });
  }

  onViewDetails() {
    this.setState({
      viewDetails: true,
    });
  }

  render() {
    let form = null;
    let weddingRegistry = null;
    let thankyou = null;

    let artwork = (
      <div>
        <Artwork
          onClick={this.changeView}
          guests={this.props.guests}
          submitted={this.props.submitted}
        />
      </div>
    );

    if (this.state.displayWelcome === false) {
      artwork = null;
      form = (
        <div>
          <ConfirmationForm
            guests={this.props.guests}
            guestNumber={this.state.completedRSVP}
            onSubmit={this.onRSVPSubmit}
          />
        </div>
      );
    }

    if (this.state.completedRSVP === this.state.numberGuests) {
      form = null;
      weddingRegistry = (
        <div>
          <WeddingRegistry
            RSVPYes={this.props.RSVPYes}
            onViewDetails={this.onViewDetails}
          />
        </div>
      );
    }

    if (this.state.viewDetails === true) {
      weddingRegistry = null;
      thankyou = (
        <div>
          <Details />
        </div>
      );
    }

    console.log(this.state.completedRSVP);

    return (
      <Container>
        <div className="form-container">
          {artwork}
          {form}
          {weddingRegistry}
          {thankyou}
        </div>
      </Container>
    );
  }
}

export default App;
