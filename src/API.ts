export type Card = {
  code: string;
  image: string;
  value: string;
  suit: string;
};

export type CardState = Card & { remaining: string };

export const fetchCard = async (deckID: string): Promise<CardState> => {
  const endpoint = `https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=1`;
  const data = await (await fetch(endpoint)).json();

  return data.cards.map((card: Card) => ({
    card,
    remaining: data.remaining,
  }))[0];
};

export const fetchDeckID = async () => {
  const endpoint = `https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`;
  const data = await (await fetch(endpoint)).json();

  return data;
};
