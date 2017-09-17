import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';

export default class NavBar extends Component {
  render() {
    return (
      <div className="header">
        <img src={logo} className="App-logo" alt="logo" />
      Play What? - Update Count: {this.props.count}
      </div>
    );
  }
}
