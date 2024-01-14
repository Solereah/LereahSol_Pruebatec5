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
            <a href="/products">Products</a>
          </li>
        </ul>
      </nav>
    `;
  }
}
