import * as S from './styles';

interface ICard {
  title: string;
  description: string;
  tag: string;
  type: string;
}

export function Card(props: ICard) {
  return (
    <S.Card>
      <h4>{props.title}</h4>
      <p>{props.description}</p>
      <ul>
        <li>tags</li>
        <li>tags</li>
      </ul>
    </S.Card>
  );
}
