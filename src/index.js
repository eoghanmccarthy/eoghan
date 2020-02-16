import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Router } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import configureStore from './configureStore';

import App from 'app';

import './scss/main.scss';

const initialState = {};

const history = createHistory();

const { store, persistor } = configureStore(initialState, history);

const MOUNT_NODE = document.getElementById('root');

render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router history={history}>
        <App />
      </Router>
    </PersistGate>
  </Provider>,
  MOUNT_NODE
);
