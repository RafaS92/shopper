import React, { useState } from "react";
import "../Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.replace("/");
      })

      .catch((e) => alert(e.message));
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {})
      .catch((e) => alert(e.message));
    history.push("/");
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
          <input
            type="email"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
          />
          <h5>Password</h5>
          <input
            type="password"
            onChange={(event) => setPassword(event.target.value)}
            value={password}
          />
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
