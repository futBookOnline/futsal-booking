import GlobalLayout from "@/layouts/global/GlobalLayout";
import Header from "@/components/Header/Header";
import Navbar from "@/components/Navbar/Navbar";
import FutsalCard from "@/modules/home/components/FutsalCard";
import BasicCard from "../../../components/Cards/BasicCard";
import LoadMore from "../components/LoadMore";

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

const navigationList = [
  {
    label: "Home",
    route: "/"
  },
  {
    label: "Venues",
    route: ""
  },
  {
    label: "Events",
    route: ""
  },
  {
    label: "Login",
    route: "/auth/login"
  },
]

const Home = () => {
  return (
    <GlobalLayout>
      {/**Header navigation pane*/}
      {/* <Header /> */}
      <Navbar navList={navigationList} />
      {/**nearby fusals*/}
      <div className="flex flex-col mt-12">
        <div className="nearby-container-header px-2 mb-1">
          <p className="text-xl font-semibold mb-0">Nearby Futsals</p>
        </div>
        <div className="flex py-2 gap-6 px-2 items-center justify-between">
          {futsals.map((item) => (
            <FutsalCard key={item.name} futsalObj={item} />
          ))}
          <BasicCard cardText="More.." cardStyle="flex justify-center items-center w-fit" bodyStyle="flex items-center">
            <LoadMore />
          </BasicCard>
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
          <BasicCard>
            <LoadMore />
          </BasicCard>
        </div>
      </div>
      {/*Events*/}
      <div className="flex flex-col mt-12">
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
      </div>
    </GlobalLayout>
  );
};

export default Home;
