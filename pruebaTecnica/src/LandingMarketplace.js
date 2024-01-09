import { LitElement, html } from 'lit';
import { RouterMixin } from './router/RouterMixin';

import { routes } from './router/routes.js';

export class LandingMarketplace extends RouterMixin(LitElement) {

  static properties = {
    routes: { type: Array },
  }

  constructor() {
    super();
    this.routes = routes;
  }

  render() {
    return html`
      <section>
        <header>
        </header>
        <main id="outlet"></main>
        <footer>
        
        </footer>
      </section>  
    `;
  }

}

window.customElements.define('landing-market-place', LandingMarketplace);