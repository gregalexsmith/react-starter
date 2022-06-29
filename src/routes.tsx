import React from 'react';
import { Routes as ReactRoutes, Route } from 'react-router-dom';
import { DefaultLayout } from './layouts/default';
import { Home, About } from './pages';

const Routes = () => (
  <ReactRoutes>
    <Route path="/" element={<DefaultLayout />}>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
    </Route>
  </ReactRoutes>
);

export default Routes;
