import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise';
import { createLogger } from 'redux-logger';

import reducer from '../reducers';

const configureStore = (initialState = {}) => {

  const logger = createLogger({
    collapsed: true,
    diff: true,
    level: 'info'
  });

  const middleware = [
    promiseMiddleware,
    thunk,
    logger
  ];
  const actionCreators = {};
  const enhancers = [applyMiddleware(...middleware)];
  // If Redux DevTools Extension is installed use it, otherwise use Redux compose
  /* eslint-disable no-underscore-dangle,no-undef */
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      actionCreators
    })
    : compose;
  const enhancer = composeEnhancers(...enhancers);
  const store = createStore(reducer, initialState, enhancer);

  /* if (module.hot) {
    module.hot.accept(
      '../reducers',
      () => store.replaceReducer(require('../reducers')) // eslint-disable-line global-require
    );
  } */

  return store;
};
export default { configureStore };
