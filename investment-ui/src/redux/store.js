// src/redux/store.js
import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';  // Use named import here
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/rootReducer';  // Import the rootReducer

const middleware = [thunk];

const store = createStore(
  rootReducer,  // Use rootReducer here
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
