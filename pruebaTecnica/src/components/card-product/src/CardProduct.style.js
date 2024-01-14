import { css } from "lit";

export const cardProductStyle = css`
  .simple-card {
    width: 320px;
    height: 570px;
    margin: 20px auto;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    overflow: hidden;
    text-align: center;
  }

  .simple-card img {
    margin-top: 20px;
    width: 280px;
    height: 280px;
    border-radius: 5px;
    object-fit: cover;
  }

  .card-content {
    padding: 15px;
  }
  .card-content h3 {
    color: #666;
  }

  .card-content p {
    color: #888;
    max-height: 100px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .card-footer {
    margin-bottom: 20px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  .card-content .price {
    font-size: 1.2em;
    color: #0766ad;
  }

  .delete-button {
    background-color: #f30a49;
    color: #fff;
    padding: 8px 12px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1em;
  }

  .delete-button:hover {
    background-color: #c00d3c;
  }
`;
