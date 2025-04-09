import Card from "./Card";

const CardGrid = ({ cardOptions, handleCardClick }) => {
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

  function generateRandomIdx() {
    const randomIdx = Math.floor(Math.random() * (cardOptions.length - 0)) + 0;
    return randomIdx;
  }

  return <div className="memory-game__card-container">{generateCards(20)}</div>;
};

export default CardGrid;
