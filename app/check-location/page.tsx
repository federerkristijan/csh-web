import React from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the client component
const CheckLocationClient = dynamic(() => import('@/components/pages/CheckLocationClient'), {
  ssr: false,
});

const fetchGeoJsonData = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  try {
    const response = await fetch(`${baseUrl}/export.geojson`);
    if (!response.ok) {
      throw new Error('Failed to fetch GeoJSON data');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const CheckLocationPage = async () => {
  const geoJsonData = await fetchGeoJsonData();

  if (!geoJsonData) {
    return <p>Error loading GeoJSON data</p>;
  }

  return <CheckLocationClient initialGeoJsonData={geoJsonData} />;
};

export default CheckLocationPage;
