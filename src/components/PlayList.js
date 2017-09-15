import React, { Component } from 'react';
import PlayListForm from './PlayListForm.js';
import PlayListItem from './PlayListItem.js';
import App from './App.js';

export class PlayList extends Component {
  constructor(props) {
      super(props);
      this.state = {
        songs: '',
        input: "hi"
      };

      this.handleSongChange = this.handleSongChange.bind(this);
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
                    currentInput={this.state.input}
                    color="#76daff"
                  />
                  <button onClick={this.props.triggerUpdate}>Update {this.props.count}</button>
                </div>
              </div>
          <section className="row">
          </section>
        </div>
      )
    }
}

export default PlayList;
