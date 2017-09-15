import React, { Component } from 'react';
import PlayListForm from './PlayListForm.js';
import {PlayList} from './PlayList.js';



export default class PlayListItem extends Component {
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
        comments: []
      };

      this.handleSongTitleChange = this.handleSongTitleChange.bind(this);
      this.handleNameChange = this.handleNameChange.bind(this);
      this.handleFormSubmit = this.handleFormSubmit.bind(this);
      this.handleSongArtistChange = this.handleSongArtistChange.bind(this);
      this.handleSongNotesChange = this.handleSongNotesChange.bind(this);

    }

    handleSongTitleChange(event){
      this.setState({
        songTitle: event.target.value
      })
    }

    handleNameChange(event){
      this.setState({
        userName: event.target.value
      })
    }

    handleSongArtistChange(event){
      this.setState({
        songArtist: event.target.value
      })
    }

    handleSongNotesChange(event){
      this.setState({
        songNotes: event.target.value
      })
    }

    handleFormSubmit(event){
      event.preventDefault()
      const newComment = {
        songTitle: this.state.songTitle,
        userName: this.state.userName,
        songArtist: this.state.songArtist,
        songNotes: this.state.songNotes
      }
      const comments = this.state.comments;
      comments.push(newComment)
      this.state.songTitle = "";
      this.state.userName = "";
      this.state.songArtist = "";
      this.state.songNotes = "";

      this.setState({
        comments: comments,
        comment: "",
        userName: "",
        songTitle: "",
        songArtist: "",
        songNotes: "",
      })
    }



    render() {
      let songItem = this.props.songs.map(song => {
        return (
          <div key = {song.id} className = "col-md-4">
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
          <div className="container">
            <h2 style={{color: this.props.color}}>
            {this.props.currentInput}
            </h2>
            {songItem}
          </div>
        )
    }
}
