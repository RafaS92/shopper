import React from "react";
import "../Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "../StateProvider";

function Header() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <nav className="header">
      <Link to="/">
        <img className="header_logo" src="../images/shopper.png" alt="" />
      </Link>
      <div className="header_search">
        <input type="text" className="header_searchInput" />
        <button className="header_searchIcon">
          <SearchIcon />
        </button>
      </div>

      <div className="header_nav">
        <Link to="/login" className="header_link">
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
            <span className="header_optionLineTwo header_basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
