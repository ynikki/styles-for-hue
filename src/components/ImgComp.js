import React, { Component } from 'react';

class ImgComp extends Component {
  isActive () {
    if (this.props.elementId === this.props.selectedElementId) {
      return "imgComp selected"
    }
    return "imgComp";
  }
  render () {
    return (
      <div
        style={
          {
            justifyContent: "center"
          }
        }
      >
        <img
          className={this.isActive()}
          src={this.props.src}
          style={ this.props.style }
          onClick={() => this.props.selectElement(this.props.elementId, this.props.style)}
        />
      </div>
    )
  }
}

export default ImgComp;