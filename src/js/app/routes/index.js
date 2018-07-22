import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "components/header";
import Home from "containers/home";
import Contact from "components/contact";

export default () => (
  <div className="wrapper">
    <Header />
    <Switch>
      <Route exact path="/" render={() => <Home />} />
      <Route render={() => <Home />} />
    </Switch>
    <Contact />
  </div>
);
