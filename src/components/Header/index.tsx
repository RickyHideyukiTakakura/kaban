import { FormEvent, useState } from 'react';
import * as S from './styles';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';

interface IHeader {
  image: string;
}

export function Header(props: IHeader) {
  const [title, setTitle] = useState('Meu Kaban');
  const [newTitle, setNewTitle] = useState('');
  const [isEditTitleOpen, setIsEditTitleOpen] = useState(false);

  function handleEditTitle(event: FormEvent) {
    event.preventDefault();

    setTitle(newTitle);
    setNewTitle('');

    handleCloseEditTitle();
  }

  function handleOpenEditTitle() {
    setIsEditTitleOpen(true);
  }

  function handleCloseEditTitle() {
    setIsEditTitleOpen(false);
  }

  return (
    <S.Header>
      <div>
        <h1>{title === '' ? 'Meu Kaban' : title}</h1>
        <form onSubmit={handleEditTitle}>
          {isEditTitleOpen && (
            <input
              type="text"
              value={newTitle}
              onChange={(event) => setNewTitle(event.target.value)}
            />
          )}
          <button type="button" onClick={handleOpenEditTitle}>
            <EditIcon />
          </button>
          {isEditTitleOpen && (
            <button type="button" onClick={handleCloseEditTitle}>
              <CloseIcon />
            </button>
          )}
          {isEditTitleOpen && (
            <button type="submit">
              <CheckIcon />
            </button>
          )}
        </form>
      </div>

      <img src={props.image} alt="" />
    </S.Header>
  );
}
