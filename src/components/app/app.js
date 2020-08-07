import React, { Component } from 'react';

import Header from '../header';
import SearchField from '../search-field';
import FilterButtons from '../filter-buttons';
import EmployeeList from '../employee-list';
import Footer from '../footer';

import { ALL, LEADERSHIP, RECEPTION, navs } from '../../data/nav';
import staff from '../../data/staff';

import './app.css';

export default class App extends Component {
  state = {
    peoples: this.sortRange(),
    filter: ALL
  }

  sortRange() {
    return staff.sort((min, max) => {
      return min.rang - max.rang;
    });
  }

  onFilterChange = (filter) => {
    this.setState({ filter });
  }

  applyFilter(arr, filter) {
    switch (filter) {
      case ALL:
        return arr;
      case LEADERSHIP:
        return arr.filter(({ departament }) => departament === LEADERSHIP || departament === RECEPTION);
      default:
        return arr.filter(({ departament }) => departament === filter);
    }
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
          <FilterButtons
            navs={navs}
            filter={filter}
            onFilterChange={this.onFilterChange}
          />
        </header>
        <main className="container">
          <EmployeeList data={visibleItems} />
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}
