import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import GlobalLayout from "@/layouts/global/GlobalLayout";
import NavigationBar from "@/components/Navbar/Navbar";
import FutsalCard from "@/modules/Reservation/components/FutsalCard";
import InputElement from "@/components/FormElements/InputElement.jsx"
import ButtonElement from "@/components/FormElements/ButtonElement.jsx"

import { getAllVenues } from "@/modules/Reservation/api";
import { setSelectedFutsal } from "@/store/features/Futsal/futsal";



const Home = () => {

  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [futsals, setFutsals] = useState([]);

  const handleFutsals = async () => {
    setLoading(true);
    try {
      const data = await getAllVenues();
      if (data) {
        setLoading(false);
        setFutsals(data);
      }
    } catch (error) {
      setError(true);
    }
    finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    handleFutsals();
  }, [])

  return (
    <>
      <NavigationBar />
      <GlobalLayout>
        {/**Header navigation pane*/}
        {/* <Header /> */}
        {/**search header bar */}
        <>
          <div className="w-full mt-6 flex items-center justify-between gap-4">
            <InputElement placement="inside" label="" placeholder="Search..." />
            <ButtonElement customStyle="bg-gray-400" isIconOnly={true} icon="fa-sold fa-magnifying-glass" />
          </div>
          {/**nearby fusals*/}
          <div className="flex flex-col mt-12">
            <div className="nearby-container-header px-2 mb-1">
              <p className="text-xl font-semibold mb-0">Nearby Futsals</p>
            </div>
            <div className="flex py-2 gap-6 px-2 items-center justify-between">
              {/* {futsals && futsals.map((item) => (
                <FutsalCard key={item.name} futsalObj={item} />
              ))} */}
              {/* <BasicCard cardText="More.." cardStyle="flex justify-center items-center w-fit" bodyStyle="flex items-center">
              <LoadMore />
            </BasicCard> */}

              {
                !loading && !error && futsals.length > 0

                  ? futsals.map((futsal) =>
                    <FutsalCard key={futsal._id} {...futsal} />
                  ) :
                  error ? "Error" :
                    "loading"
              }
            </div>
          </div>
        </>
      </GlobalLayout>
    </>
  );
};

export default Home;
