import { ReactNode, useContext, createContext, useState } from 'react'
import { api } from '../services/api'

interface ICard {
  title: string
  description: string
  type: string
}

interface ICardProvider {
  children: ReactNode
}

type ICardInput = Omit<ICard, 'id' | 'createdAt'>

interface CardContextData {
  cards: ICard[]
  createCard: (card: ICardInput) => Promise<void>
}

const CardContext = createContext<CardContextData>({} as CardContextData)

export function CardsProvider({ children }: ICardProvider) {
  const [cards, setCards] = useState<ICard[]>([])

  async function createCard(cardInput: ICardInput) {
    const response = await api.post('/cards', {
      ...cardInput,
      createdAt: new Date()
    })
    const { card } = response.data

    setCards([...cards, card])
  }

  return (
    <CardContext.Provider
      value={{
        cards,
        createCard
      }}
    >
      {children}
    </CardContext.Provider>
  )
}

export function useCard() {
  const context = useContext(CardContext)

  return context
}
