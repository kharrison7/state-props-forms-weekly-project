import React, { Component } from 'react';
import PlayListForm from './PlayListForm.js';
import PlayListItem from './PlayListItem.js';
import App from './App.js';

export class PlayList extends Component {
  constructor(props) {
      super(props);
      this.state = {
        songs: [],
        input: "hi"
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
              <div className="card">
                <div className="card-block">
                  <h3>Play_List:</h3>
                  <PlayListItem
                    songs={this.state.songs}
                    currentInput={this.state.input}
                    color="#76daff"
                  />
                  <form className="button">
                    <button onClick={this.fetchData} onClick={this.props.triggerUpdate} type="button" className="btn btn-success">Update List: {this.props.count}</button>
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
