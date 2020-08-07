import React, { Component } from 'react';

import Header from '../header';
import SearchField from '../search-field';
import FilterButtons from '../filter-buttons';
import EmployeeList from '../employee-list';
import Footer from '../footer';

import staff from '../../data/staff';

import './app.css';

export default class App extends Component {
  ALL = 'Все';

  state = {
    peoples: staff,
    filter: this.ALL
  }

  onFilterChange = (filter) => {
    this.setState({ filter });
  }

  applyFilter(arr, filter) {
    return arr.filter((item) => {
      if (filter === this.ALL) {
        return item;
      }
      if (item.departament === filter) {
        return item;
      }
    });
  }

  render() {
    const { peoples, filter } = this.state;

    const visibleItems = this.applyFilter(peoples, filter);

    return (
      <React.Fragment>
        <header className="container mb-5">
          <div className="navbar justify-content-center mb-3">
            <Header />
            <SearchField />
          </div>
          <FilterButtons filter={filter} onFilterChange={this.onFilterChange} />
        </header>
        <main className="container">
          <EmployeeList data={visibleItems} />
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}
