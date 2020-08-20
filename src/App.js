import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <h1>Checkout</h1>
          </Route>

          <Route path="/login">
            <h1>Login page</h1>
          </Route>

          <Route path="/">
            <Header />
            <h1>Home page</h1>
          </Route>
        </Switch>
        return <div className="app">wue pedo</div>;
      </div>
    </Router>
  );
}

export default App;
