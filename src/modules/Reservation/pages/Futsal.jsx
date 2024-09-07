import { Card, CardBody, Image, Skeleton } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import GlobalLayout from "@/layouts/global/GlobalLayout";
import NavigationBar from "@/components/Navbar/Navbar";

import { getVenueById } from "@/modules/Reservation/api";
import { getShortMonthName } from "@/helpers/dateHelper";
import { useSelector } from "react-redux";
import { getSelectedFutsal } from "../../../store/features/Futsal/futsalSelectors";


const Futsal = () => {
    const { id } = useParams();
    const [currentFutsal, setCurrentFutsal] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [priceList, setPriceList] = useState([]);
    const [reservationDate, setReservationDate] = useState(new Date());



    const futsal = useSelector(state => getSelectedFutsal(state));
    const navigate = useNavigate();

    const handleBookingNavigation = (id) => {
        const path = `/reservation/${id}`;
        navigate(path);
    };

    const handleCurrentFutsal = () => {
        setIsLoading(true);
        try {
            if (futsal) {
                setCurrentFutsal(futsal)
                setIsLoading(false);
            }
        } catch (error) {
            setIsLoading(false);
            throw error;
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        handleCurrentFutsal()
    }, [id]);

    const LoadingStateComponent = () => (
        <div className="w-full flex gap-8 border-2 p-2 rounded-xl">
            <Skeleton className="w-[25rem] max-w-[30rem] h-[20rem]" />
            <div className="max-w-[50%] flex flex-col gap-4">
                <Skeleton className="w-[10rem] h-[2rem]" />
                <Skeleton className="w-[15rem] h-[2rem]" />
                <Skeleton className="min-w-[60rem] h-[5rem]" />
                <Skeleton className="w-[15rem] h-[2rem]" />
                <Skeleton className="w-[15rem] h-[2rem]" />
            </div>
        </div>
    );

    const FutsalContent = () => (
        <div className="w-full flex gap-8 border-2 p-2 rounded-xl">
            <Image src={currentFutsal.imageUrl} width="w-[25rem] max-w-[30rem] h-auto" loading={"lazy"} alt="Futsal Image" />
            <div className="max-w-[50%] flex flex-col gap-4">
                <p className="text-2xl font-semibold capitalize">{currentFutsal.name}</p>
                <div className="flex items-center gap-2">
                    <FontAwesomeIcon icon="fa-solid fa-location-dot" className="text-orange-500" />
                    <p>{"Location"}</p>
                    <p className="futsal_location_map">show in map..</p>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit...</p>
                <div className="flex items-center gap-2">
                    <FontAwesomeIcon icon="fa-solid fa-clock" className="text-teal-500" />
                    <p className="font-semibold">Open:</p>
                    <p>9:00 AM - 10:00 PM</p>
                </div>
                <div className="flex items-center gap-2">
                    <FontAwesomeIcon icon="fa-solid fa-dollar-sign" className="text-green-500" />
                    <p className="font-semibold">Price:</p>
                    <p>NPR. 1200 per hour</p>
                </div>
            </div>
        </div>
    );

    return (
        <>
            <NavigationBar />
            <GlobalLayout>
                {isLoading ? <LoadingStateComponent /> : <FutsalContent />}
                <div className="w-full flex flex-col mt-4">
                    <div className="w-full flex justify-between">
                        <p className="text-xl font-semibold">Schedule</p>
                        <div>
                            {`${getShortMonthName(reservationDate.getMonth())} ${reservationDate.getDate()}, ${reservationDate.getFullYear()}`}
                        </div>
                    </div>
                    <div className="w-full flex gap-6 flex-wrap items-center py-2 px-1">
                        {currentFutsal.priceList && JSON.parse(currentFutsal.priceList).map((priceItem, index) => (
                            <Card key={index} style={{ cursor: "pointer" }}>
                                <CardBody onClick={() => handleBookingNavigation(priceItem.id)}>
                                    {`${priceItem.startingTime} - ${priceItem.endingTime}`}
                                </CardBody>
                            </Card>
                        ))}
                    </div>
                </div>
            </GlobalLayout>
        </>
    );
};

export default Futsal;
