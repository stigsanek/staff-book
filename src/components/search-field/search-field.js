import React, { Component } from 'react';

export default class SearchFiled extends Component {
  render() {
    return (
      <div className="form-inline">
        <input className="form-control" type="text" placeholder="Найти сотрудника..." />
      </div>
    );
  }
}
