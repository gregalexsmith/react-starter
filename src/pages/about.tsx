import React from 'react';
import { Link } from '../components';
import { useDocTitle, useLogPage } from '../helpers';

export function About() {
  useLogPage('About');
  useDocTitle('React Stater - About');

  return (
    <div className="bg-white">
      <h2 className="text-2xl mb-2">About</h2>
      <p>For more information, please see the Github Readme:</p>
      <p>
        <Link href="https://github.com/gregalexsmith/react-starter">
          Github Repo
        </Link>
      </p>
    </div>
  );
}
