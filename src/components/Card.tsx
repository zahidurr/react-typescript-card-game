import React from 'react';
// Types
import { AnswerObject } from '../App';
import { ButtonWrapper } from './Card.styles';

type Props = {
  card: string;
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  cardNr: number;
  totalCards: number;
};

const DeckCard: React.FC<Props> = ({
  card,
  callback,
  userAnswer,
  cardNr,
  totalCards,
}) => (
  
  <>
    <p className='number'>
      Card: {cardNr} / {totalCards}
    </p>
    <p dangerouslySetInnerHTML={{ __html: card }} />
    <div>
      {card.image}
    </div>
  </>
);

export default DeckCard;
