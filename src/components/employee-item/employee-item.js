import React from 'react';

import './employee-item.css';

const EmployeeItem = ({ data, onModalOpen }) => {
  const { photo, name, departament, position, phone, email } = data;

  const bgStyle = {
    backgroundImage: `url('${photo}')`,
    backgroundPosition: 'top',
    backgroundSize: 'cover'
  };

  const style = photo ? bgStyle : null;
  const phoneBlock = phone ? <p className="user-info user-phone mb-2">{phone}</p> : null;
  const mailBlock = email ? <a className="user-info user-mail text-info" href={`mailto:${email}`}>{email}</a> : null;

  return (
    <React.Fragment>
      <button
        className="avatar mr-4"
        style={style}
        onClick={() => { onModalOpen(photo) }}
      >
      </button>
      <div>
        <p className="h4 mb-2">{name}</p>
        <p className="mb-2">{position}</p>
        <p className="mb-2">{departament}</p>
        {phoneBlock}
        {mailBlock}
      </div>
    </React.Fragment>
  );
}

export default EmployeeItem;
