import React from 'react';
import { Routes as ReactRoutes } from 'react-router-dom';
import DefaultLayout from './layouts/default';
import { Home, About } from './pages';

const Routes = () => (
  <ReactRoutes>
    <DefaultLayout path="/" exact component={Home} />
    <DefaultLayout path="/about" component={About} />
  </ReactRoutes>
);

export default Routes;
