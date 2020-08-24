import React from "react"
import WelcomeImage from "../../assets/images/Invite.svg"
import PropTypes from "prop-types"
import Image from 'react-bootstrap/Image'
import Welcome from "./Welcome"

class Artwork extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      rsvp: 0
    }
    this.loadArtwork=this.loadArtwork.bind(this)
  }

  loadArtwork(){
    return (
    <div className="artwork-container">
      <Image 
        src={WelcomeImage} 
        alt="Image" 
        fluid
      />
      {this.props.submitted < this.props.guests.length ? (
        <button className="submit" onClick={this.props.onClick}>RSVP</button>
      ) : null
      }
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
