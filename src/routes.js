import React from 'react';
import { Switch } from 'react-router-dom';
import DefaultLayout from './layouts/default';
import { Home, About } from './pages';

const Routes = () => (
  <Switch>
    <DefaultLayout path="/" exact component={Home} />
    <DefaultLayout path="/about" component={About} />
  </Switch>
);

export default Routes;
