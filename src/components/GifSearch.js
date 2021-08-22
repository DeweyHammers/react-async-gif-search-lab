import React, { Component } from 'react';

export default class GifSearch extends Component {
  state = { name: '' };

  handleChange = event => {
    this.setState({ name: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.formSubmit(this.state);
    this.setState({ name: '' });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>Enter a Search Term:</p>
          <input type="text" id='name' value={this.state.name} onChange={this.handleChange}/>
          <input type="submit" value="Find Gif"/>
        </form>
      </div>
    )
  }
}