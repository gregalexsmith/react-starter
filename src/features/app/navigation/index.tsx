import React from 'react';
import { NavSimple } from '@gregalexsmith/components';

export const Navigation = () => (
  <NavSimple title="React Starter">
    <NavSimple.Link to="/">Home</NavSimple.Link>
    <NavSimple.Link to="/about">About</NavSimple.Link>
  </NavSimple>
);
