import Modal from 'react-modal'
import CloseIcon from '@mui/icons-material/Close'
import { FormEvent, useState } from 'react'
import * as S from './styles'
import { useCard } from '../../hook/useCard'

interface INewCardModal {
  isOpen: boolean
  onRequestClose: () => void
}

export function NewCardModal({ isOpen, onRequestClose }: INewCardModal) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [type, setType] = useState('todo')

  const { createCard } = useCard()

  async function handleCreateNewCard(event: FormEvent) {
    event.preventDefault()

    await createCard({
      title,
      description,
      type
    })

    setTitle('')
    setDescription('')
    setType('todo')
    onRequestClose()
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

        <S.ContainerRadioButton>
          <S.RadioBox
            type="button"
            onClick={() => {
              setType('todo')
            }}
            isActive={type === 'todo'}
            activeColor="red"
          >
            <span>A fazer</span>
          </S.RadioBox>
          <S.RadioBox
            type="button"
            onClick={() => {
              setType('doing')
            }}
            isActive={type === 'doing'}
            activeColor="yellow"
          >
            <span>Fazendo</span>
          </S.RadioBox>
          <S.RadioBox
            type="button"
            onClick={() => {
              setType('done')
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
  )
}
