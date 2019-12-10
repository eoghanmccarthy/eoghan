import React from "react";
import { Switch, Route } from "react-router-dom";

import Background from "assets/images/img_0359-folio.jpg";

import Header from "app/common/header";
import Footer from "app/common/footer";
import Bio from "app/features/bio";
import Home from "pages/home";

export default () => (
  <div className="me" style={{ backgroundImage: `url(${Background})` }}>
    <Header />
    <Switch>
      <Route exact path="/" render={() => <Home />} />
      <Route render={() => <Home />} />
    </Switch>
    <Bio />
    <Footer />
  </div>
);
