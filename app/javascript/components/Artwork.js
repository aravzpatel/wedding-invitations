import React from "react"
import logo from "/Users/arav/Documents/Coding/weddingparty/wedding-form-app/app/assets/images/Invite.svg"
import PropTypes from "prop-types"
class Artwork extends React.Component {
  loadArtwork(){
    return (
      <img src={logo} alt="Image"></img>
    )
  }
  
  render () {
    return (
      <div className = "artwork">
        {this.loadArtwork()}
      </div>
    );
  }
}

export default Artwork
