import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import moment from 'moment';
import NavBar from './NavBar.js';
// import PlayList from './PlayList.js';
// import PlayListForm from './PlayListForm.js';
// import PlayListItem from './PlayListItem.js';




class App extends Component {
  render() {
    return (
    < div className = "App" >
      <div className="title">
          <div className="my-header">
            "Play What!"
          </div>
          <div className="title"></div>
          <NavBar/>
          <div className="title"></div>
          {/* <PlayList/>
          <PlayListForm/>
          <PlayListItem/> */}
      </div>
    < /div>
    );
  }
}

export default App;
