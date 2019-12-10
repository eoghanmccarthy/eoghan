import React from "react";
import { Switch, Route } from "react-router-dom";

import Background from "assets/images/img_0359-folio.jpg";

import Header from "app/common/header";
import Footer from "app/common/footer";
import Home from "pages/home";
import Pace from "pages/pace";
import Bio from "app/features/bio";

export default () => (
  <div className="me" style={{ backgroundImage: `url(${Background})` }}>
    <Header />
    <Switch>
      <Route exact path="/pace" render={() => <Pace />} />
      <Route exact path="/" render={() => <Home />} />
      <Route render={() => <Home />} />
    </Switch>
    <Bio />
    <Footer />
  </div>
);
