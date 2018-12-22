import React from "react";
import { Switch, Route } from "react-router-dom";

import Background from "media/images/img_0359-folio.jpg";

import Header from "components/header";
import Footer from "components/footer";
import Contact from "components/contact";
import Home from "pages/home";

export default () => (
  <div className="me" style={{ backgroundImage: `url(${Background})` }}>
    <Header />
    <Switch>
      <Route exact path="/" render={() => <Home />} />
      <Route render={() => <Home />} />
    </Switch>
    <Contact />
    <Footer />
  </div>
);
