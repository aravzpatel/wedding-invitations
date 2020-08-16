import React from "react"
import logo from "/Users/arav/Documents/Coding/weddingparty/wedding-form-app/app/assets/images/Invite.svg"
import PropTypes from "prop-types"
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
class Artwork extends React.Component {
  loadArtwork(){
    return (
      <Image src={logo} alt="Image" thumbnail />
    )
  }
  
  render () {
    return (
      <Container>
          {this.loadArtwork()}
      </Container>
    );
  }
}

export default Artwork
