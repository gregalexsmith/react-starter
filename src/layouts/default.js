import React from 'react';
import { Route } from 'react-router-dom';
import { TopBar } from '../features/app';
import { MainCard, Flex } from '../components';

const DefaultLayout = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={matchProps => (
      <Flex flexDirection="column" height="100%">
        <TopBar />
        <MainCard>
          <Component {...matchProps} />
        </MainCard>
      </Flex>
    )}
  />
);

export default DefaultLayout;
