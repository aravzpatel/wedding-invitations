import React from "react";
import Artwork from "./Artwork";
import ConfirmationForm from "./ConfirmationForm";
import { Toolbar } from "@material-ui/core";
import Details from "./Details";
import WeddingRegistry from "./WeddingRegistry";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayWelcome: true,
      displayConfirmationForm: false,
      displayDetails: false,
      displayGifts: false,
      completedRSVP: this.props.submitted,
      numberGuests: this.props.guests.length,
      RSVPYes: 0,
      fromHomepage: false,
    };

    this.renderHomepage = this.renderHomepage.bind(this);
    this.onRSVPSubmit = this.onRSVPSubmit.bind(this);
    this.onViewDetails = this.onViewDetails.bind(this);
    this.renderForm = this.renderForm.bind(this);
    this.renderGifts = this.renderGifts.bind(this);
    this.setFromHomepage = this.setFromHomepage.bind(this);
    this.endForm = this.endForm.bind(this);
  }

  renderHomepage() {
    this.setState({
      displayWelcome: true,
      displayConfirmationForm: false,
      displayDetails: false,
      displayGifts: false,
    });
  }

  renderForm() {
    this.setState({
      displayWelcome: false,
      displayConfirmationForm: true,
      displayDetails: false,
      displayGifts: false,
    });
  }

  endForm() {
    if (this.state.completedRSVP === this.props.guests.length) {
      this.renderGifts();
    }
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
      displayWelcome: false,
      displayConfirmationForm: false,
      displayDetails: true,
      displayGifts: false,
    });
  }

  renderGifts() {
    this.setState({
      displayWelcome: false,
      displayConfirmationForm: false,
      displayDetails: false,
      displayGifts: true,
    });
  }

  setFromHomepage() {
    this.setState({
      fromHomepage: true,
    });
  }

  render() {
    console.log("submitted", this.props.submitted);

    return (
      <>
        <div className="form-container">
          <Toolbar>
            {this.state.completedRSVP < this.props.guests.length && (
              <button onClick={this.renderForm}>RSVP</button>
            )}
            <button onClick={this.onViewDetails}>Details</button>
            <button
              onClick={() => {
                this.renderGifts();
                this.setFromHomepage();
              }}
            >
              Gifts
            </button>
          </Toolbar>
          {this.state.displayWelcome && (
            <Artwork
              onClick={this.renderForm}
              guests={this.props.guests}
              submitted={this.state.completedRSVP}
            />
          )}
          {this.state.displayConfirmationForm && (
            <>
              <ConfirmationForm
                guests={this.props.guests}
                guestNumber={this.state.completedRSVP}
                onSubmit={() => {
                  this.onRSVPSubmit();
                  this.endForm();
                }}
              />
            </>
          )}
          {this.state.displayDetails && <Details />}
          {this.state.displayGifts && (
            <WeddingRegistry
              fromHomepage={this.state.fromHomepage}
              RSVPYes={this.state.RSVPYes}
              onViewDetails={this.onViewDetails}
            />
          )}
        </div>
      </>
    );
  }
}

export default App;
