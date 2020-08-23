import React from "react"
import WelcomeImage from "/Users/arav/Documents/Coding/weddingparty/wedding-form-app/app/assets/images/Invite.svg"
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
    this.loadRSVP=this.loadRSVP.bind(this)
  }

  loadRSVP(){
    console.log(this.state.rsvp)
    console.log(this.props.guests.length)
    if(this.state.rsvp < this.props.guests.length){
      return (
        <button className="submit" onClick={this.props.onClick}>RSVP</button>
      )
    }
  }

  loadArtwork(){
    console.log(this.props.submitted)
    console.log(this.props.guests.length)
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
    console.log(this.props.guests)
    console.log(this.state)
    return (
      <div>
        {this.loadArtwork()}
      </div>
    );
  }
}

export default Artwork
