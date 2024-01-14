import { css } from "lit";
export const createProductStyle = css`
  :host {
    background-color: #f4f4f4;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    text-align: center;
  }

  form {
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    padding: 20px;
    width: 300px;
    text-align: center;
  }

  label {
    display: block;
    margin-bottom: 8px;
    font-weight: bold;
    color: #333;
  }
  textarea {
    width: 297px;
    height: 93px;
  }

  input {
    width: 100%;
    padding: 8px;
    margin-bottom: 16px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  button {
    background-color: #04879c;
    color: #fff;
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  button:hover {
    background-color: #046978;
  }
`;
