import React, { Component } from 'react';
import PlayListForm from './PlayListForm.js';
import PlayListItem from './PlayListItem.js';
import App from './App.js';

export class PlayList extends Component {
  constructor(props) {
      super(props);
      this.state = {
        songs: [],
        audioUrlList: [],
        audioList: [],
        audioListCount: 0
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
           console.log(data);
           this.setState({song: data});
           console.log("state", this.state.songs);
         })
   }

   fetchData(event) {
   let songAudio = [];
   console.log("fetchData called.");
   event.preventDefault();
   fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting')
   .then(results => {
     return results.json();
   })
   .then(data => {
     this.setState({songs: data});
     let songItem = this.state.songs.map(song => {
        let songAudioCount = this.state.audioListCount;
        console.log(song.songTitle);
        let songName = song.songTitle;
        if(songName !== undefined){
        let space_Count = songName.split(" ").length-1;
        //This removes all spaces and replaces them with '+'
        let refined_songName = [];
        if (space_Count > 0){
          for(let i=0; i < space_Count; i++){
             if( i === 0 ){
               refined_songName[i] = songName.replace(" ", "+");
             }
             else{
               refined_songName[i] = refined_songName[i-1].replace(" ", "+");
             }
          }
        }
        else{
        space_Count = 1;
        refined_songName[0] = songName;
        }
        let x = 'https://itunes.apple.com/search?term=';
        let z = "&entity=song";
        let y = x + refined_songName[space_Count - 1] + z;
        // let mid = refined_songName[space_Count - 1];
        // let x = 'https://api.soundcloud.com/tracks/?client_id=095fe1dcd09eb3d0e1d3d89c76f5618f&q=';
        // let y = x + mid;
        // console.log(mid);
        console.log(y);

        // This fetches the information using the url obtained above and returns that data.
        fetch(y)
          .then(
            (response)=> {

              if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' +
                  response.status);
                return;
              }
              else{
                console.log('fetch successfully.');
              }
              // This collects the various data.
              response.json().then((data) => {
                // This goes through the results and finds the top result.
                    let result = data.results[0];
                    songAudio[songAudioCount] = new Audio(result.previewUrl);
                    // songAudio[songAudioCount] = new Audio(data[0].stream_url);
                    this.setState({
                      audioList: songAudio
                    });
                    console.log(this.state.audioList[songAudioCount]);
                    console.log(this.state.audioList);
                // This sends the first song returned before any song is clicked.
                if(songAudioCount === 0){
                  let play_Song = document.getElementById('music_Here');
                  play_Song.src=songAudio[0].src;
                  play_Song.load();
                }

           })
           .catch(function(err) {
            console.log("Fetch Error: ", err);
           });
          });
        }
          console.log("console.log(songAudio):");
          console.log(songAudio);
     this.state.audioListCount++;
     });

   });
   this.state.audioListCount = 0;
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
                    audioList={this.state.audioList}
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
