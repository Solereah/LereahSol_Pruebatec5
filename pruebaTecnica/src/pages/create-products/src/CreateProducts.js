import { html, LitElement } from "lit";
import { createProductStyle } from "./CreateProducts.sytle";
import { v4 as uuidv4 } from "uuid";
export class CreateProducts extends LitElement {
  static styles = createProductStyle;
  static properties = {
    newProduct: {
      id: { type: String },
      name: { type: String },
      image: { type: String },
      description: { type: String },
      price: { type: Number },
    },
  };

  constructor() {
    super();
    this.newProduct = {
      id: uuidv4(),
      name: "",
      image: "",
      description: "",
      price: 0,
    };
  }

  __addProduct() {
    const name = this.shadowRoot.querySelector("#name").value;
    const image = this.shadowRoot.querySelector("#image").value;
    const description = this.shadowRoot.querySelector("#description").value;
    const price = this.shadowRoot.querySelector("#price").value;

    const newProduct = {
      id: uuidv4(),
      name,
      image,
      description,
      price,
    };

    this.__saveProductToLocalStorage(newProduct);
    this.requestUpdate();
  }

  __saveProductToLocalStorage(product) {
    const existingProducts = JSON.parse(localStorage.getItem("products")) || [];

    existingProducts.push(product);

    localStorage.setItem("products", JSON.stringify(existingProducts));
  }

  render() {
    return html` <article>
      <h2>Create Product</h2>
      <form method="post">
        <label for="nombre">Name:</label>
        <input type="text" id="name" name="name" required />

        <label for="imagen">Image URL:</label>
        <input type="url" id="image" name="image" required />

        <label for="descripcion">Description:</label>
        <textarea
          id="description"
          name="description"
          rows="4"
          required
        ></textarea>

        <label for="precio">Price:</label>
        <input type="number" id="price" name="price" required />

        <button @click="${this.__addProduct}" type="submit">Add Product</button>
      </form>
    </article>`;
  }
}
