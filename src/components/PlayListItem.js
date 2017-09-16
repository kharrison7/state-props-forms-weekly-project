import React, { Component } from 'react';
import PlayListForm from './PlayListForm.js';
import {PlayList} from './PlayList.js';



export default class PlayListItem extends Component {
    render() {
      let songItem = this.props.songs.map(song => {
        return (
          <div key = {song.id} className = "itemsBoxes">
            <div className="card" >
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
            {/* <p className="listOne" >
            {this.props.currentInput}
            </p> */}
            {songItem}
          </div>
        )
    }
}
