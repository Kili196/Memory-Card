import { useState } from "react";

import ScoreBoard from "./components/ScoreBoard";

import CardGrid from "./components/CardGrid";

function App() {
  const [clickedCardIds, setClickedCardIds] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

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

  return (
    <div className="memory-game__container">
      <ScoreBoard currentscore={currentScore} highscore={highScore} />
      <CardGrid cardOptions={cardOptions} handleCardClick={handleCardClick} />
    </div>
  );
}

export default App;
