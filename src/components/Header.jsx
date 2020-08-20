import React from "react";
import "../Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";

function Header() {
  return (
    <nav className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="https://miro.medium.com/max/396/0*bVnfVVG7Y7qXQcO1"
          alt=""
        />
      </Link>
      <div className="header_search">
        <input type="text" className="header_searchInput" />
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header_nav">
        <Link to="/login" className="header_link">
          <div className="header_option">
            <span>Love u</span>
            <span>hate u</span>
          </div>
        </Link>
        <Link to="/login" className="header_link">
          <div className="header_option">
            <span>Return</span>
            <span>hate u</span>
          </div>
        </Link>
        <Link to="/login" className="header_link">
          <div className="header_option">
            <span>Prime</span>
            <span>hate u</span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
