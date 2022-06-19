import React from 'react';
import { Outlet } from 'react-router';
import { SingleColumn } from '../components';
import { Navigation } from '../features/app';

const DefaultLayout = () => (
  <>
    <SingleColumn bg="neutral.lightest">
      <Navigation />
    </SingleColumn>
    <SingleColumn bg="neutral.white" height="100%" pt={6}>
      <Outlet />
    </SingleColumn>
  </>
);

export default DefaultLayout;
