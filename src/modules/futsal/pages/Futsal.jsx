import GlobalLayout from "@/layouts/global/GlobalLayout";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getShortMonthName } from "@/helpers/dateHelper";
import NavigationBar from "@/components/Navbar/Navbar";
import { Image, Skeleton } from "@nextui-org/react";
import ButtonElement from "@/components/FormElements/ButtonElement";
import getCurrentFutsal from "@/modules/futsal/api/getCurrentFutsal";
import { useEffect, useState } from "react";

const Futsal = () => {
  {
    /*getting current futsal details from route*/
  }

  const date = new Date();
  const { id } = useParams();



  const [currentFutsal, setCurrentFutsal] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const result = await getCurrentFutsal(id);
    if (result) setIsLoading(false);
    setCurrentFutsal(result)
  };

  useEffect(() => {
    fetchData();
  }, [])


  //component to show when data is Loading
  const LoadingStateComponent = () => {
    return (
      <div className="w-full flex gap-8 border-2 p-2 rounded-xl">
        {/* skeleten for image */}
        <Skeleton className="w-[25rem] max-w-[30rem] h-[20rem]" />
        {/* skeleton for content */}
        <div className="max-w-[50%] flex flex-col gap-4">
          <Skeleton className="w-[10rem] h-[2rem]" />
          {/*location */}
          <Skeleton className="w-[15rem] h-[2rem]" />
          {/* description */}
          <Skeleton className="min-w-[60rem] h-[5rem]" />
          {/* Opening and closing time */}
          <Skeleton className="w-[15rem] h-[2rem]" />
          {/* price range */}
          <Skeleton className="w-[15rem] h-[2rem]" />
        </div>
      </div>
    )
  }

  //component to show when data has finished Loading
  const FutsalContent = () => {
    return <div className="w-full flex gap-8 border-2 p-2 rounded-xl">
      <Image src={currentFutsal.imageUrl} width="w-[25rem] max-w-[30rem] h-auto" loading={"eager"} />
      <div className="max-w-[50%] flex flex-col gap-4">
        <p className="text-2xl font-semibold">{currentFutsal.name}</p>
        {/*location */}
        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon="fa-solid fa-location-dot" className="text-orange-500" />
          <p>{"Location"}</p>
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
  }

  return (
    <>
      <NavigationBar />
      <GlobalLayout>

         {/* show skeleton loading element or content based on loading state */}
        {
          isLoading ? <LoadingStateComponent /> : <FutsalContent />

        }

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
      </GlobalLayout >
    </>
  );
};

export default Futsal;
