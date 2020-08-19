import React from "react"
import WelcomeImage from "/Users/arav/Documents/Coding/weddingparty/wedding-form-app/app/assets/images/Invite.svg"
import PropTypes from "prop-types"
import Image from 'react-bootstrap/Image'
import Welcome from "./Welcome"

class Artwork extends React.Component {
  loadArtwork(){
    return (
    <div className="artwork-container">
      <Image 
        src={WelcomeImage} 
        alt="Image" 
        fluid
      />
      <button className="submit" onClick={this.props.onClick}>RSVP</button>
      <Welcome guests={this.props.guests}/>
    </div>
    )
  }
  
  render () {
    return (
      <div>
        {this.loadArtwork()}
      </div>
    );
  }
}

export default Artwork
