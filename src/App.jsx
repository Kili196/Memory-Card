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
    { id: 9, icon: "👻" },
    { id: 10, icon: "🧝‍♂️" },
    { id: 11, icon: "🦸‍♀️" },
    { id: 12, icon: "🧚‍♀️" },
    { id: 13, icon: "🕵️‍♂️" },
    { id: 14, icon: "🦹‍♂️" },
    { id: 15, icon: "🧟‍♂️" },
  ];

  const [clickedCardIds, setClickedCardIds] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  function generateRandomIdx() {
    const randomIdx = Math.floor(Math.random() * (cardOptions.length - 0)) + 0;
    return randomIdx;
  }

  function isIdClicked(id) {
    return clickedCardIds.find((element) => element === id);
  }

  function checkHighScore() {
    if (currentScore >= highScore) {
      setHighScore(currentScore + 1);
    }
  }

  function handleCardClick(id) {
    if (!isIdClicked(id)) {
      setClickedCardIds([...clickedCardIds, id]);
      setCurrentScore((prev) => prev + 1);
      checkHighScore();
    } else {
      setClickedCardIds([]);
      setCurrentScore(0);
    }
  }

  function generateCards(cardNumber) {
    let renderedCards = [];
    for (let i = 0; i < cardNumber; i++) {
      const randomIdx = generateRandomIdx();
      renderedCards.push(
        <Card
          icon={cardOptions[randomIdx].icon}
          id={cardOptions[randomIdx].id}
          handleCardClick={handleCardClick}
          key={i}
        />
      );
    }
    return renderedCards;
  }

  return (
    <div className="memory-game__container">
      <ScoreBoard currentscore={currentScore} highscore={highScore} />
      <div className="memory-game__card-container">{generateCards(20)}</div>
    </div>
  );
}

export default App;
