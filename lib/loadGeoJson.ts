// @/lib/loadGeoJson.ts
import { FacilitiesData } from '@/types/global';

export const loadGeoJson = async (): Promise<FacilitiesData[]> => {
  try {
    const response = await fetch('/facilities.geojson');

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const geoJson = await response.json();

    const facilities: FacilitiesData[] = geoJson.features.map((feature: any) => {
      const [longitude, latitude] = feature.geometry.coordinates;
      return {
        id: feature.id,
        type: feature.properties.amenity,
        latitude,
        longitude,
        name: feature.properties.name || '',
      };
    });

    return facilities;
  } catch (error) {
    console.error('Error loading GeoJSON data:', error);
    return [];
  }
};
