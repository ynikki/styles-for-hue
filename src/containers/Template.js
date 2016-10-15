import React, { Component } from 'react';
import { DivComp, PComp, ImgComp, ListComp, Header, Footer, EditComp } from '../components';
import { connect } from 'react-redux';

class Template extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const elements = this.props.elements.map((elem, index) => {
      switch (elem.tag) {
        case 'div':
          return (
            <DivComp
              key={elem.elementId}
              elementId={elem.elementId}
              children={elem.children}
              style={elem.style}
              selectElement={this.props.selectElement}
              selectedElementId={this.props.selectedElementId}
              onClick={this.props.showElementStyles}
            >
            </DivComp>
          )
        case 'p':
          return (
            <PComp
              key={elem.elementId}
              elementId={elem.elementId}
              style={elem.style}
              selectElement={this.props.selectElement}
              selectedElementId={this.props.selectedElementId}
            />
          )
        case 'img':
          return (
            <ImgComp
              key={elem.elementId}
              elementId={elem.elementId}
              src={elem.src}
              style={elem.style}
              selectElement={this.props.selectElement}
              selectedElementId={this.props.selectedElementId}
            />
          )
        case 'ul':
          return (
            <ListComp
              key={elem.elementId}
              elementId={elem.elementId}
              style={elem.style}
              list={elem.children}
              selectElement={this.props.selectElement}
              selectedElementId={this.props.selectedElementId}
            />
          )
        default:
          return (
            <div> Document Not Found! </div>
          )
      }
    })
    return (
      <div
        className="template-1"
      >
        <Header />
        {elements}
        <Footer />
        <hr />
        <div className="current-styles-container">
          <h6>Current Element Styles</h6>
          <div className="current-elem-styles"
          >
            {this.props.showElementStyles(this.props.selectedElementStyle)}
          </div>
        </div>
      </div>
    )
  }
}

export default Template;
