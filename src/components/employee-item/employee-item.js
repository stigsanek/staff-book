import React from 'react';

import './employee-item.css';

const EmployeeItem = ({ data }) => {
  const { photo, name, departament, position, phone, email } = data;

  const style = photo ? { backgroundImage: `url('${photo}')`, backgroundSize: 'cover' } : null;

  return (
    <React.Fragment>
      <button className="avatar mr-4" style={style}></button>
      <div>
        <p className="h4 mb-2">{name}</p>
        <p className="mb-2">{position}</p>
        <p className="mb-2">{departament}</p>
        <p className="user-info user-phone mb-2">{phone}</p>
        <a className="user-info user-mail text-info" href={`mailto:${email}`}>{email}</a>
      </div>
    </React.Fragment>
  );
}

export default EmployeeItem;
