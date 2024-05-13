// lib/schoolData.ts
const OVERPASS_API_URL = "https://overpass-api.de/api/interpreter";

const constructQuery = () => `
[out:json];
area["ISO3166-1"="DE"][admin_level=2];
(
  node["amenity"="school"](area);
  way["amenity"="school"](area);
  relation["amenity"="school"](area);
  node["amenity"="kindergarten"](area);
  way["amenity"="kindergarten"](area);
  relation["amenity"="kindergarten"](area);
);
out center;
`;

export async function fetchSchoolsAndKindergartens() {
  const query = constructQuery();
  try {
    const response = await fetch(OVERPASS_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `data=${encodeURIComponent(query)}`,
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log("API Response:", data);

    return (
      data.elements.map((element: { lat: number; lon: number }) => ({
        latitude: element.lat,
        longitude: element.lon,
      })) || []
    );
  } catch (error) {
    console.error("Failed to fetch schools and kindergartens:", error);
    return [];
  }
}
