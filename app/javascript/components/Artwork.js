import React from "react"
import logo from "/Users/arav/Documents/Coding/weddingparty/wedding-form-app/app/assets/images/Invite.svg"
import rsvpbutton from '/Users/arav/Documents/Coding/weddingparty/wedding-form-app/app/assets/images/rsvp.svg'
import Button from "./Button"
import PropTypes from "prop-types"
import Image from 'react-bootstrap/Image'
import Welcome from "./Welcome"

class Artwork extends React.Component {
  loadArtwork(){
    return (
    <div className="artwork-container">
      <Image 
        src={logo} 
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
