import styled from 'styled-components';

export const MenuList = styled.li`
  a {
    display: flex;
    align-items: center;
    gap: 1.6rem;
    font-weight: 500;

    svg {
      width: 2rem;
      height: 2rem;
      color: var(--purple-300);
    }

    span {
      font-size: 1.6rem;
      color: var(--purple-300);
    }

    &:hover {
      span,
      svg {
        color: var(--white);
        font-weight: 700;
      }
    }
  }
`;
