import React from "react";
import "../Header.css";
import { Link } from "react-router-dom";

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

      <input type="text" className="header_searchInput" />
    </nav>
  );
}

export default Header;
