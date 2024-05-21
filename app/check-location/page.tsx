import React from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the client component
const CheckLocationClient = dynamic(() => import('@/components/pages/CheckLocationClient'), {
  ssr: false,
});

const fetchGeoJsonData = async () => {
  const geoJsonUrl = process.env.NEXT_PUBLIC_GEOJSON_URL;
  if (!geoJsonUrl) {
    console.error('GeoJSON URL is not defined');
    throw new Error('GeoJSON URL is not defined');
  }
  try {
    const response = await fetch(geoJsonUrl);
    console.log(response.ok, 'Response OK');
    if (!response.ok) {
      console.log('Failed to fetch GeoJSON data:', response.status, response.statusText);
      throw new Error('Failed to fetch GeoJSON data');
    }
    const data = await response.json();
    console.log('GeoJSON Data:', data);
    return data;
  } catch (error) {
    console.error('Error:', error);
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
