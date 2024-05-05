import { useNavigate } from "react-router-dom";

const FutsalCard = ({ futsalObj }) => {
  let { name, location, price } = futsalObj;
  const navigate = useNavigate();

  {
    /*function to handle the click of each card*/
  }
  const handleClick = (name) => {
    navigate(`/futsals/${name.toLowerCase()}`);
  };

  return (
    <div className="futsal-card" onClick={handleClick(name)}>
      <h3>{name}</h3>
      <p>{location}</p>
      <p>Rs. {price} per hour</p>
    </div>
  );
};

export default FutsalCard;
