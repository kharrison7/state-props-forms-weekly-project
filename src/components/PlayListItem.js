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
      return (
        <div className="container-fluid">
              <div className="card">
                <div className="card-block">
                  <h3>Song Item:</h3>
                  <h2 style={{color: this.props.color}}>
                  {this.props.currentInput}
                  </h2>
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
              </div>
        </div>
      )
    }
}
