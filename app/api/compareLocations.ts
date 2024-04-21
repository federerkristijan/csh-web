import { getUserLocation } from "@/app/api/userLocation";
import schools from "@/lib/schools.json";

export const compareLocations = async (): Promise<string> => {
  try {
    // Get user's current location
    const userLocation = await getUserLocation();

    // If user's location is not available, return an error message
    if (!userLocation) {
      return 'Unable to retrieve user location.';
    }

    // Iterate through the list of schools and calculate distances
    const minDistance = schools.reduce((minDist, school) => {
      const dist = calculateDistance(userLocation.latitude, userLocation.longitude, school.latitude, school.longitude);
      return Math.min(minDist, dist);
    }, Infinity);

    // Determine if the user is within 100m of any school
    const isNearSchool = minDistance <= 100;

    // Return the result based on whether the user is near a school or not
    return isNearSchool ? 'You canna smoke here' : 'You canna not smoke here';
  } catch (error) {
    return 'Error comparing locations: ' + error.message;
  }
};

// Function to calculate distance between two points using Haversine formula
const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number): number => {
  const R = 6371; // Radius of the Earth in km
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon2 - lon1);
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c; // Distance in km
  const distanceInMeters = d * 1000; // Convert distance to meters
  return distanceInMeters;
};

// Function to convert degrees to radians
const deg2rad = (deg: number): number => {
  return deg * (Math.PI / 180);
};

// Export compareLocations function
export default compareLocations;
