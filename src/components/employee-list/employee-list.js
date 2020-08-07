import React from 'react';

import EmployeeItem from '../employee-item';

const EmployeeList = ({ data }) => {
  const peoples = data.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <li className="d-flex mb-5" key={id}>
        <EmployeeItem data={itemProps} />
      </li>
    );
  });

  return (
    <ul className="custom-list d-flex flex-column">
      {peoples}
    </ul>
  );
}

export default EmployeeList;


