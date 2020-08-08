import React from 'react';

import ErrorLink from '../error-link';

const Footer = () => {
  return (
    <footer className="container fixed-bottom bg-white">
      <div className="d-flex justify-content-center p-2">
        <ErrorLink />
        <span className="text-secondary ml-5">v1.0</span>
      </div>
    </footer>
  );
}

export default Footer;
