import React, { Component } from 'react';

import ErrorLink from '../error-link';

export default class ErrorBoundary extends Component {
  state = {
    isError: false
  }

  componentDidCatch() {
    this.setState({
      isError: true
    })
  }

  render() {
    const errMessage = (
      <div className="text-center p-2">
        <h1 className="h4">Что-то пошло не так...</h1>
        <ErrorLink />
      </div>
    );

    return this.state.isError ? errMessage : this.props.children;;
  }
}
