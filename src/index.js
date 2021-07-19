import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import Theme from './styles/Theme';
import Main from './Main';

import { Provider } from 'react-redux';
import store from './modules/store';

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Main />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);
