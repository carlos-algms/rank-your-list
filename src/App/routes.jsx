import React from 'react';
import { Route } from 'react-router';
import { HashRouter } from 'react-router-dom';

import HomePage from '../Home/HomePage';


export default () => (
  <HashRouter>
    <Route exact path="/" component={HomePage} />
  </HashRouter>
);
