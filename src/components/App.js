import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import moment from 'moment';
import NavBar from './NavBar.js';
import PlayListForm from './PlayListForm.js';
import PlayList from './PlayList.js';

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
        comments: [],
        count: 0
      };
      this.counterUpdate = this.counterUpdate.bind(this);
      this.commentUpdate = this.commentUpdate.bind(this);

    }
    counterUpdate(){
      this.setState({count: this.state.count + 1});
      console.log(this.state.count);
    }
    // This was an attempt to pass the comments array from the playlistforn.js
    commentUpdate(commentValue){
      this.setState({comments: commentValue});
      console.log(commentValue);
      console.log(this.state.comments);
    }
  render() {
    return (
    < div className = "App" >
      <div className="title">
          <div className="navbar bg-primary"><NavBar count={this.state.count}/></div>
          <div className="titleFlex">
          <PlayListForm
            commentUpdate={this.commentUpdate}
          />
          <PlayList count={this.state.count}
            triggerUpdate={this.counterUpdate}
          />
          </div>
      </div>
    < /div>
    );
  }
}

export default App;
