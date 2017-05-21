import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';


import reducers from '../reducers';


const initialState = {};

// TODO put all actionCreators here
const actionCreators = {

};

const logger = createLogger({
  level: 'info',
  collapsed: true
});

const { devToolsExtension } = window;

const enhancer = compose(
  applyMiddleware(thunkMiddleware, logger),
  devToolsExtension ? window.devToolsExtension({ actionCreators }) : noop => noop
);

const store = createStore(reducers, initialState, enhancer);

if (devToolsExtension) {
  devToolsExtension.updateStore(store);
}

if (module.hot) {
  module.hot.accept('../reducers', () =>
    store.replaceReducer(require('../reducers')) // eslint-disable-line global-require
  );
}

export default store;
