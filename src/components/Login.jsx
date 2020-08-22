import React from "react";
import "../Login.css";
import { Link, useHistory } from "react-router-dom";

function Login() {
  const login = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login">
      <Link to="/">
        <img className="login_logo" src="../images/shopper.png" alt="" />
      </Link>

      <div className="login_container">
        <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input type="email" />
          <h5>Password</h5>
          <input type="password" />
          <button onClick={login} type="submit" className="login_signInButton">
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to Shopper's Conditions of Use & Sale. Please
          see our Privacy Notice, our Cookies Notice and our Interest-Based Ads
          Notice.
        </p>
        <button onClick={register} className="login_signUpButton">
          Create your Shopper Account
        </button>
      </div>
    </div>
  );
}

export default Login;
