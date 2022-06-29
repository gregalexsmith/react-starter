import React from 'react';
import { Link } from '../components';
import { useDocTitle, useLogPage } from '../helpers';

export function Home() {
  useLogPage('Home');
  useDocTitle('React Stater - Home');

  return (
    <div className="bg-white">
      <h2 className="text-2xl mb-2">Home</h2>
      <p>A simple react starter application with a few preferences set up.</p>
      <p>
        <Link href="https://github.com/gregalexsmith/react-starter">
          Github Repo
        </Link>
      </p>
    </div>
  );
}
