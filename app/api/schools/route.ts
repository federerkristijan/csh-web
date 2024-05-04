// Importing the standard Web API Request type
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
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
            body: `data=${encodeURIComponent(query)}`
        });

        const data = await response.json();
        return new NextResponse(JSON.stringify(data), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (error) {
        return new NextResponse(JSON.stringify({ error: "Failed to fetch data" }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}
