import React, { Component } from 'react';
import GifSearch from '../components/GifSearch';
import GifList from '../components/GifList';

export default class GifListContainer extends Component {
  state = { gifs: [] };

  handleGetGifs = (value) => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${value.name}&api_key=BowVg7g01A6ouF01bZs6ugdm9TVSEMqS&rating=g&limit=3`)
    .then(res => res.json())
    .then(json => this.setState({ gifs: json.data }))
  }

  render() {
    return (
    <div>
      <GifSearch formSubmit={this.handleGetGifs}/>
      <GifList gifs={this.state.gifs}/>
    </div>
    )
  }
}