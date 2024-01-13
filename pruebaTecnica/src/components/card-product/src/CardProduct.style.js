import { css } from "lit";

export const cardProductStyle = css`
  :host {
    display: flex;
    text-align: center;
    border: 1px solid blue;
  }
  article {
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    width: 300px;
    transition: transform 0.3s ease;
  }

  article:hover {
    transform: scale(1.05);
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  header,
  footer {
    padding: 16px;
  }

  header h2 {
    margin-top: 0;
  }

  p {
    color: #666;
  }

  .price {
    font-weight: bold;
    color: #333;
    font-size: 1.2em;
  }
`;
