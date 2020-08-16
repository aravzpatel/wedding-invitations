import React from "react"
import Welcome from "./Welcome"
import PropTypes from "prop-types"
import Artwork from "./Artwork"
import Button from "./Button"
import RsvPform from "./RsvpForm"
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      displayWelcome: true
    }

    this.changeView = this.changeView.bind(this)
  }

  changeView(){
    this.setState({
      displayWelcome: false
    })
  }

  render () {
    let form = null;

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
        <Button onClick={this.changeView}/>
      </div>
    )
    
    if(this.state.displayWelcome === false){
      welcome = null;
      artwork = null;
      button = null;
      form = (
        <div>
          <RsvPform guests={this.props.guests}/>
        </div>
      )

    }

    return (
      <div>
        {welcome}
        {artwork}
        {button}
        {form}
      </div>
    );
  }
}

App.propTypes = {
  guests: PropTypes.array
};

export default App
