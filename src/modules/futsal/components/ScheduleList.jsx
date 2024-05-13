import BasicCard from "@/components/Cards/BasicCard";
import { useNavigate } from "react-router-dom";

const ScheduleList = ({ futsalDetail }) => {
  const navigate = useNavigate();

  const handleCardClick = (futsalDetail) => {
    navigate("/booking/" + futsalDetail?.name, { state: futsalDetail });
  };

  const getSchedule = () => {
    const openingTime = 6;
    const closingTime = 18;
    const list = [];
    let currentHour = openingTime;

    while (
      currentHour != 0 &&
      currentHour != 0 &&
      currentHour <= closingTime - 1
    ) {
      if (currentHour == 12) {
        list.push(`12:00 PM - 1:00 PM`);
      } else if (currentHour < 12) {
        list.push(`${currentHour}:00 AM - ${currentHour + 1}:00 AM`);
      } else {
        list.push(`${currentHour - 12}:00 PM - ${currentHour + 1 - 12}:00 PM`);
      }

      currentHour += 1;
    }
    return list;
  };

  return (
    <div className="schedule_list">
      {getSchedule().map((item, id) => {
        return (
          <BasicCard
            key={id}
            cardText={item}
            clickEvent={() => handleCardClick(futsalDetail)}
          />
        );
      })}
    </div>
  );
};

export default ScheduleList;
