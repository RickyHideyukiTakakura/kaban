import { useState } from 'react';

interface ICard {
  title: string;
  description: string;
  tag: string;
  type: string;
}

export function useCards() {
  const [cards, setCards] = useState<ICard[]>([]);

  setCards((prevState) => [...prevState, cards]);
}
