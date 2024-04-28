import { getDistanceFromLatLonInKm } from './distanceCalculator';

/**
 * Checks if the user's location is within 100 meters of any school or kindergarten.
 * @param userLat User's latitude
 * @param userLon User's longitude
 * @param facilities Array of facilities with latitude and longitude
 * @returns Boolean indicating whether user is within 100 meters of any facility
 */
export function isNearbySchoolOrKindergarten(userLat: number, userLon: number, facilities: { latitude: number; longitude: number; }[]): boolean {
  const proximityThreshold = 0.1; // 100 meters in kilometers
  for (const facility of facilities) {
    const distance = getDistanceFromLatLonInKm(userLat, userLon, facility.latitude, facility.longitude);
    if (distance <= proximityThreshold) {
      return true;
    }
  }
  return false;
}
