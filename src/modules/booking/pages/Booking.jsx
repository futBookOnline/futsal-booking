import React from 'react';
import { useSelector } from 'react-redux';
import GlobalLayout from '@/layouts/global/GlobalLayout';
import Header from '@/components/Header/Header';
import InputElement from '@/components/FormElements/InputElement';
import ButtonElement from '@/components/FormElements/ButtonElement';
import CheckBoxElement from '@/components/FormElements/CheckboxElement';
import { getSelectedFutsal } from '../../../store/features/Futsal/futsal';
import BookingDetails from '../components/BookingDetails';

const Booking = () => {
  const selectedFutsal = useSelector(getSelectedFutsal);

  return (
    <GlobalLayout>
      <Header />

      <div className="booking_page_wrapper">
        {/* Futsal booking form */}
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
            purpose <span>Learn More...</span>
          </p>
          <CheckBoxElement optionText="I agree to terms and conditions" />
          <ButtonElement color="secondary" buttonLabel="Proceed" />
        </div>
        {/* Futsal detail */}
        <div className="futsal_booking_detail_wrapper">
          <BookingDetails {...selectedFutsal}/>
        </div>
      </div>
    </GlobalLayout>
  );
};

export default Booking;
