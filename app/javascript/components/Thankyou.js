import React from "react"
import PropTypes from "prop-types"
import thankyouArtwork from '../../assets/images/Thankyou.svg'
import Image from 'react-bootstrap/Image'
class Thankyou extends React.Component {
  render () {
    return (
      <Image 
        src={thankyouArtwork} 
        alt="Image" 
        fluid
      />
    );
  }
}

export default Thankyou
