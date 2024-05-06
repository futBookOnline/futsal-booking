import GlobalLayout from "@/layouts/global/GlobalLayout";
import Header from "@/modules/home/components/Header";
// import Card from "@/components/Cards/Card";
import FutsalCard from "@/modules/home/components/FutsalCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const futsals = [
  {
    name: "Wembley Futsal",
    isAvailable: true,
    location: "Kaushaltar, Bhaktapur",
    price: "1000",
  },
  {
    name: "Royal Futsal",
    isAvailable: true,
    location: "Baneswor, Kathmandu",
    price: "1000",
  },
  {
    name: "Dhanwantari Arena",
    isAvailable: true,
    location: "Kupandole, Lalitpur",
    price: "1000",
  },
  {
    name: "Velocity Arena",
    isAvailable: true,
    location: "Ratopul, Kathmandu",
    price: "1000",
  },
  {
    name: "GA Hall",
    isAvailable: true,
    location: "Thamel, Kathmandu",
    price: "1000",
  },
];

const Home = () => {
  return (
    <GlobalLayout>
      {/**Header navigation pane*/}
      <Header />
      {/**nearby fusals*/}
      <div className="nearby-container">
        <div className="nearby-container-header">
          <p className="nearby-futsals">Nearby Futsals</p>
          <div className="pagination-container">
            <FontAwesomeIcon icon="fa-solid fa-circle-left" />
            <FontAwesomeIcon icon="fa-solid fa-circle-right" />
          </div>
        </div>
        <div className="cards-container">
          {futsals.map((item) => (
            <FutsalCard key={item} futsalObj={item} />
          ))}
        </div>
      </div>
      {/*Other futsals*/}
      <div className="all-container">
        <div className="all-container-header">
          <p className="all-futsals">All Futsals</p>
          <div className="pagination-container">
            <FontAwesomeIcon icon="fa-solid fa-circle-left" />
            <FontAwesomeIcon icon="fa-solid fa-circle-right" />
          </div>
        </div>
        <div className="cards-container">
          {futsals.map((item) => (
            <FutsalCard key={item} futsalObj={item} />
          ))}
        </div>
      </div>
    </GlobalLayout>
  );
};

export default Home;
