import React from "react";
import "../Header.css";
import { Link } from "react-router-dom";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";

function Header() {
  const [{ basket, user }] = useStateValue();

  const login = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <nav className="header" id="top">
      <Link to="/">
        <img className="header_logo" src="../images/shopper.png" alt="" />
      </Link>

      <div className="header_nav">
        <Link to={!user ? "/login" : ""} className="header_link">
          <div onClick={login} className="header_option">
            <span className="header_optionLineOne">Hello {user?.email}</span>
            <span className="header_optionLineTwo">
              {user ? "Sign Out" : "Sign In/Create account"}
            </span>
          </div>
        </Link>

        <div className="header_link ">
          {user ? (
            <Link to="/checkout">
              <div className="header_optionBasket">
                <ShoppingBasketIcon />
                <span className="header_optionLineTwo header_basketCount">
                  {basket?.length}
                </span>
              </div>
            </Link>
          ) : (
            <div className="header_optionBasket2">
              "You need to sign in to buy items"
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Header;
