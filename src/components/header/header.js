import React from 'react';

import logo from './logo.svg';

const Header = () => {
  return (
    <h1 className="navbar-brand mb-0 mr-md-5">
      <img className="mr-2" src={logo} width="30" alt="Логотип" loading="lazy" />
      <span>Справочник сотрудников</span>
    </h1>
  );
}

export default Header;
