import React from 'react';
import { Navigation } from '../features/app';
import { SingleColumn } from '../components';
import { Outlet } from 'react-router';

const DefaultLayout = ({ children }) => (
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
