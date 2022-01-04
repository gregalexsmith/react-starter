import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import smartOutline from 'smart-outline';

import GlobalStyle from './styles/global';
import { theme } from './styles/theme';
import Routes from './routes';
import { logger } from './helpers';

smartOutline.init();
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

ReactDOM.render(<Root />, document.getElementById('root'));
