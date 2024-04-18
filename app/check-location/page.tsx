"use client";

import Container from '@/components/global/Container';
import CheckLocation from '@/components/pages/CheckLocation';
import React, { useEffect } from 'react';
import { getUserLocation } from '../api/userLocation';

const CheckLocationPage: React.FC = () => {

  useEffect(() => {
    const checkUserLocation = async () => {
      try {
        const userLocation = await getUserLocation();
        console.log('User Location:', userLocation);
        // Now you can use the userLocation object for further processing
      } catch (error) {
        console.error('Error getting user location:', error);
      }
    };

    checkUserLocation();
  }, []);

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
