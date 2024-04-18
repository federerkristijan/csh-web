import Container from '@/components/global/Container';
import CheckLocation from '@/components/pages/CheckLocation';
import React from 'react';

const CheckLocationPage: React.FC = () => {
  // Handle location check logic here

  return (
    <div className='h-full'>
      <Container>
        <h1 className='text-center py-4'>Check Location Page</h1>
        <CheckLocation />
      </Container>
    </div>
  );
};

export default CheckLocationPage;
