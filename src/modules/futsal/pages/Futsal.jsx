import GlobalLayout from "@/layouts/global/GlobalLayout";
// import Header from "@/components/Header/Header";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import ScheduleList from "@/modules/futsal/components/ScheduleList";
// import BasicModal from "@/components/Modal/BasicModal";
// import Calendar from "@/components/Calendar/Calendar";
import { getShortMonthName } from "@/helpers/dateHelper";
// import Separator from "@/components/Separator/Separator";
import NavigationBar from "../../../components/Navbar/Navbar";
// import BasicCard from "../../../components/Cards/BasicCard";
import { Image } from "@nextui-org/react";
import ButtonElement from "@/components/FormElements/ButtonElement";

const Futsal = () => {
  {
    /*getting current futsal details from route*/
  }

  const date = new Date();
  const currentFutsal = useLocation().state?.futDetail;
  const currentDate =
    getShortMonthName(date.getMonth()) +
    " " +
    date.getDate() +
    ", " +
    date.getFullYear();

  const futsalName = currentFutsal.name;
  const bookingDetails = {
    futsalName: futsalName,
    bookingDate: currentDate,
  };

  return (
    <>
      <NavigationBar />
      <GlobalLayout>
        <div className="w-full flex gap-8 border-2 p-2 rounded-xl">
          <Image src={currentFutsal?.imageUrl} classNames={{
            wrapper: "w-[45%] max-w-1/2",
            img: "w-full"
          }} />
          <div className="max-w-[50%] flex flex-col gap-4">
            <p className="text-2xl font-semibold">{currentFutsal?.name}</p>
            {/*location */}
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon="fa-solid fa-location-dot" className="text-orange-500" />
              <p>{currentFutsal?.location}</p>
              <p className="futsal_location_map">show in map..</p>
            </div>
            {/* description */}
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab fuga aperiam inventore id, molestias ad. Quas ducimus odit eum corporis illo reiciendis vero quasi velit. Numquam officiis, magni exercitationem sit aut vel. Quasi velit nulla aspernatur dicta ipsum quam delectus illo esse quisquam vero perferendis odio, voluptate molestias adipisci debitis.</p>
            {/* Opening and closing time */}
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon="fa-solid fa-clock" className="text-teal-500" />
              <p className="font-semibold">Open:</p>
              <p className="">9:00 AM - 10:00 PM</p>
            </div>
            {/* price range */}
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon="fa-solid fa-dollar-sign" className="text-green-500" />
              <p className="font-semibold">Price:</p>
              <p className="">NPR. 1200 per hour</p>
            </div>
          </div>
        </div>

        {/* schedule list */}
        <div className="w-full flex flex-col mt-4">
          <p className="text-xl font-semibold">Available Slots</p>
          {/* {schedule container */}
          <div className="flex justify-between py-1">
            {/* morning schedule */}
            <div className="flex flex-col gap-4 border-2 rounded-lg px-6 py-2 w-[30%]">
              <p className="text-lg">Morning</p>
              <p className="flex items-center justify-between text-sm">
                9:00AM - 10:00 AM
                <ButtonElement customStyle="bg-orange-600" buttonLabel="NPR. 1200" labelStyle="text-white font-semibold" />
              </p>
              <p className="flex items-center justify-between text-sm">
                10:00AM - 11:00 AM
                <ButtonElement customStyle="bg-orange-600" buttonLabel="NPR. 1200" labelStyle="text-white font-semibold" />
              </p>
              <p className="flex items-center justify-between text-sm">
                11:00AM - 12:00 AM
                <ButtonElement customStyle="bg-orange-600" buttonLabel="NPR. 1200" labelStyle="text-white font-semibold" />
              </p>
            </div>
            {/* afternoon schedule */}
            <div className="flex flex-col gap-4 border-2 rounded-lg px-6 py-2 w-[30%]">
              <p className="text-lg">Afternoon</p>
              <p className="flex items-center justify-between text-sm">
                12:00AM - 01:00 PM
                <ButtonElement customStyle="bg-orange-600" buttonLabel="NPR. 1200" labelStyle="text-white font-semibold" />
              </p>
              <p className="flex items-center justify-between text-sm">
                01:00PM - 02:00 PM
                <ButtonElement customStyle="bg-orange-600" buttonLabel="NPR. 1200" labelStyle="text-white font-semibold" />
              </p>
              <p className="flex items-center justify-between text-sm">
                02:00 PM - 03:00 PM
                <ButtonElement customStyle="bg-orange-600" buttonLabel="NPR. 1200" labelStyle="text-white font-semibold" />
              </p>
            </div>
            {/* Evening schedule */}
            <div className="flex flex-col gap-4 border-2 rounded-lg px-6 py-2 w-[30%]">
              <p className="text-lg">Evening</p>
              <p className="flex items-center justify-between text-sm">
                05:00 PM - 06:00 PM
                <ButtonElement customStyle="bg-orange-600" buttonLabel="NPR. 1200" labelStyle="text-white font-semibold" />
              </p>
              <p className="flex items-center justify-between text-sm">
                06:00PM - 07:00 PM
                <ButtonElement customStyle="bg-orange-600" buttonLabel="NPR. 1200" labelStyle="text-white font-semibold" />
              </p>
              <p className="flex items-center justify-between text-sm">
                07:00 PM - 08:00 PM
                <ButtonElement customStyle="bg-orange-600" buttonLabel="NPR. 1200" labelStyle="text-white font-semibold" />
              </p>
            </div>
          </div>
        </div>


      </GlobalLayout>
    </>
  );
};

export default Futsal;
