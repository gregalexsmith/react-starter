import React from 'react';
import { Route } from 'react-router-dom';
import { Navigation } from '../features/app';
import { SingleColumn } from '../components';

const DefaultLayout = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={matchProps => (
      <>
        <SingleColumn bg="neutral.lightest">
          <Navigation />
        </SingleColumn>
        <SingleColumn bg="neutral.white" height="100%" pt={6}>
          <Component {...matchProps} />
        </SingleColumn>
      </>
    )}
  />
);

export default DefaultLayout;
