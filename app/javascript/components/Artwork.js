import React from "react"
import logo from "/Users/arav/Documents/Coding/weddingparty/wedding-form-app/app/assets/images/Invite.svg"
import PropTypes from "prop-types"
import Image from 'react-bootstrap/Image'

class Artwork extends React.Component {
  loadArtwork(){
    return (
    <div className="artwork-container">
      <Image 
        src={logo} 
        alt="Image" 
        fluid
      />
      <div className="welcome-greeting">
          Lil, Jack and Marley
      </div>
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
