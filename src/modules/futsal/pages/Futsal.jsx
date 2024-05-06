import GlobalLayout from "@/layouts/Global/GlobalLayout";
import Header from "@/modules/home/components/Header";
import Button from "@/components/FormElements/Button";
import { useLocation } from "react-router-dom";

const Futsal = () => {
  {/*getting current futsal details from route*/}
  const currentFutsal = useLocation()?.state?.futDetail;

  return (
    <GlobalLayout>
      <Header />
      <div className="futsal-content-wrapper">
        <div className="info-section">
          {/*futsal name and book button*/}
          <div className="futsal-info-header">
            <p className="current-futsal-name">{currentFutsal.name}</p>
            <Button text="Book Now" />
          </div>
          {/**Image and other details */}
          <div className="futsal-details">
            <img src="/src/assets/futsal.jpg" alt="" />
            <div className="text-details-section">
              <p className="futsal-name">{currentFutsal.name}</p>
              <p className="futsal-location">{currentFutsal.location}</p>
              <p className="futsal-price">{currentFutsal.price}</p>
            </div>
          </div>

        </div>
        <div className="schedule-section"></div>
      </div>
    </GlobalLayout>
  );
};

export default Futsal;
