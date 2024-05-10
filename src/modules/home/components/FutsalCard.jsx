import { useNavigate } from "react-router-dom";

const FutsalCard = ({ futsalObj, clickEvent }) => {
  let { name, location, price } = futsalObj;
  const navigate = useNavigate();

  const handleCardClick =()=>{
   navigate(`futsals/${name.toLowerCase()}`, {state: {futDetail: futsalObj}});
  }
 
  return (
    <div className="futsal-card" onClick={handleCardClick}>
      <h3>{name}</h3>
      <p>{location}</p>
      <p>Rs. {price} per hour</p>
    </div>
  );
};

export default FutsalCard;
