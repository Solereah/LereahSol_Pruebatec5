import { css } from "lit";

export const headerMenuStyle = css`
  :host {
    display: block;
    width: 100%;
  }

  nav {
    display: flex;
    justify-content: flex-end;
    background-color: #0766ad;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }

  li {
    float: left;
  }

  li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }

  li a:hover {
    background-color: #ddd;
    color: black;
  }
`;
