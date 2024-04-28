import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // Construct the Overpass API query to fetch schools and kindergartens in Germany
    const query = `
        [out:json][timeout:25];
        (node["amenity"="school"](area:3600062421);
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

    try {
        const response = await fetch('https://overpass-api.de/api/interpreter', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `data=${encodeURIComponent(query)}`,
        });
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch data" });
    }
}
