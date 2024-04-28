"use client";

import Container from '@/components/global/Container';
import CheckLocation from '@/components/pages/CheckLocation';
import React from 'react';

const CheckLocationPage: React.FC = () => {

  return (
    <div className='text-center'>
      <Container>
        <h1 className='py-4 text-5xl'>Check Location Page</h1>
        <CheckLocation />
      </Container>
    </div>
  );
};

export default CheckLocationPage;
