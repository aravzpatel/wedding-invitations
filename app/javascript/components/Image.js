import React from "react"
import PropTypes from "prop-types"
import image from '/Users/arav/Documents/Coding/weddingparty/wedding-form-app/app/assets/images/holder.png'


class Image extends React.Component {
  render () {
    return (
      <div>
        <img src={image} width= "1000" height="1000" class="SaveDate"></img>
      </div>
    );
  }
}

export default Image
