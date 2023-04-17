import styled from 'styled-components';

export const Search = styled.form`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  svg {
    width: 2.4rem;
    height: 2.4rem;
  }

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

  & > div {
    width: 100%;
    position: relative;

    & > svg {
      position: absolute;
      left: 2.4rem;
      top: 1.2rem;
    }

    input {
      width: 100%;
      padding: 1.375rem 2.4rem 1.375rem 5.8rem;

      border: 0.7px solid #e3e3e3;
      box-shadow: 0rem 0.4rem 1.6rem rgba(22, 22, 22, 0.1);
      border-radius: 0.8rem;

      &::placeholder {
        color: var(--gray-300);
        font-size: 1.6rem;
      }
    }
  }
`;
