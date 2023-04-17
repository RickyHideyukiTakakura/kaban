import { Card } from '../Card';
import { Kaban, KabanHeader } from '../Kaban';
import * as S from './styles';

export function ContainerKaban() {
  return (
    <S.ContainerKaban>
      <Kaban>
        <KabanHeader>A fazer</KabanHeader>
        <Card
          title="#boraCodar um Kanban 🧑‍💻"
          description="Novo desafio do #boraCodar da Rocketseat, onde é proposto construir um quadro de Kanban."
        />
        <Card
          title="Manter a ofensiva 🔥"
          description="Manter minha atividade na plataforma da Rocketseat para não perder a ofensiva"
        />
      </Kaban>
      <Kaban>
        <KabanHeader>Fazendo</KabanHeader>
        <Card
          title="Conferir o novo desafio 🚀 "
          description="Conferir o novo projeto do #boraCodar para fazê-lo da melhor maneira possível"
        />
      </Kaban>
      <Kaban>
        <KabanHeader>Feito</KabanHeader>
        <Card
          title="#boraCodar uma página de login 🧑‍💻"
          description="Novo desafio do #boraCodar da Rocketseat, onde é proposto construir um quadro de Kanban."
        />
      </Kaban>
    </S.ContainerKaban>
  );
}
