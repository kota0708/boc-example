import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise';
import reducer from '../reducers';

const middleware = [thunk, promiseMiddleware];
const enhancer = applyMiddleware(...middleware);
const configureStore = (initialState = {}) => createStore(reducer, initialState, enhancer);
export default { configureStore };
