import React, { Component } from 'react';
import PlayListForm from './PlayListForm.js';
import {PlayList} from './PlayList.js';

export default class PlayListItem extends Component {
  constructor(props) {
      super(props);
      this.state = {
        songCount: 0,
        songListed: 0
      };

  this.handleSongSubmit = this.handleSongSubmit.bind(this);
}

handleSongSubmit(event){
  console.log(event.target.id);
  this.setState({songListed: event.target.id});
if (this.state.songCount < 9) {
  this.setState({
    songCount: this.state.songCount + 1
  });
} else {
  this.setState({songCount: 0});
}
  let audioList = this.props.audioList;
  if(audioList[this.state.songCount] !== undefined){
    let play_Song = document.getElementById('music_Here');
    play_Song.src=audioList[this.state.songCount].src;
    play_Song.load();
  } else {
    this.setState({songCount: this.state.songCount + 1});
  }
  console.log(this.state.songListed);
  console.log(this.state.songCount);
}

    render() {
      let countUp = 0;
      let songItem = this.props.songs.map(song => {
        countUp++;
        return (
          <div key = {song.id} className = "itemsBoxes">
            <div className="card" id={countUp} onClick={this.handleSongSubmit}>
              <div className="card-block">
                <h6 className="card-subtitle mb-2">User Name: {song.userName}</h6>
                <h6 className="card-subtitle mb-2">Artist/Band: {song.songArtist}</h6>
                <h6 className="card-subtitle mb-2">Title: {song.songTitle}</h6>
                <h6 className="card-subtitle mb-2">Song Notes: {song.songNotes}</h6>
              </div>
            </div>
          </div>
          )
        })
        return (
          <div className="containerItem">
            <form className="button">
              <button onClick={this.handleSongSubmit}  type="button" className="btn btn-success">Go Down A Song:</button>
            </form>
            {songItem}
          </div>
        )
    }
}
