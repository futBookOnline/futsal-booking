import { useNavigate } from "react-router-dom";
import BasicCard from "@/components/Cards/BasicCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FutsalCard = ({ futsalObj, clickEvent }) => {
  let { name, isOpen, location, price } = futsalObj;
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`futsals/${name.toLowerCase()}`, { state: { futDetail: futsalObj } });
  }

  return (
    <BasicCard bodyStyle="px-8 py-4">
      <div onClick={handleCardClick} className="flex flex-col gap-2">
        <h3 className="text-xl font-semibold">{name}</h3>
        <div className={`flex items-center gap-2 font-medium ${isOpen? "text-green-800":"text-red-800"}`}>
          <span className={`block w-3 h-3 rounded-[50%] ${isOpen ? "bg-green-600" : "bg-red-600  "}`}></span>
          {isOpen ? "Open" : "Closed"}
        </div>
        <p className="text-sm text-gray-600 font-medium flex items-center gap-2">
          <FontAwesomeIcon icon="fa-solid fa-location-dot" />
          {location}
        </p>
        <p className="text-sm text-gray-600 font-medium flex items-center gap-2">
          <FontAwesomeIcon icon="fa-solid fa-money-check-dollar" />
          {`NPR ${price}`}
        </p>
      </div>
    </BasicCard>
  );
};

export default FutsalCard;
