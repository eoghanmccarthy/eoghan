import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "app/common/header";
import Footer from "app/common/footer";
import Home from "pages/home";
import Pace from "pages/pace";

export default () => (
  <div className="me">
    <Header />
    <Switch>
      <Route exact path="/pace" render={() => <Pace />} />
      <Route exact path="/" render={() => <Home />} />
      <Route render={() => <Home />} />
    </Switch>
    <Footer />
  </div>
);
