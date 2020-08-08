import React, { Component } from 'react';

import Header from '../header';
import SearchField from '../search-field';
import FilterButtons from '../filter-buttons';
import EmployeeList from '../employee-list';
import Footer from '../footer';
import Modal from '../modal';
import TopButton from '../top-button';

import { ALL, LEADERSHIP, RECEPTION, navs } from '../../data/nav';
import staff from '../../data/staff';

import './app.css';

export default class App extends Component {
  bodyElement = document.querySelector('body');
  persons = staff;

  state = {
    peoples: this.sortPeople(),
    filter: ALL,
    term: '',
    photoSrc: ''
  }

  sortPeople() {
    const dataNames = this.sortByName(this.persons);
    return this.sortByRange(dataNames);
  }

  sortByRange(arr) {
    return arr.sort((min, max) => {
      return min.rang - max.rang;
    });
  }

  sortByName(arr) {
    return arr.sort((a, b) => {
      const nameA = a.name.toLocaleLowerCase();
      const nameB = b.name.toLocaleLowerCase();

      if (nameA < nameB) {
        return -1;
      }

      if (nameA > nameB) {
        return 1;
      }

      return 0;
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

  onSearchItem = (term) => {
    this.setState({ term });
  }

  applySearch(arr, term) {
    if (term.length === 0) {
      return arr;
    }

    return arr.filter(({ name }) => {
      const item = name.toLowerCase();
      return item.indexOf(term.toLowerCase()) > -1;
    });
  }

  onModalOpen = (photoSrc) => {
    this.bodyElement.classList.add('modal-open');
    this.setState({ photoSrc });
  }

  onModalCLose = () => {
    this.bodyElement.classList.remove('modal-open');
    this.setState({ photoSrc: '' });
  }

  render() {
    const { peoples, filter, term, photoSrc } = this.state;

    const searchItems = this.applySearch(peoples, term);
    const visibleItems = this.applyFilter(searchItems, filter);

    const modal = <Modal photo={photoSrc} onModalCLose={this.onModalCLose} />
    const modalBlock = photoSrc ? modal : null;

    return (
      <React.Fragment>
        <header className="container mb-5">
          <div className="navbar justify-content-center mb-3">
            <Header />
            <SearchField onSearchItem={this.onSearchItem} />
          </div>
          <FilterButtons
            navs={navs}
            filter={filter}
            onFilterChange={this.onFilterChange}
          />
        </header>
        <main className="container">
          <EmployeeList data={visibleItems} onModalOpen={this.onModalOpen} />
        </main>
        <Footer />
        <TopButton />
        {modalBlock}
      </React.Fragment>
    );
  }
}
