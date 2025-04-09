const Card = ({ icon, id, handleCardClick }) => {
  return (
    <>
      <div
        onClick={() => handleCardClick(id)}
        className="memory-game__card memory-game__card--content"
      >
        {icon}
      </div>
    </>
  );
};

export default Card;
