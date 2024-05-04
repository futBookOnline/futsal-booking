const FutsalCard = ({ futsalObj }) => {
  let { name, location, price } = futsalObj;
  return (
    <div className="futsal-card">
      <h3>{name}</h3>
      <p>{location}</p>
      <p>Rs. {price} per hour</p>
    </div>
  );
};

export default FutsalCard;
