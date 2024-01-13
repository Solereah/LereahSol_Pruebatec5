import { LitElement, html } from "lit";
import { cardProductStyle } from "./CardProduct.style";

export class CardProduct extends LitElement {
  static styles = cardProductStyle;

  properties = {
    id: { type: String },
    name: { type: String },
    image: { type: String },
    description: { type: String },
    price: { type: Number },
  };

  constructor() {
    super();
    this.id = "";
    this.name = "";
    this.image = "";
    this.description = "";
    this.price = 0;
  }

  render() {
    return html`
      <article>
        <div id="${this.id}" class="card-container">
          <header>
            <h2>${this.name}</h2>
          </header>
          <main>
            <img src="${this.image}" alt="${this.name}" />
            <p>${this.description}</p>
          </main>
          <footer>
            <p class="price">$${this.price}</p>
          </footer>
        </div>
      </article>
    `;
  }
}
