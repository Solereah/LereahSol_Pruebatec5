import { css } from "lit";

export const landingHomeStyle = css`
  section {
    padding: 20px;
  }

  .card-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
  }
  h1 {
    text-align: left;
    margin: 10px;
  }
`;
