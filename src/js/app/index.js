import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Header, Footer } from 'app/global/layout';
import Home from 'pages/home';

const App = () => (
  <div className="me">
    <Header />
    <Switch>
      <Route exact path="/" render={() => <Home />} />
      <Route render={() => <Home />} />
    </Switch>
    <Footer />
  </div>
);

export default App;
