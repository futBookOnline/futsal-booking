import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Image } from "@nextui-org/react";
import { useDispatch } from "react-redux";

import BasicCard from "@/components/Cards/BasicCard";
import { setSelectedFutsal } from "@/store/features/Futsal/futsal";

const FutsalCard = (props) => {
    let { name, address, id } = props;
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleCardClick = () => {
        navigate(`futsal/${id}`);
        dispatch(setSelectedFutsal(props))
    }

    return (
        <BasicCard>
            <div onClick={handleCardClick} className="flex flex-col gap-2">
                <Image src="https://images.unsplash.com/photo-1587384474964-3a06ce1ce699?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                <h3 className="text-xl font-semibold">{name}</h3>
                <p className="text-sm text-gray-600 font-medium flex items-center gap-2">
                    <FontAwesomeIcon icon="fa-solid fa-location-dot" />
                    {address.street}, {address.district}
                </p>
            </div>
        </BasicCard>
    );
};

export default FutsalCard;
