import React from "react";
import { Switch, Route } from "react-router-dom";

import Background from "media/images/img_0243-folio.jpg";

import Header from "containers/header";
import Footer from "containers/footer";
import Home from "pages/home";

export default () => (
  <div className="me" style={{ backgroundImage: `url(${Background})` }}>
    <Header />
    <Switch>
      <Route exact path="/" render={() => <Home />} />
      <Route render={() => <Home />} />
    </Switch>
    <Footer />
  </div>
);
