import { html, LitElement } from "lit";
import "../../../components/card-product";
import { landingHomeStyle } from "./LandingHome.style";
export class LandingHome extends LitElement {
  static styles = landingHomeStyle;
  static properties = {
    products: { type: Array },
  };

  constructor() {
    super();
    this.products = [];
  }

  connectedCallback() {
    super.connectedCallback();

    const storedProducts = localStorage.getItem("products");
    if (storedProducts) {
      this.products = JSON.parse(storedProducts);
    } else {
      // Si no hay productos en el localStorage, asigno los productos predeterminados
      this.products = [
        {
          name: "Producto 1",
          image:
            "https://images.pexels.com/photos/2023384/pexels-photo-2023384.jpeg?auto=compress&cs=tinysrgb&w=600",
          description: "Descripción del producto 1...",
          price: "$49.99",
        },
      ];
      // Guardo los productos predeterminados en el localStorage
      localStorage.setItem("products", JSON.stringify(this.products));
    }
  }

  render() {
    return html`
      <section>
        <header></header>
        <main>
          <h1>Products</h1>
          ${this.products.map(({ id, name, image, description, price }) => {
            return html`
              <card-product
                .id="${id}"
                .name="${name}"
                .image="${image}"
                .description="${description}"
                .price="${price}"
              ></card-product>
            `;
          })}
        </main>
        <footer></footer>
      </section>
    `;
  }
}
