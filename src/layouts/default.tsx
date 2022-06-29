import React from 'react';
import { SingleColumn } from '@gregalexsmith/components';
import { Outlet } from 'react-router';
import { Navigation } from '../features/app';

export const DefaultLayout = () => (
  <>
    <SingleColumn classNameContainer="bg-neutral-100">
      <Navigation />
    </SingleColumn>
    <SingleColumn fullHeight className="pt-6">
      <Outlet />
    </SingleColumn>
  </>
);
