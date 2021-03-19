import React from 'react';
import './Header.scss';

import Logo from "../svg/Logo";

import SearchIcon from "@material-ui/icons/Search";

function Header() {
  return (
    <div className="Header">
      <div className="Header-logo">
        <Logo fill="white" />
      </div>
      <div className="Header-search">
        <SearchIcon className="Header-search-searchIcon" />
        <input
          type="text"
          placeholder="Search..."
          className="Header-search-input"
        />
      </div>
      <div className="Header-menuItems">
        <span className="Header-menuItems-item">Free Stocks</span>
        <span className="Header-menuItems-item">Portfolio</span>
        <span className="Header-menuItems-item">Cash</span>
        <span className="Header-menuItems-item">Messages</span>
        <span className="Header-menuItems-item">Account</span>
      </div>
    </div>
  );
}

export default Header;
