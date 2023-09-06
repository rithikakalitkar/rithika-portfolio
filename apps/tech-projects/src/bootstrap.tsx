import { Component, StrictMode } from 'react';
// import * as ReactDOM from 'react-dom';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './app/app';
import {
  CssBaseline,
  ThemeProvider,
  createTheme,
  StyledEngineProvider,
} from '@mui/material';
import { render } from 'react-dom';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
const muiTheme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});
/* Uncomment below block to run react app in standalone mode */
// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
// root.render(
//   <StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </StrictMode>
// );

export class TechProjectsReactElement extends HTMLElement {

  connectedCallback() {
    const shadowContainer = this.attachShadow({ mode: 'open' });
    const emotionRoot = document.createElement('style');
    const shadowRootElement = document.createElement('div');
    shadowContainer.appendChild(emotionRoot);
    shadowContainer.appendChild(shadowRootElement);

    const cache = createCache({
      key: 'css',
      prepend: true,
      container: emotionRoot,
    });
    const shadowTheme = createTheme({
      components: {
        MuiPopover: {
          defaultProps: {
            container: shadowRootElement,
          },
        },
        MuiPopper: {
          defaultProps: {
            container: shadowRootElement,
          },
        },
        MuiModal: {
          defaultProps: {
            container: shadowRootElement,
          },
        },
      },
    });
    ReactDOM.createRoot(shadowRootElement).render(
      <StrictMode>
        <CacheProvider value={cache}>
          <ThemeProvider theme={shadowTheme}>
            <App />
          </ThemeProvider>
        </CacheProvider>
      </StrictMode>
    );
  }
}

window.customElements.define('tech-projects-ele', TechProjectsReactElement);

export default TechProjectsReactElement;
