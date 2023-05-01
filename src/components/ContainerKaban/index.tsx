import { Card } from '../Card';
import { Kaban, KabanBody, KabanHeader } from '../Kaban';
import * as S from './styles';

interface ICard {
  title: string;
  description: string;
  tag: string;
  type: string;
}

interface INewCard {
  cards: ICard[];
}

export function ContainerKaban({ cards }: INewCard) {
  const todosCards = cards.filter((card) => card.type === 'todo');
  const doingCards = cards.filter((card) => card.type === 'doing');
  const doneCards = cards.filter((card) => card.type === 'done');

  return (
    <S.ContainerKaban>
      <Kaban>
        <KabanHeader>A fazer</KabanHeader>
        <KabanBody>
          {todosCards.map((card) => (
            <Card
              key={card.title}
              title={card.title}
              description={card.description}
              tag={card.tag}
              type={card.type}
            />
          ))}
        </KabanBody>
      </Kaban>

      <Kaban>
        <KabanHeader>Fazendo</KabanHeader>
        <KabanBody>
          {doingCards.map((card) => (
            <Card
              key={card.title}
              title={card.title}
              description={card.description}
              tag={card.tag}
              type={card.type}
            />
          ))}
        </KabanBody>
      </Kaban>
      <Kaban>
        <KabanHeader>Concluído</KabanHeader>
        <KabanBody>
          {doneCards.map((card) => (
            <Card
              key={card.title}
              title={card.title}
              description={card.description}
              tag={card.tag}
              type={card.type}
            />
          ))}
        </KabanBody>
      </Kaban>
    </S.ContainerKaban>
  );
}
