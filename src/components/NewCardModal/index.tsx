import Modal from 'react-modal';
import CloseIcon from '@mui/icons-material/Close';
import { FormEvent, useState } from 'react';
import * as S from './styles';

interface INewCardModal {
  isOpen: boolean;
  onRequestClose: () => void;
  onAddCard: (newCard: ICard) => void;
}

interface ICard {
  title: string;
  description: string;
  tag: string;
  type: string;
}

export function NewCardModal({
  isOpen,
  onRequestClose,
  onAddCard
}: INewCardModal) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tag, setTag] = useState('');
  const [type, setType] = useState('todo');

  function handleCreateNewCard(event: FormEvent) {
    event.preventDefault();

    const newCard = {
      title,
      description,
      tag,
      type
    };

    setTitle('');
    setDescription('');
    setTag('');
    setType('todo');
    onRequestClose();

    onAddCard(newCard);
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <CloseIcon />
      </button>

      <S.Form onSubmit={handleCreateNewCard}>
        <h2>Novo Cartão</h2>

        <input
          placeholder="Título"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <input
          placeholder="Descrição"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />

        <input
          placeholder="Tags"
          value={tag}
          onChange={(event) => setTag(event.target.value)}
        />

        <S.ContainerRadioButton>
          <S.RadioBox
            type="button"
            onClick={() => {
              setType('todo');
            }}
            isActive={type === 'todo'}
            activeColor="red"
          >
            <span>A fazer</span>
          </S.RadioBox>
          <S.RadioBox
            type="button"
            onClick={() => {
              setType('doing');
            }}
            isActive={type === 'doing'}
            activeColor="yellow"
          >
            <span>Fazendo</span>
          </S.RadioBox>
          <S.RadioBox
            type="button"
            onClick={() => {
              setType('done');
            }}
            isActive={type === 'done'}
            activeColor="green"
          >
            <span>Concluído</span>
          </S.RadioBox>
        </S.ContainerRadioButton>

        <button type="submit">Adicionar</button>
      </S.Form>
    </Modal>
  );
}
