import React from 'react';

import './Header.scss';
import logo from '../images/logo.png';

const Header = () => {
  return (
    <header className="page-header">
      <nav className="page-nav">
        <div className="page-logo">
          <a href="#">
            <img src={logo} alt="RiseUp Summit Logo" id="#logo" />
          </a>
        </div>
        <ul className="nav-ul">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Crowd</a>
          </li>
          <li>
            <a href="#">Summit</a>
          </li>
          <li>
            <a href="#">Summit 101</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
