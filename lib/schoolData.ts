// lib/schoolData.ts
const OVERPASS_API_URL = 'https://overpass-api.de/api/interpreter';

const constructQuery = () => `
    [out:json][timeout:25];
    (
      node["amenity"="school"](area:3600062421);
      way["amenity"="school"](area:3600062421);
      relation["amenity"="school"](area:3600062421);
      node["amenity"="kindergarten"](area:3600062421);
      way["amenity"="kindergarten"](area:3600062421);
      relation["amenity"="kindergarten"](area:3600062421);
    );
    out body;
    >;
    out skel qt;
`;

export async function fetchSchoolsAndKindergartens() {
    const query = constructQuery();
    try {
        const response = await fetch(OVERPASS_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `data=${encodeURIComponent(query)}`,
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Failed to fetch schools and kindergartens:", error);
        throw error;
    }
}
