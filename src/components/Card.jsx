const Card = ({ value }) => {
  return (
    <>
      <div className="memory-game__card memory-game__card--content">
        {value}
      </div>
    </>
  );
};

export default Card;
