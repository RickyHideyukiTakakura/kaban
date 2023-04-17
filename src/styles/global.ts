import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --white: #ffffff;

    --purple-100: #E2D6FF;
    --purple-300: #CAB3FF;
    --purple-500: #7C3AED;

    --brown-300: #403937;
    --brown-100: #756966;

    --gray-500: #505059;
    --gray-300: #7C7C8A;
    --gray-100: #E3E3E3;
    --gray-50: #FBFAFF;

    font-size: 62.5%;

  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--purple-500);
  }

  body,
  input,
  textarea,
  select,
  button {
    font: 400 1.6rem 'Inter', sans-serif;
  }

  button, a {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  #root {
    display: flex;
  }


  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content {
    width: 100%;
    max-width: 576px;
    background: var(--white);
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;
  }

  .react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;
    
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;
