import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > div {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    h1 {
      font-size: 3.2rem;
      font-weight: 700;
      color: var(--brown-300);
    }

    button {
      border: none;
      padding: 0;
      background: transparent;
    }

    svg {
      width: 2.4rem;
      height: 2.4rem;
      color: #c7c7cd;
    }
  }

  form {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    input {
      border: none;
      border-radius: 0.8rem;
      box-shadow: rgba(22, 22, 22, 0.1) 0rem 0.4rem 1.6rem;
    }
  }

  img {
    width: 6.4rem;
    height: 6.4rem;
    border-radius: 50%;
  }
`;
