import React, { Component } from 'react';
import './App.css';

import RadioSet from './components/RadioSet';

import songData from './data/tracks.json';

songData.forEach((song, i) => {
  song.id = i;
});

class App extends Component {

  constructor() {
    super();

    this.state = {
      songs: songData
    };

  }


  updateSongs = () => {
    this.state.songs.forEach((song) => {
    song.favorite = false;
  });
  }

  onFavorite = (id) => {
    let updatedSongFavorite = songData[id].favorite
    this.setState({ updatedSongFavorite: !updatedSong.favorite });
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1 className="page-header--title">Radio Lovelace</h1>
        </header>
        <main className="main">
          <RadioSet tracks={songData} />
        </main>
      </div>
    );
  }
}

export default App;
