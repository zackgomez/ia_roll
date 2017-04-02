import React, { Component } from 'react';

export default class AddDieButton extends Component {

  render() {
    return (
      <div
        className="addDieButton"
        style={{backgroundColor: this.props.color}}
        onClick={this.props.onClick}
      >
      </div>
    )
  }
}
