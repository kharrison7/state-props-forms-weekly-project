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
        count: 0,
        color: '#000000'
      };
      this.counterUpdate = this.counterUpdate.bind(this);
      this.commentUpdate = this.commentUpdate.bind(this);

    }
    // This is called to change the color.
    changeColor() {
      this.setState({
       color: "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);})
      });
    }
    // This is just to change the color every 2.5 seconds.
    componentDidMount() {
      setInterval(this.changeColor.bind(this), 2500);
    }
    // This is called from PlayList to increase the count.
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
      <div className="title" style={{backgroundColor: this.state.color}}>
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
