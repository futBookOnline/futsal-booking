import GlobalLayout from "@/layouts/global/GlobalLayout";
import Header from "@/components/Header/Header";
import InputElement from "@/components/FormElements/InputElement";
import ButtonElement from "@/components/FormElements/ButtonElement";
import CheckBoxElement from "@/components/FormElements/CheckboxElement";
import { useLocation } from "react-router-dom";
import BookingDetails from "@/modules/booking/components/BookingDetails";

const Booking = () => {
  const bookingDetails = useLocation().state;
  console.log(bookingDetails.futsalName)
  return (
    <GlobalLayout>
      <Header />
      <div className="booking_page_wrapper">
        {/**Futsal booking form */}
        <div className="booking_form_wrapper">
          <InputElement
            label="Full Name"
            labelPlacement="outside"
            placeholder="Enter your full name"
          />
          <InputElement
            label="Phone Number"
            placeholder="Enter your phone number"
            description="Country code is not required"
          />
          <InputElement
            label="Email"
            placeholder="Enter your email (optional)"
          />
          <p className="advance_payment_notice">
            This booking demands the payment of advance just for security
            purpose <span>Learn More...</span>{" "}
          </p>
          <CheckBoxElement optionText="I agree to terms and conditions" />
          <ButtonElement color="secondary" buttonLabel="Proceed" />
        </div>
        {/**futsal detail */}
        <div className="futsal_booking_detail_wrapper">
          <BookingDetails details={bookingDetails} />
        </div>
      </div>
    </GlobalLayout>
  );
};

export default Booking;
