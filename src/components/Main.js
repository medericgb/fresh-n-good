import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import '../styles.css'

// Components
import Nav from "./Nav";
import Home from "./Home";
import Recipe from "./Recipe";

function Main() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/recipe" component={Recipe} />
      </Switch>
    </Router>
  );
}

export default Main;
