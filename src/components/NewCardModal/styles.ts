import { transparentize } from 'polished';
import styled from 'styled-components';

export const Form = styled.form`
  h2 {
    color: var(--brown-300);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;

    border: 1px solid #d7d7d7;

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--gray-300);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type='submit'] {
    width: 100%;
    height: 4rem;
    margin-top: 1.5rem;

    padding: 0 1.5rem;
    background: var(--purple-500);
    color: #fff;

    border-radius: 0.25rem;
    border: 0;

    font-size: 1rem;
    font-weight: 600;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const ContainerRadioButton = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.5rem;
`;

interface IRadioBox {
  isActive: boolean;
  activeColor: 'red' | 'yellow' | 'green';
}

const colors = {
  red: '#e84646',
  yellow: '#fec582',
  green: '#96f162'
};

export const RadioBox = styled.button<IRadioBox>`
  height: 4rem;
  border: 1px solid #d7d7d7;
  border-radius: 0.25rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${(props) =>
    props.isActive
      ? transparentize(0.9, colors[props.activeColor])
      : 'transparent'};

  span {
    font-size: 1rem;
    color: var(--brown-300);
  }
`;
