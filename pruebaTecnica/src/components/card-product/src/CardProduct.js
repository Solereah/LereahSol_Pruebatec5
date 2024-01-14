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
  __deleteProduct() {
    this.dispatchEvent(
      new CustomEvent("delete-product", {
        bubbles: true,
        composed: true,
        detail: { id: this.id },
      })
    );
  }
  render() {
    return html`
      <article>
        <div class="simple-card">
          <img src="${this.image}" alt="${this.name}" />
          <div class="card-content">
            <h3>${this.name}</h3>
            <p>${this.description}</p>
            <div class="card-footer">
              <p class="price">€${this.price}</p>
              <button class="delete-button" @click="${this.__deleteProduct}">
                Delete Product
              </button>
            </div>
          </div>
        </div>
      </article>
    `;
  }
}
