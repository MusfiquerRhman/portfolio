import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import {ThemeContextProvider} from './context APIs/themeContextAPI'
import {AccentContextProvider} from './context APIs/accentContextAPI'

ReactDOM.render(
  <React.StrictMode>
    <AccentContextProvider>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </AccentContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


