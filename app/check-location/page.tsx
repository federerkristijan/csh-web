"use client";

import Container from '@/components/global/Container';
import CheckLocation from '@/components/pages/CheckLocation';
import React from 'react';

const CheckLocationPage: React.FC = () => {

  return (
    <div className='text-center'>
      <Container>
        <CheckLocation />
      </Container>
    </div>
  );
};

export default CheckLocationPage;
