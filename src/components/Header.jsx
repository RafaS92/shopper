import React from "react";
import "../Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

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
        <Link to="/" className="header_link">
          <div className="header_option">
            <span className="header_optionLineOne">Love u</span>
            <span className="header_optionLineTwo">hate u</span>
          </div>
        </Link>
        <Link to="/" className="header_link">
          <div className="header_option">
            <span className="header_optionLineOne">Return</span>
            <span className="header_optionLineTwo">hate u</span>
          </div>
        </Link>
        <Link to="/" className="header_link">
          <div className="header_option">
            <span className="header_optionLineOne">Prime</span>
            <span className="header_optionLineTwo">hate u</span>
          </div>
        </Link>
        <Link to="/checkout" className="header_link">
          <div className="header_optionBasket">
            <ShoppingBasketIcon />
            <span>0</span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
