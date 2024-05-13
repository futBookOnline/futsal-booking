import Separator from "@/components/Separator/Separator";

const BookingDetails = (props) => {
  const { futsalName, bookingDate, bookingTime } = props.details;
  console.log(futsalName);

  return (
    <div className="booking_details_wrapper">
      <p>Booking Details</p>
      <Separator />
      <div className="booking_info_container">
        <div>
          <p>Futsal:</p>
          <p>{futsalName}</p>
        </div>
        <div>
          <p>Booking Date:</p>
          <p>{bookingDate}</p>
        </div>
        <div>
          <p>Booking Time:</p>
          <p>{bookingTime}</p>
        </div>
      </div>
    </div>
  );
};

export default BookingDetails;
