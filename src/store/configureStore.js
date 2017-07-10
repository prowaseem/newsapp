import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import thunkMiddleware from 'redux-thunk';
import {GET_DATA} from '../constants/ActionTypes';

const initialState = {
  type: GET_DATA,
  text: "helloInitialState"
}

const createStoreWithMiddleware = compose(
  // Save for redux middleware
  applyMiddleware(thunkMiddleware)
)(createStore);

export default function configureStore() {
  const store = createStoreWithMiddleware(rootReducer, {});


  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}