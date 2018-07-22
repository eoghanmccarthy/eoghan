import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "components/header";
import Footer from "components/footer";
import Home from "pages/home";

export default () => (
  <div className="me">
    <Header />
    <Switch>
      <Route exact path="/" render={() => <Home />} />
      <Route render={() => <Home />} />
    </Switch>
    <Footer />
  </div>
);
