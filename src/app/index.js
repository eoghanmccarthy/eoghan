import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './styles.css';

import Home from './page';

const App = () => (
  <div className="me">
    <header className="me__header" />
    <Switch>
      <Route exact path="/" render={() => <Home />} />
      <Route render={() => <Home />} />
    </Switch>
    <footer className="me__footer" />
  </div>
);

export default App;
