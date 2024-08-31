import React, { useEffect } from 'react';
import GlobalLayout from '@/layouts/global/GlobalLayout';
import Header from '@/components/Header/Header';
import { useSelector } from 'react-redux';
import { getSelectedFutsal } from '@/store/features/Futsal/futsalSelectors';
import InputElement from '../../../components/FormElements/InputElement';

const Reservation = () => {

  const currentFutsal = useSelector(state => getSelectedFutsal(state));

  const FormWrapper = <div className='flex gap-2'>
    <InputElement />
  </div>

  return (
    <GlobalLayout>
      <Header />
      {currentFutsal.name ? <FormWrapper /> : "Loading"} {/* Display userId or Loading */}
    </GlobalLayout>
  );
};

export default Reservation;
