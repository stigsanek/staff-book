import React, { Component } from 'react';

export default class SearchFiled extends Component {
  state = {
    term: ''
  }

  onSearchChange = (evt) => {
    const term = evt.target.value;
    this.setState({ term });
    this.props.onSearchItem(term);
  }

  render() {
    return (
      <div className="form-inline">
        <input
          className="form-control"
          type="text"
          placeholder="Найти сотрудника..."
          value={this.state.term}
          onChange={this.onSearchChange}
        />
      </div>
    );
  }
}
