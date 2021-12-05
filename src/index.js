import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { ThemeProvider as MuiThemeProvider } from '@mui/system';
import './index.css';
import Pages from './pages/Pages';
import GlobalStyle from './styles/globalStyle';
import FontStyles from './styles/fonts/fonts';
import theme from './styles/theme';
import reportWebVitals from './reportWebVitals';
import { muiTheme } from './styles/muiTheme';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <MuiThemeProvider theme={muiTheme}>
      <GlobalStyle />
      <FontStyles />
      <Pages />
    </MuiThemeProvider>
  </ThemeProvider>,
  document.getElementById('root'),
);

reportWebVitals();
