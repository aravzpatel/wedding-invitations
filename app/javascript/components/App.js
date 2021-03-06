import React from "react";
import Artwork from "./Artwork";
import ConfirmationForm from "./ConfirmationForm";
import EveningForm from "./EveningForm";
import { Toolbar } from "@material-ui/core";
import Details from "./Details";
import WeddingRegistry from "./WeddingRegistry";
import Icon from "../../assets/images/icon.png";

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
    this.renderGiftsWithThanks = this.renderGiftsWithThanks.bind(this);
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
    console.log("does the end form function get called");
    if (
      this.state.completedRSVP === this.props.guests.length ||
      this.props.evening
    ) {
      console.log("does the end form condtion render");

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
      RSVPYes: this.state.RSVPYes + 1,
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

  renderGiftsWithThanks() {
    this.renderGifts();
    this.setState({
      thanks: true,
    });
  }

  setFromHomepage() {
    this.setState({
      fromHomepage: true,
    });
  }

  render() {
    return (
      <>
        <div className="form-container">
          <Toolbar className="toolbar">
            <div className="toolbar-image">
              <input
                className="toolbar-icon"
                type="image"
                src={Icon}
                onClick={this.renderHomepage}
              />
            </div>

            {this.state.completedRSVP < this.props.guests.length && (
              <button
                className="toolbar-button"
                data-status={this.state.displayConfirmationForm}
                onClick={this.renderForm}
              >
                RSVP
              </button>
            )}
            <button className="toolbar-button" onClick={this.onViewDetails}>
              Details
            </button>
            <button
              className="toolbar-button"
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
          {this.state.displayConfirmationForm && !this.props.evening && (
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
          {this.state.displayConfirmationForm && this.props.evening && (
            <>
              <EveningForm
                guests={this.props.guests}
                guestNumber={this.state.completedRSVP}
                onSubmit={() => {
                  console.log("do I call the onSubmit");
                  this.endForm();
                  this.onRSVPSubmit();
                }}
              />
            </>
          )}
          {this.state.displayDetails && (
            <Details evening={this.props.evening} />
          )}
          {this.state.displayGifts && (
            <WeddingRegistry thanks={this.state.thanks} />
          )}
        </div>
      </>
    );
  }
}

export default App;
