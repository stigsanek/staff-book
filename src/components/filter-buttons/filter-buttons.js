import React from 'react';

import navs from '../../data/nav';

const FilterButtons = ({ filter, onFilterChange }) => {
  const buttons = navs.map(({ name, label }) => {
    const isActive = filter === name;
    const clazz = isActive ? 'active' : null;

    return (
      <li className="mr-2 mb-2" key={name}>
        <button
          className={`btn btn-outline-info ${clazz}`}
          type="button"
          onClick={() => { onFilterChange(name) }}
        >
          {label}
        </button>
      </li>
    );
  });

  return (
    <ul className="custom-list d-flex justify-content-center flex-wrap">
      {buttons}
    </ul>
  );
}

export default FilterButtons;
