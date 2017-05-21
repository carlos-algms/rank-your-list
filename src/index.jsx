import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from './App/Store';
import App from './App';

import './styles.scss';


render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
