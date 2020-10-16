import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyle from './styles/global';
import theme from './styles/theme';
import Routes from './routes';

const Root = () => (
  <React.StrictMode>
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routes />
      </ThemeProvider>
    </Router>
  </React.StrictMode>
);

ReactDOM.render(<Root />, document.getElementById('root'));
