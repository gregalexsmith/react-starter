import React from 'react';
import { Heading, Box, Link } from '../components';

function Home() {
  return (
    <Box width={1}>
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

export default Home;
