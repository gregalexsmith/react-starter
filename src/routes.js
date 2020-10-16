import React from 'react';
import { Switch } from 'react-router-dom';
import DefaultLayout from './layouts/default';
import { Home } from './pages';

const Routes = () => (
  <Switch>
    <DefaultLayout path="/" component={Home} />
  </Switch>
);

export default Routes;
