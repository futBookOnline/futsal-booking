import GlobalLayout from "@/layouts/global/GlobalLayout";
import NavigationBar from "@/components/Navbar/Navbar";
import FutsalCard from "@/modules/home/components/FutsalCard";
import BasicCard from "../../../components/Cards/BasicCard";
import LoadMore from "../components/LoadMore";
import InputElement from "@/components/FormElements/InputElement.jsx"
import ButtonElement from "@/components/FormElements/ButtonElement.jsx"

const futsals = [
  {
    name: "Wembley Futsal",
    isOpen: true,
    location: "Kaushaltar, Bhaktapur",
    price: "1000",
    imageUrl: "/src/assets/futsal.jpg",
    phone: "9867541302",
  },
  {
    name: "Royal Futsal",
    isOpen: true,
    location: "Baneswor, Kathmandu",
    price: "1000",
    imageUrl: "/src/assets/futsal.jpg",
    phone: "9867541302",
  },
  {
    name: "Dhanwantari Arena",
    isOpen: false,
    location: "Kupandole, Lalitpur",
    price: "1000",
    imageUrl: "/src/assets/futsal.jpg",
    phone: "9867541302",
  },
  {
    name: "Velocity Arena",
    isOpen: true,
    location: "Ratopul, Kathmandu",
    price: "1000",
    imageUrl: "/src/assets/futsal.jpg",
    phone: "9867541302",
  },
  {
    name: "GA Hall",
    isOpen: false,
    location: "Thamel, Kathmandu",
    price: "1000",
    imageUrl: "/src/assets/futsal.jpg",
    phone: "9867541302",
  },
];



const Home = () => {
  return (
    <>
      <NavigationBar />
      <GlobalLayout>
        {/**Header navigation pane*/}
        {/* <Header /> */}


        {/**search header bar */}
        <div className="w-full mt-6 flex items-center justify-between gap-4">
          <InputElement placement="inside" label="" placeholder="Search..." />
          <ButtonElement customStyle="bg-gray-400" isIconOnly={true} icon="fa-sold fa-magnifying-glass"/>
        </div>

        {/**nearby fusals*/}


        <div className="flex flex-col mt-12">
          <div className="nearby-container-header px-2 mb-1">
            <p className="text-xl font-semibold mb-0">Nearby Futsals</p>
          </div>
          <div className="flex py-2 gap-6 px-2 items-center justify-between">
            {futsals.map((item) => (
              <FutsalCard key={item.name} futsalObj={item} />
            ))}
            {/* <BasicCard cardText="More.." cardStyle="flex justify-center items-center w-fit" bodyStyle="flex items-center">
              <LoadMore />
            </BasicCard> */}
          </div>

        </div>
        {/*Other futsals*/}
        <div className="flex flex-col mt-12">
          <div className="nearby-container-header px-2 mb-1">
            <p className="text-xl font-semibold mb-0">All Futsals</p>
          </div>
          <div className="flex py-2 gap-6 px-2 items-center justify-between">
            {futsals.map((item) => (
              <FutsalCard key={item.name} futsalObj={item} />
            ))}
            {/* <BasicCard>
              <LoadMore />
            </BasicCard> */}
          </div>
        </div>
        {/*Events*/}
        {/* <div className="flex flex-col mt-12">
          <div className="nearby-container-header px-2 mb-1">
            <p className="text-xl font-semibold mb-0">Events</p>
          </div>
          <div className="flex py-2 gap-6 px-2 items-center justify-between">
            {futsals.map((item) => (
              <FutsalCard key={item.name} futsalObj={item} />
            ))}
            <BasicCard>
              <LoadMore />
            </BasicCard>
          </div>
        </div> */}
      </GlobalLayout>
    </>
  );
};

export default Home;
