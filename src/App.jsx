import { useState } from "react";

import ScoreBoard from "./components/ScoreBoard";
import Card from "./components/Card";

function App() {
  const cardOptions = ["🧛‍♀️", "🧞", "👨‍🚀", "🐸", "🧌", "🧙‍♂️", "🦄", "🐉"];

  function generateRandomIdx() {
    const randomIdx = Math.floor(Math.random() * (cardOptions.length - 0)) + 0;
    return randomIdx;
  }

  function generateCards(cardNumber) {
    let renderedCards = [];
    for (let i = 0; i < cardNumber; i++) {
      const randomIdx = generateRandomIdx();
      renderedCards.push(<Card value={cardOptions[randomIdx]} />);
    }
    return renderedCards;
  }

  return (
    <div className="memory-game__container">
      <ScoreBoard />
      <div className="memory-game__card-container">{generateCards(16)}</div>
    </div>
  );
}

export default App;
