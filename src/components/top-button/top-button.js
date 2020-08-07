import React, { Component } from 'react';

import './top-button.css';

export default class TopButton extends Component {
  state = {
    isShow: false,
    coord: this.defineCoord()
  }

  componentDidMount() {
    window.addEventListener('scroll', () => {
      if (document.documentElement.clientHeight < window.pageYOffset) {
        this.showButton();
      } else {
        this.hideButton();
      }
    });
  }

  showButton() {
    this.setState({
      isShow: true
    });
  }

  hideButton() {
    this.setState({
      isShow: false
    });
  }

  defineCoord() {
    const bodyCoord = document.querySelector('body').getBoundingClientRect();
    const rootCoord = document.getElementById('root').getBoundingClientRect();

    return bodyCoord.right - rootCoord.right;
  }

  scrollTop = () => {
    window.scrollTo(window.pageXOffset, 0);
    this.hideButton();
  }

  render() {
    const style = {
      right: `${this.state.coord + 15}px`
    };

    if (!this.state.isShow) {
      return null;
    }

    return (
      <button
        className="btn top-btn"
        type="button"
        style={style}
        onClick={this.scrollTop}
      >
      </button>
    );
  }
}
