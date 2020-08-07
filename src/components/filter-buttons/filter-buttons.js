import React from 'react';

import navs from '../../data/nav';

const FilterButtons = () => {
  const buttons = navs.map(({ name, label }) => {
    return (
      <li className="mr-2 mb-2" key={name}>
        <button className="btn btn-outline-info" type="button">
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
