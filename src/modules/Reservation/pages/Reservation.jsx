import React, { useEffect, useState } from 'react';
import GlobalLayout from '@/layouts/global/GlobalLayout';
import Header from '@/components/Header/Header';
import { useSelector } from 'react-redux';
import { getSelectedFutsal } from '@/store/features/Futsal/futsalSelectors';
import InputElement from '@/components/FormElements/InputElement';
import ButtonElement from "@/components/FormElements/ButtonElement";
import AlertCard  from '@/components/Cards/AlertCard';

import BookingDetails from "@/modules/Reservation/components/BookingDetails";

import { RadioGroup, Radio } from '@nextui-org/react';
import { createReservation } from '../api';
import { useForm, Controller } from 'react-hook-form';
import { io } from 'socket.io-client';
import { useParams } from 'react-router-dom';

const Reservation = () => {

  const currentFutsal = useSelector(state => getSelectedFutsal(state));
  const { slotId } = useParams();

  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const handleEmailChange = (e) => {
    const value = e.target.value
    setEmail(value)
  }

  const handlePhoneNumber = (e) => {
    const value = e.target.value
    setPhoneNumber(value)
  }

  const clearFields = () => {
    setEmail('');
    setPhoneNumber('');
  }

  const handleSubmit = async () => {
    const userId = currentFutsal.userId;
    try {
      setIsLoading(true);
      const response = await createReservation({slotId, userId});
      if (response == 200 || response == 201) {
       setAlertMessage("data saved");
        const socket = io();
        socket.emit("new-reservation");
        clearFields();
      }
    } catch (error) {
      console.error(error)
      clearFields();
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <GlobalLayout isLoading={isLoading}>
      <p className='text-xl font-semibold mt-[8%] mb-3'>Enter the details below:</p>
      {currentFutsal.name ? <div className='w-full flex gap-8 items-start'>
        <div className='lg:min-w-[45%] flex flex-col gap-3'>
          <InputElement placeholder="Enter your email" type="email" onChange={handleEmailChange} />
          <InputElement placeholder="Enter phone number" onChange={handlePhoneNumber} />
          <RadioGroup label="Choose payment method" orientation='horizontal'>
            <Radio value="ES">Esewa</Radio>
            <Radio value="KH">Khalti</Radio>
            <Radio value="FP">PhonePay</Radio>
          </RadioGroup>
          <ButtonElement customStyle="max-w-fit px-10 bg-primary text-white" buttonLabel="Submit" labelStyle="font-semibold" onClick={ handleSubmit} />
        </div>

        <BookingDetails name={currentFutsal.name} address={currentFutsal.address} contact={currentFutsal.contact} date={new Date()} />
      </div> : "Loading"} {/* Display userId or Loading */}
        <AlertCard cardText={alertMessage}/>
    </GlobalLayout>
  );
};

export default Reservation;
