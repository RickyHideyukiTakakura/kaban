import styled from 'styled-components';

export const Main = styled.main`
  background: var(--gray-50);
  min-height: 100vh;
  width: 100%;

  border-radius: 3.2rem 0 0 0;
  margin-top: 0.4rem;
  padding: 5.9rem 5.6rem 0;

  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;

    background: var(--purple-500);
    color: #ffffff;

    border-style: none;
    border-radius: 0.5rem;

    padding: 1.2rem 3.2rem;

    font-size: 1.4rem;
    font-weight: 400;
  }
`;
