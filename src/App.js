import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Checkout from "./components/Checkout";
import Home from "./components/Home";
import "./App.css";
import Login from "./components/Login";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import ScrollToTop from "./ScrollToTop";
import Register from "./components/Register";

function App() {
  const [, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  return (
    <div className="app">
      <Router>
        <ScrollToTop />
        <Header />
        <Switch>
          <Route path="/checkout" component={Checkout} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />

          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
