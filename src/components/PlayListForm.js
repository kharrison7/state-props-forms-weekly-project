import React, { Component } from 'react';

export default class PlayListForm extends Component {
  constructor(props) {
      super(props);
      this.state = {
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
      this.setState({userName: event.target.value, songTitle: event.target.value, songArtist: event.target.value, songNotes: event.target.value});
      let listItem = JSON.stringify(this.state);
      fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting", {
          method: "POST",
          body: listItem,
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
      }
      ).then(response => {
        console.log(response, "Playlist item submitted");

      }).catch(err => {
        console.log(err, "Failed to submit");
      });
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
                  <h3>Play List Form:</h3>
                  <form className="enterForm" onSubmit={this.handleFormSubmit}>
                    <div className="form-group">
                      <h6>User Name:</h6>
                      <input value={this.state.userName} onChange={this.handleNameChange} className="form-control col-md-3" name="name" placeholder="Name or User Name" type="text" required />
                    </div>
                    <div className="form-group">
                      <h6>Song Artist:</h6>
                      <input value={this.state.songArtist} onChange={this.handleSongArtistChange} className="form-control col-md-3" name="name" placeholder="Artist or Band Name" type="text" />
                    </div>
                    <div className="form-group">
                      <h6>Song Title:</h6>
                      <input value={this.state.songTitle} onChange={this.handleSongTitleChange} className="form-control col-md-3" name="name" placeholder="Song Title" type="text" required />
                    </div>
                    <div className="form-group">
                      <h6>Notes:</h6>
                      <textarea value={this.state.songNotes} onChange={this.handleSongNotesChange} className="form-control col-md-3" name="name" type="text" />
                    </div>
                    <div className="form-group pull-right">
                      <input onClick={this.commentUpdate} className="btn btn-primary btn-lg" type="submit" value="Submit"/>
                    </div>
                  </form>
                </div>
              </div>
          <section className="row">
            <div className="col-md-10 offset-md-1">
              <div className="card comments">
                <div className="card-block">
                <h6 className="card-subtitle mb-2 text-muted">Recently Added Items</h6>
                  <div className="card comments col-md-5">
                    {this.state.comments.map( (comment) => {
                      // key={this.state.comments[1]}
                      return <div>
                        <p>User: {comment.userName}</p>
                        <p>Artist/Band: {comment.songArtist}</p>
                        <p>Title: {comment.songTitle}</p>
                        <p>Notes: {comment.songNotes}</p>
                        <hr />
                      </div>
                    })}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )
    }
}
