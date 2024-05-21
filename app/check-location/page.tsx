import dynamic from 'next/dynamic';

const CheckLocationClient = dynamic(() => import('@/components/pages/CheckLocationClient'), {
  ssr: false,
});

const CheckLocationPage = () => {
  return <CheckLocationClient />;
};

export default CheckLocationPage;
