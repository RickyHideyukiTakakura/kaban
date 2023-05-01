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

  img {
    width: 6.4rem;
    height: 6.4rem;
    border-radius: 50%;
  }
`;
