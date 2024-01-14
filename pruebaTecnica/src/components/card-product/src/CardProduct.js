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
    console.log("Deleting product with id:", this.id);
    this.dispatchEvent(
      new CustomEvent("delete-product", {
        bubbles: true,
        composed: true,
        detail: { id: this.id },
      })
    );
    console.log("Event dispatched.");
  }
  render() {
    return html`
      <article>
        <div class="card-container" id="${this.id}">
          <div class="product-img">
            <img src="${this.image}" height="420" width="327" />
          </div>
          <div class="product-info">
            <div class="product-text">
              <h1>${this.name}</h1>
              <h2>by Landing Marketplace</h2>
              <p>${this.description}</p>
            </div>
            <div class="product-price-btn">
              <p><span>${this.price}</span>$</p>
              <button
                type="button"
                @click="${this.__deleteProduct}"
                class="delete-item"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </article>
    `;
  }
}
