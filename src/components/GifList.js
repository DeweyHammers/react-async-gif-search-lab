import React, { Component } from 'react'

export default class GifList extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.gifs.map(gif => (
            <li key={gif.id}><img src={gif.images.original.url} alt={gif.slug}/></li>
          ))}
        </ul>
      </div>
    )
  }
}