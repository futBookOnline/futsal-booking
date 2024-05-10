import GlobalLayout from "@/layouts/Global/GlobalLayout";
import Header from "@/modules/home/components/Header";
import Button from "@/components/FormElements/Button";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ScheduleList from "@/modules/futsal/components/ScheduleList";

const Futsal = () => {
  {
    /*getting current futsal details from route*/
  }
  const currentFutsal = useLocation()?.state?.futDetail;
  console.info(useLocation());

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
            <img
              src="/src/assets/futsal.jpg"
              loading="lazy"
              alt="Loading Image..."
            />
            <div className="text-details-section">
              <p className="futsal-name">{currentFutsal.name}</p>
              <div className="location-box">
                <FontAwesomeIcon icon="fa-solid fa-location-dot" />
                <p className="futsal-location">{currentFutsal.location}</p>
              </div>
              <div className="price-box">
                <FontAwesomeIcon icon="fa-solid fa-money-check-dollar" />
                <p className="futsal-price">
                  Rs. {currentFutsal.price} per Hour
                </p>
              </div>
            </div>
          </div>
        </div>
        {/**schedule section for futsal */}
        <div className="schedule_container">
          <div className="legend-section">
            <div>
              <span></span>
              <p>Available</p>
            </div>
            <div>
              <span></span>
              <p>Not available / booked</p>
            </div>
          </div>
          <div className="schedule-section">
            <ScheduleList />
          </div>
        </div>
      </div>
    </GlobalLayout>
  );
};

export default Futsal;
