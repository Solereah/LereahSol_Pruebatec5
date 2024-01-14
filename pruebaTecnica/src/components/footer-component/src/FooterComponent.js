import { LitElement, html } from "lit";
import { FooterComponentStyles } from "./FooterComponent.style.js";
export class FooterComponent extends LitElement {
  static styles = FooterComponentStyles;

  render() {
    return html`
      <footer>
        <p>&copy; ${new Date().getFullYear()} MarketPlace</p>
      </footer>
    `;
  }
}
