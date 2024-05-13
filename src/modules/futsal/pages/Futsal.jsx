import GlobalLayout from "@/layouts/global/GlobalLayout";
import Header from "@/components/Header/Header";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ScheduleList from "@/modules/futsal/components/ScheduleList";
import BasicModal from "@/components/Modal/BasicModal";
import Calendar from "@/components/Calendar/Calendar";
import { getShortMonthName } from "@/helpers/dateHelper";
import Separator from "@/components/Separator/Separator";

const Futsal = () => {
  {
    /*getting current futsal details from route*/
  }

  const currentDate = new Date();
  const currentFutsal = useLocation().state?.futDetail;

  return (
    <GlobalLayout>
      <Header />
      <div className="futsal_content_wrapper">
        {/**futsal image and details */}
        <div className="futsal_info_wrapper">
          <p className="current_futsal_heading">{currentFutsal?.name}</p>
          <img src={currentFutsal?.imageUrl} alt="" />
          <div className="futsal_detail_section">
            <div className="futsal_detail_box">
              <FontAwesomeIcon icon="fa-solid fa-location-dot" />
              <p>{currentFutsal?.location}</p>
              <p className="futsal_location_map">show in map..</p>
            </div>
            <div className="futsal_detail_box">
              <FontAwesomeIcon icon="fa-solid fa-money-check-dollar" />
              <p>Rs. {currentFutsal?.price}</p>
            </div>
            <div className="futsal_detail_box">
              <FontAwesomeIcon icon="fa-solid fa-mobile" />
              <p>{currentFutsal?.phone}</p>
            </div>
          </div>
        </div>
        {/****Schedule list */}
        <div className="schedule_wrapper">
          <div className="schedule_availablitiy_indicators">
            <div className="available_indicator">
              <div></div>
              <p>Available</p>
            </div>
            <div className="unavailable_indicator">
              <div></div>
              <p>Unavailable</p>
            </div>
          </div>
          <div className="schedule_list_container">
            <div className="schedule_header_date">
              <p>
                {getShortMonthName(currentDate.getMonth()) +
                  " " +
                  currentDate.getDate() +
                  ", " +
                  currentDate.getFullYear()}
              </p>
              <BasicModal
                isButtonIconOnly={true}
                buttonIconClass="fa-solid fa-calendar"
                title="Pick a date"
              >
                <Calendar />
              </BasicModal>
            </div>
            <Separator styleClass="my-3" />
            <ScheduleList futsalDetail={currentFutsal}/>
          </div>
        </div>
      </div>
    </GlobalLayout>
  );
};

export default Futsal;
