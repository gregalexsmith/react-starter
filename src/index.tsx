import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
// import smartOutline from 'smart-outline';

import { logger } from './helpers';
import Routes from './routes';
import GlobalStyle from './styles/global';
import { theme } from './styles/theme';

// smartOutline.init();
logger.init();

const Root = () => (
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routes />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

render(<Root />, document.getElementById('root'));
