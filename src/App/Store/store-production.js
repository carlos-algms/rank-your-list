import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import reducers from '../Reducers';

const initialState = {};
const midlewares = [thunkMiddleware];

const enhancer = applyMiddleware(...midlewares);

const store = createStore(reducers, initialState, enhancer);


export default store;
