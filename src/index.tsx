import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import 'vscode-codicons/dist/codicon.css';
import App from './app';
import ReactDOM from 'react-dom';
import './reportWebVitals';
import { useStore } from './store';

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    font-family: Inter, Roboto, sans-serif;
  }
`;

function Index() {
  const theme = useStore(state => state.theme);

  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </React.StrictMode>
  )
}

ReactDOM.render(<Index />, document.getElementById('root'));
