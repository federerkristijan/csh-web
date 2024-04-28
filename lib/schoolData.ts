// lib/schoolData.ts
import fetch from 'node-fetch';

// Define the base URL for the Overpass API
const OVERPASS_API_URL = 'https://overpass-api.de/api/interpreter';

// The Overpass query to fetch schools and kindergartens in Germany
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

/**
 * Fetches data on schools and kindergartens from OpenStreetMap via the Overpass API.
 * @returns {Promise<any>} The JSON response containing all nodes, ways, and relations tagged as schools or kindergartens.
 */
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
