import { useNavigate } from "react-router-dom";
import BasicCard from "@/components/Cards/BasicCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Image } from "@nextui-org/react";

const FutsalCard = ({ futsalObj }) => {
  let { name, location, id } = futsalObj;
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`futsals/${id}`);
  }

  return (
    <BasicCard>
      <div onClick={handleCardClick} className="flex flex-col gap-2">
        <Image src="https://images.unsplash.com/photo-1587384474964-3a06ce1ce699?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <h3 className="text-xl font-semibold">{name}</h3>
        {/* <div className={`flex items-center gap-2 font-medium ${isOpen ? "text-green-800" : "text-red-800"}`}>
          <span className={`block w-3 h-3 rounded-[50%] ${isOpen ? "bg-green-600" : "bg-red-600  "}`}></span>
          {isOpen ? "Open" : "Closed"}
        </div> */}
        <p className="text-sm text-gray-600 font-medium flex items-center gap-2">
          <FontAwesomeIcon icon="fa-solid fa-location-dot" />
          {location}
        </p>
        {/* <p className="text-sm text-gray-600 font-medium flex items-center gap-2">
          <FontAwesomeIcon icon="fa-solid fa-money-check-dollar" />
          {`NPR ${price}`}
        </p> */}
      </div>
    </BasicCard>
  );
};

export default FutsalCard;
