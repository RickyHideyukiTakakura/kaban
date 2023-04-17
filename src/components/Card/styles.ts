import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  background: var(--white);
  padding: 2.4rem;
  box-shadow: 0px 4px 16px #eae2fd;
  border-radius: 8px;

  h4 {
    font-size: 14px;
    font-weight: 700;
    color: var(--brown-300);
  }

  p {
    font-size: 14px;
    font-weight: 500;
    color: var(--brown-100);
  }

  ul {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 0.8rem;

    li {
      background: var(--purple-100);
      padding: 0.4rem 0.8rem;
      border-radius: 0.8rem;

      font-size: 11px;
      font-weight: 500;
      color: var(--purple-500);
    }
  }
`;
