const ScoreBoard = ({ highscore, currentscore }) => {
  return (
    <header className="memory-game__card  memory-game__score-board ">
      <label> Current Score: {currentscore}</label>
      <label> Best Score: {highscore}</label>
    </header>
  );
};

export default ScoreBoard;
