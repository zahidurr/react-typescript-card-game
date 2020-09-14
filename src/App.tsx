import React, { useState } from 'react';
import { fetchCards } from './API';
// Components
import DeckCard from './components/Card';
// types
import { CardState } from './API';

export type AnswerObject = {
  card: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const TOTAL_CRADS = 10;

const App: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [cards, setQuestions] = useState<CardState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);
    const newQuestions = await fetchCards(
      TOTAL_CRADS
    );
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };

  const checkAnswer = (e: any) => {
    if (!gameOver) {
      // User's answer
      const answer = e.currentTarget.value;
      // Check answer against correct answer
      const correct = cards[number].correct_answer === answer;
      // Add score if answer is correct
      if (correct) setScore((prev) => prev + 1);
      // Save the answer in the array for user answers
      const answerObject = {
        card: cards[number].card,
        answer,
        correct,
        correctAnswer: cards[number].correct_answer,
      };
      setUserAnswers((prev) => [...prev, answerObject]);
    }
  };

  const nextQuestion = () => {
    // Move on to the next card if not the last card
    const nextC = number + 1;

    if (nextC === TOTAL_CRADS) {
      setGameOver(true);
    } else {
      setNumber(nextC);
    }
  };

  return (
    <>
        <h1>Yepstr Card Game</h1>
        {gameOver || userAnswers.length === TOTAL_CRADS ? (
          <button className='start' onClick={startTrivia}>
            Start
          </button>
        ) : null}
        {!gameOver ? <p className='score'>Score: {score}</p> : null}
        {loading ? <p>Loading cards...</p> : null}
        {!loading && !gameOver && (
          <DeckCard
            cardNr={number + 1}
            totalCards={TOTAL_CRADS}
            card={cards[0].card}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={checkAnswer}
          />
        )}
        {!gameOver && !loading && userAnswers.length === number + 1 && number !== TOTAL_CRADS - 1 ? (
          <button className='next' onClick={nextQuestion}>
            Next Card
          </button>
        ) : null}
    </>
  );
};

export default App;
