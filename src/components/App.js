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
      this.commentUpdate = this.commentUpdate.bind(this);

    }
    counterUpdate(){
      this.setState({count: this.state.count + 1});
      console.log(this.state.count);
    }
    commentUpdate(commentValue){
      this.setState({comments: commentValue});
      console.log(commentValue);
      console.log(this.state.comments);

    }
  render() {
    return (
    < div className = "App" >
      <div className="title">
          <div className="title"><NavBar/></div>
          <h6>Count: {this.state.count}</h6>
          <PlayListForm
            commentUpdate={this.commentUpdate}
          />
          <PlayList count={this.state.count}
            triggerUpdate={this.counterUpdate}
          />
          {/* <PlayListItem/> */}

          <div className="card comments col-md-5">
            {this.state.comments.map( (comment) => {
              // key={this.state.comments[1]}
              return <div>
                <p>User: {comment.userName}</p>
                <p>Artist/Band: {comment.songArtist}</p>
                <p>Title: {comment.songTitle}</p>
                <p>Notes: {comment.songNotes}</p>
              </div>
            })}
          </div>

      </div>
    < /div>
    );
  }
}

export default App;
