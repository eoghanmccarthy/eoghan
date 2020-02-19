import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import './styles.scss';

import App from 'app';

const history = createHistory();

const MOUNT_NODE = document.getElementById('root');

render(
  <Router history={history}>
    <App />
  </Router>,
  MOUNT_NODE
);
