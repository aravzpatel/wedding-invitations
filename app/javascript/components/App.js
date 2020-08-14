import React from "react"
import Welcome from "./Welcome"
import PropTypes from "prop-types"
import Artwork from "./Artwork"
import Button from "./Button"
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      displayWelcome: true
    }
  }
  render () {
    let artwork = (
      <div>
        <Artwork />
      </div>
    )
    let welcome = (
      <div>
        <Welcome guests={this.props.guests}/>
      </div>
    )
    
    let button = (
      <div>
        <Button />
      </div>
    )
    
    if(this.state.displayWelcome === false){
      artwork = null
    }

    return (
      <div>
        {welcome}
        {artwork}
        {button}
      </div>
    );
  }
}

App.propTypes = {
  guests: PropTypes.array
};

export default App
