import { shuffleArray } from './utils';

export type Card = {
  category: string;
  correct_answer: string;
  difficulty: string;
  value: string;
  card: string;
  type: string;
};

export type CardState = Card & { answers: string[] };

export const fetchCards = async (amount: number): Promise<CardState[]> => {
  const endpoint = `https://deckofcardsapi.com/api/deck/tm2n50puykfz/draw/?count=${amount}`;
  const data = await (await fetch(endpoint)).json();

  if(data.success) {
    console.log(data.cards);
  }

  return data.cards.map((card: Card) => ({
    ...card,
    answers: card
  }))
};
