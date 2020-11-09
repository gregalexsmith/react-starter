import React from 'react';
import { Heading, Box, Link } from '../components';
import { useDocTitle, useLogPage } from '../helpers';

function About() {
  useLogPage('About');
  useDocTitle('React Stater - About');

  return (
    <Box bg="neutral.white">
      <Heading>About</Heading>
      <p>For more information, please see the Github Readme:</p>
      <p>
        <Link href="https://github.com/gregalexsmith/react-starter">
          Github Repo
        </Link>
      </p>
    </Box>
  );
}

export default About;
