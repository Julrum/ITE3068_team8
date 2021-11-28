import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import './index.css';
import Pages from './pages/Pages';
import GlobalStyle from './styles/globalStyle';
import FontStyles from './styles/fonts/fonts';
import theme from './styles/theme';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <FontStyles />
    <GlobalStyle />
    <Pages />
  </ThemeProvider>,
  document.getElementById('root'),
);

reportWebVitals();
