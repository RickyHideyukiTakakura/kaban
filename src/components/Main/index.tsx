import { Header } from '../Header';
import { Search } from '../Search';
import * as S from './styles';
import FilterListIcon from '@mui/icons-material/FilterList';
import SearchIcon from '@mui/icons-material/Search';
import { ContainerKaban } from '../ContainerKaban';
import Modal from 'react-modal';
import { useState } from 'react';
import { NewCardModal } from '../NewCardModal';

Modal.setAppElement('#root');

interface ICard {
  title: string;
  description: string;
  tag: string;
  type: string;
}

export function Main() {
  const [isNewCardModalOpen, setIsNewCardModalOpen] = useState(false);
  const [cards, setCards] = useState<ICard[]>([]);

  function handleOpenNewCard() {
    setIsNewCardModalOpen(true);
  }

  function handleCloseNewCard() {
    setIsNewCardModalOpen(false);
  }

  function handleAddCard(newCard: ICard) {
    setCards((prevState) => [...prevState, newCard]);
  }

  return (
    <>
      <S.Main>
        <Header image="https://github.com/rickyhideyukitakakura.png" />

        <Search iconFilter={<FilterListIcon />} iconSearch={<SearchIcon />} />

        <button type="button" onClick={handleOpenNewCard}>
          Adicionar card
        </button>

        <NewCardModal
          isOpen={isNewCardModalOpen}
          onRequestClose={handleCloseNewCard}
          onAddCard={handleAddCard}
        />

        <ContainerKaban cards={cards} />
      </S.Main>
    </>
  );
}
