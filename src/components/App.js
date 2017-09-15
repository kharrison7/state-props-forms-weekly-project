import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import moment from 'moment';
import NavBar from './NavBar.js';
import PlayListForm from './PlayListForm.js';
import PlayList from './PlayList.js';
// import PlayListItem from './PlayListItem.js';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        songs: '',
        userName: '',
        songArtist: '',
        songTitle: '',
        songNotes: '',
        songTitle: '',
        name: '',
        comments: [],
        count: 0
      };
      this.counterUpdate = this.counterUpdate.bind(this);
    }
    counterUpdate(){
      this.setState({count: this.state.count + 1});
    }
  render() {
    return (
    < div className = "App" >
      <div className="title">
          <div className="title"><NavBar/></div>
          <h6>Count: {this.state.count}</h6>
          <PlayListForm/>
          <PlayList count={this.state.count} triggerUpdate={this.counterUpdate}/>
          {/* <PlayListItem/> */}
      </div>
    < /div>
    );
  }
}

export default App;
