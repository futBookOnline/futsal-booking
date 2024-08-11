import Separator from "@/components/Separator/Separator";

const BookingDetails = (props) => {

  const { name, address, contact } = props

  return (
    <div className="booking_details_wrapper">
      <p>Booking Details</p>
      <Separator />
      <div className="booking_info_container">
        <div>
          <p>Futsal:</p>
          <p>{name}</p>
        </div>
        <div>
          <p>Address:</p>
          <p>{address.street + ", " + address.district} </p>
        </div>
        <div>
          <p>Contact:</p>
          <p>{contact}</p>
        </div>
      </div>
    </div>
  );
};

export default BookingDetails;
