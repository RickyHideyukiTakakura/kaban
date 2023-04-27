import { useCard } from '../../hook/useCard'
import { Card } from '../Card'
import { Kaban, KabanHeader } from '../Kaban'
import * as S from './styles'

export function ContainerKaban() {
  const { cards } = useCard()

  return (
    <S.ContainerKaban>
      <Kaban>
        <KabanHeader>A fazer</KabanHeader>
        {cards
          .filter((card) => card.type === 'todo')
          .map((card) => (
            <Card
              key={card.title}
              title={card.title}
              description={card.description}
              type={card.type}
            />
          ))}
      </Kaban>

      <Kaban>
        <KabanHeader>Fazendo</KabanHeader>
        {cards
          .filter((card) => card.type === 'doing')
          .map((card) => (
            <Card
              key={card.title}
              title={card.title}
              description={card.description}
              type={card.type}
            />
          ))}
      </Kaban>
      <Kaban>
        <KabanHeader>Feito</KabanHeader>
        {cards
          .filter((card) => card.type === 'done')
          .map((card) => (
            <Card
              key={card.title}
              title={card.title}
              description={card.description}
              type={card.type}
            />
          ))}
      </Kaban>
    </S.ContainerKaban>
  )
}
