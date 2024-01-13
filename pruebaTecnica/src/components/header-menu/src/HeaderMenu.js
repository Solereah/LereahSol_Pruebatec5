import { html, LitElement } from "lit";

import { headerMenuStyle } from "./HeaderMenu.style";

export class HeaderMenu extends LitElement {
  static styles = headerMenuStyle;
  constructor() {
    super();
  }

  render() {
    return html`
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/products">Product</a>
          </li>
        </ul>
      </nav>
    `;
  }
}
