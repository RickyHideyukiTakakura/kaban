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

export function Main() {
  const [isNewCardModalOpen, setIsNewCardModalOpen] = useState(false);

  function handleOpenNewCard() {
    setIsNewCardModalOpen(true);
  }

  function handleCloseNewCard() {
    setIsNewCardModalOpen(false);
  }

  return (
    <>
      <S.Main>
        <Header
          title="Meu Kaban"
          image="https://github.com/rickyhideyukitakakura.png"
        />

        <Search iconFilter={<FilterListIcon />} iconSearch={<SearchIcon />} />

        <button type="button" onClick={handleOpenNewCard}>
          Adicionar card
        </button>

        <NewCardModal
          isOpen={isNewCardModalOpen}
          onRequestClose={handleCloseNewCard}
        />

        <ContainerKaban />
      </S.Main>
    </>
  );
}
