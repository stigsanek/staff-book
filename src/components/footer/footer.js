import React from 'react';

const Footer = () => {
  return (
    <footer className="container fixed-bottom bg-white">
      <div className="d-flex justify-content-center p-2">
        <a className="text-info mr-5" href="mailto:stigsanek@yandex.ru">Сообщить об ошибке</a>
        <span className="text-secondary">v1.0</span>
      </div>
    </footer>
  );
}

export default Footer;
