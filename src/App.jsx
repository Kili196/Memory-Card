import { useState } from "react";

import ScoreBoard from "./components/ScoreBoard";
import Card from "./components/Card";

function App() {
  const cardOptions = [
    { id: 1, icon: "🧛‍♀️" },
    { id: 2, icon: "🧞" },
    { id: 3, icon: "👨‍🚀" },
    { id: 4, icon: "🐸" },
    { id: 5, icon: "🧌" },
    { id: 6, icon: "🧙‍♂️" },
    { id: 7, icon: "🦄" },
    { id: 8, icon: "🐉" },
  ];

  function generateRandomIdx() {
    const randomIdx = Math.floor(Math.random() * (cardOptions.length - 0)) + 0;
    return randomIdx;
  }

  function generateCards(cardNumber) {
    let renderedCards = [];
    for (let i = 0; i < cardNumber; i++) {
      const randomIdx = generateRandomIdx();
      renderedCards.push(
        <Card
          icon={cardOptions[randomIdx].icon}
          id={cardOptions[randomIdx].id}
        />
      );
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
