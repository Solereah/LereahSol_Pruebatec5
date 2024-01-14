import { html, LitElement } from "lit";
import "../../../components/card-product";
import { landingHomeStyle } from "./LandingHome.style.js";

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
      this.products = [
        {
          id: "bf1fa6ef-bbfc-406c-aaf5-fed45fbfe15d",
          name: "Lámpara de Mesa Jillian",
          image:
            "https://cdn.sklum.com/es/wk/2710942/lampara-de-mesa-en-madera-jillian.jpg?cf-resize=gallery",
          description:
            "Esta asombrosa lámpara está compuesta por una base de madera de caucho y una pantalla plisada de algodón y tergal.",
          price: 47,
        },
        {
          id: "3f51f194-8160-45d4-a50c-9f156adbba09",
          name: "Taburete Bajo en Ratán",
          image:
            "https://cdn.sklum.com/es/wk/2712010/taburete-bajo-en-ratan-trevijon.jpg?cf-resize=gallery",
          description:
            "La combinación perfecta de estilo, comodidad y durabilidad la encontrarás en el Taburete Bajo en Ratán Trevijon.",
          price: 56,
        },
        {
          id: "13010b71-c314-410a-af1a-35c8e2fa1b92",
          name: "Estantería de Pared",
          image:
            "https://cdn.sklum.com/es/wk/2711789/estanteria-de-pared-en-ratan-judson.jpg?cf-resize=gallery",

          description:
            "Cuenta con dos estantes y destaca por los detalles de los laterales que suman belleza a la estantería.De estilo moderno y vintage ",
          price: "67",
        },
      ];

      localStorage.setItem("products", JSON.stringify(this.products));
    }
  }

  __handleDeleteProduct(event) {
    const productIdToDelete = event.detail.id;

    this.products = this.products.filter(
      (product) => product.id !== productIdToDelete
    );

    localStorage.setItem("products", JSON.stringify(this.products));
  }

  render() {
    return html`
      <section>
        <header></header>
        <main>
          <h1>New arrivals</h1>
          <div class="card-container">
            ${this.products.map(({ id, name, image, description, price }) => {
              return html`
                <card-product
                  .id="${id}"
                  .name="${name}"
                  .image="${image}"
                  .description="${description}"
                  .price="${price}"
                  @delete-product="${this.__handleDeleteProduct}"
                ></card-product>
              `;
            })}
          </div>
        </main>
        <footer></footer>
      </section>
    `;
  }
}
