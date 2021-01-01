import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import vsDarkTheme from './themes/vs-dark';
import 'vscode-codicons/dist/codicon.css';
import App from './app';
import ReactDOM from 'react-dom';
import './reportWebVitals';

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    font-family: Inter, Roboto, sans-serif;
  }
`;

function Index() {
  return (
    <React.StrictMode>
      <ThemeProvider theme={vsDarkTheme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </React.StrictMode>
  )
}

ReactDOM.render(<Index />, document.getElementById('root'));
