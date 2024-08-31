import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import GlobalLayout from '@/layouts/global/GlobalLayout';
import Header from '@/components/Header/Header';
import { useParams } from 'react-router-dom';

const Booking = () => {
  const { id } = useParams(); // id from URL
  const FormWrapper = <div className='flex gap-2'>

  </div>

  return (
    <GlobalLayout>
      <Header />
      {currentFutsal ? currentFutsal.userId : "Loading"} {/* Display userId or Loading */}
    </GlobalLayout>
  );
};

export default Booking;
