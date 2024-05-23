export const getNearbySchoolsAndKindergartens = async (lat: number, lng: number) => {
  const response = await fetch(`/api/getNearbyPlaces?lat=${lat}&lng=${lng}`);
  console.log(response, 'hehe')

  if (!response.ok) {
    throw new Error('Failed to fetch nearby places');
  }

  const data = await response.json();
  return data;
};
