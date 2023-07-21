import { Component, StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './app/app';

export class TechProjectsReactElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    console.log("inside connected");
    // Render the React component into the Shadow DOM
    ReactDOM.render(
      <BrowserRouter>
        <StrictMode>
          <App />
        </StrictMode>
      </BrowserRouter>,
      this.shadowRoot
    );
  }
}

window.customElements.define('tech-projects-ele', TechProjectsReactElement);

export default TechProjectsReactElement;

