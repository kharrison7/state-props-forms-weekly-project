import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import moment from 'moment';
import NavBar from './NavBar.js';
import PlayListForm from './PlayListForm.js';
// import PlayList from './PlayList.js';
// import PlayListItem from './PlayListItem.js';

class App extends Component {
  render() {
    return (
    < div className = "App" >
      <div className="title">
          <div className="title"><NavBar/></div>
          <PlayListForm/>
          {/* <PlayList/> */}
          {/* <PlayListItem/> */}
      </div>
    < /div>
    );
  }
}

export default App;
