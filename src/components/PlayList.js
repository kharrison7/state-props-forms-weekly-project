import React, { Component } from 'react';
import PlayListForm from './PlayListForm.js';
import PlayListItem from './PlayListItem.js';
import App from './App.js';

export class PlayList extends Component {
  constructor(props) {
      super(props);
      this.state = {
        songs: [],
        input: "Song Items:"
      };
      this.fetchData = this.fetchData.bind(this);
      this.handleSongChange = this.handleSongChange.bind(this);
    }

    componentDidMount() {
     fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting')
       .then(results => {
         return results.json();
       })
         .then(data => {
           this.setState({song: data});
           console.log("state", this.state.songs);
         })
   }

   fetchData(event) {
   console.log("fetchData called.");
   event.preventDefault();
   fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting')
   .then(results => {
     return results.json();
   })
   .then(data => {
     this.setState({songs: data});
     console.log(this.state.songs);
   })
  }

    handleSongChange(event){
      this.setState({
        songs: event.target.value
      })
    }

    render() {
      return (
        <div className="container-fluid">
              <div className="playListBackground">
                <div className="card-block">
                  <form className="button">
                    <button onClick={this.fetchData}  type="button" className="btn btn-success">Update List</button>
                  </form>
                  <br />
                  <PlayListItem
                    songs={this.state.songs}
                    currentInput={this.state.input}
                  />
                  <form className="button">
                    <button onClick={this.props.triggerUpdate}  type="button" className="btn btn-success">Update Count: {this.props.count}</button>
                  </form>
                </div>
              </div>
          <section className="row">
          </section>
        </div>
      )
    }
}

export default PlayList;
