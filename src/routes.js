import React from 'react';
import { Redirect, Switch } from 'react-router-dom';
import DefaultLayout from './layouts/default';
import { Home, About } from './pages';

const Routes = () => (
  <Switch>
    <DefaultLayout path="/" exact component={Home} />
    <DefaultLayout path="/about" component={About} />

    <Redirect to="/" />
  </Switch>
);

export default Routes;
