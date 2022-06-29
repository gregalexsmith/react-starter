import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// import smartOutline from 'smart-outline';

import { logger } from './helpers';
import Routes from './routes';
import './index.css';

// smartOutline.init();
logger.init();

const Root = () => (
  <React.StrictMode>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </React.StrictMode>
);

render(<Root />, document.getElementById('root'));
