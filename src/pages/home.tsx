import React from 'react';
import { Heading, Box, Link } from '../components';
import { useDocTitle, useLogPage } from '../helpers';

export function Home() {
  useLogPage('Home');
  useDocTitle('React Stater - Home');

  return (
    <Box bg="neutral.white">
      <Heading>Home</Heading>
      <p>A simple react starter application with a few preferences set up.</p>
      <p>
        <Link href="https://github.com/gregalexsmith/react-starter">
          Github Repo
        </Link>
      </p>
    </Box>
  );
}
