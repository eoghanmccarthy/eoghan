import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ConnectedRouter } from "connected-react-router";
import createHistory from "history/createBrowserHistory";

import configureStore from "./configureStore";

import App from "app";

const initialState = {};

const history = createHistory();

const { store, persistor } = configureStore(initialState, history);

const MOUNT_NODE = document.getElementById("root");

render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </PersistGate>
  </Provider>,
  MOUNT_NODE
);
