import React, { Component } from 'react';
import PlayListForm from './PlayListForm.js';
import {PlayList} from './PlayList.js';



// let play_Song = document.getElementById('music_Here');
// play_Song.src=songAudio[0].src;
// play_Song.load();


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
  this.setState({
    songListed: event.target.id
  });
  let audioList = this.props.audioList;
  let play_Song = document.getElementById('music_Here');
  play_Song.src=audioList[1].src;
  play_Song.load();
  console.log(this.state.songListed);
}


    render() {
      let countUp = 0;
      let songItem = this.props.songs.map(song => {
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
          countUp++;
        })
        return (
          <div className="containerItem">
            {/* <p className="listOne" >
            {this.props.currentInput}
            </p> */}
            {songItem}
          </div>
        )
    }
}
