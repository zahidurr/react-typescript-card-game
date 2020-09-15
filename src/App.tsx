import React, { useState, useEffect } from "react";
import { fetchDeckID, fetchCard, CardState } from "./API";

// Styles
import { Wrapper } from "./App.styles";

// Components
import Card from "./components/Card";

const App: React.FC = () => {
  const [remaining, setRemaining] = useState("0");
  const [loading, setLoading] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [card, setCard] = useState<CardState>();
  const [deckID, setDeckID] = useState("");

  const nextCard = async () => {
    const fc = await fetchCard(deckID);

    if (fc === undefined) {
      setGameOver(true);
    } else {
      // @ts-ignore
      setCard(fc.card);
      setRemaining(fc.remaining);
    }
  };

  const getDeckID = async () => {
    setLoading(true);
    const fd = await fetchDeckID();
    if (fd.success) {
      setDeckID(fd.deck_id);
      const fc = await fetchCard(fd.deck_id);
      // @ts-ignore
      setCard(fc.card);
      setRemaining(fc.remaining);
      setLoading(false);
    }
  };

  useEffect(() => {
    getDeckID();
  }, []);

  return (
    <Wrapper>
      <div className="header-content">
        <h1 className="title">Card Game</h1>
      </div>

      {gameOver ? <h1>Game Over</h1> : null}

      {loading ? <h1>Loading Card...</h1> : null}

      {!loading && !gameOver ? (
        <p className="info">Remaining: {remaining}</p>
      ) : null}

      {!loading && !gameOver && (
        <Card
          code={card?.code}
          image={card?.image}
          value={card?.value}
          suit={card?.suit}
        />
      )}

      {!gameOver ? (
        <button className="btn-next" onClick={nextCard}>
          Next Card
        </button>
      ) : null}
    </Wrapper>
  );
};

export default App;
