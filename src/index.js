import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import Theme from './styles/Theme';
import Main from './Main';

ReactDOM.render(
  <ThemeProvider theme={Theme}>
    <GlobalStyle />
    <Main />
  </ThemeProvider>,
  document.getElementById('root')
);
