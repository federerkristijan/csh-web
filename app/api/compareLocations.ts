import { getUserLocation } from "@/app/api/userLocation";
import schoolsData from "@/lib/schools.json";
import kitasData from "@/lib/kitas.json";

interface Location {
  latitude: number;
  longitude: number;
}

interface School {
  lat: number;
  lon: number;
}

interface Kita {
  address: string;
}

const calculateDistance = (loc1: Location, loc2: Location): number => {
  const R = 6371e3; // metres
  const φ1 = (loc1.latitude * Math.PI) / 180; // φ, λ in radians
  const φ2 = (loc2.latitude * Math.PI) / 180;
  const Δφ = ((loc2.latitude - loc1.latitude) * Math.PI) / 180;
  const Δλ = ((loc2.longitude - loc1.longitude) * Math.PI) / 180;

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c; // in metres
};

const isNearLocation = (userLocation: Location, locations: School[] | Kita[]): boolean => {
  for (const location of locations) {
    const distance = calculateDistance(userLocation, location);
    if (distance < 100) {
      return true;
    }
  }
  return false;
};

const compareLocations = async (): Promise<string> => {
  try {
    const userLocation = await getUserLocation();
    if (!userLocation) {
      throw new Error('Unable to get user location.');
    }

    const isNearSchool = isNearLocation(userLocation, schoolsData as School[]);
    const isNearKita = isNearLocation(userLocation, kitasData as Kita[]);

    if (isNearSchool || isNearKita) {
      return 'You canna smoke here';
    } else {
      return 'You canna not smoke here';
    }
  } catch (error) {
    console.error('Error comparing locations:', error);
    return 'Error comparing locations';
  }
};

export default compareLocations;
