import React from 'react';
import { Route, Switch } from 'react-router';
import { HashRouter } from 'react-router-dom';

import HomePage from '../Home/HomePage';
import Rank from '../Rank';


export default () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/rank" component={Rank} />
    </Switch>
  </HashRouter>
);
