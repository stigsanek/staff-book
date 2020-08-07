import React, { Component } from 'react';

import Header from '../header';
import SearchField from '../search-field';
import FilterButtons from '../filter-buttons';
import EmployeeList from '../employee-list';
import Footer from '../footer';

import staff from '../../data/staff';

import './app.css';

export default class App extends Component {
  state = {
    peoples: staff
  }

  render() {
    return (
      <React.Fragment>
        <header className="container mb-5">
          <div className="navbar justify-content-center mb-3">
            <Header />
            <SearchField />
          </div>
          <FilterButtons />
        </header>
        <main className="container">
          <EmployeeList data={this.state.peoples} />
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}
