import React, { Component } from 'react';

export default class NavBar extends Component {
  render() {
    return (
      <div className="header">
      Play What? - Update Count: {this.props.count}
      </div>
    );
  }
}
