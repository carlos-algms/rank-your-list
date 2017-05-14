import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import reducers from './reducers';

const midlewares = [thunkMiddleware];

if (process.env.NODE_ENV !== 'production') {
  midlewares.push(createLogger());
}

const store = createStore(
  reducers,
  applyMiddleware(...midlewares)
);

export default store;
