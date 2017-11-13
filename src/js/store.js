import { createStore } from 'redux';

// Import the root reducer
import rootReducer from './reducers/index';

const store = createStore(
	rootReducer,
	window.devToolsExtension && devToolsExtension()
);

export default store;
