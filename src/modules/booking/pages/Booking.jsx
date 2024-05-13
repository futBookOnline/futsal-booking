import GlobalLayout from "@/layouts/global/GlobalLayout";
import Header from "@/components/Header/Header";
import Form from "@/components/FormElements/Form";
import InputElement from "@/components/FormElements/InputElement";
import ButtonElement from "@/components/FormElements/ButtonElement";

const Booking = () => {
  return (
    <GlobalLayout>
      <Header />
      <div className="booking_page_wrapper">
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
          <ButtonElement color="secondary" buttonLabel="Proceed" />
        </div>
      </div>
    </GlobalLayout>
  );
};

export default Booking;
