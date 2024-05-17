// Importing the standard Web API Request type
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    // Construct the Overpass API query to fetch schools and kindergartens in Germany
    const query = `
    [out:json]
    [timeout:3600];

    // Retrieve (surrounding) ways with amenity=school
    way({{bbox}})[amenity=school];

    // Retrieve (surrounding) ways with amenity=school
    way({{bbox}})[amenity=kindergarten];

    // Retrieve (surrounding) ways with amenity=school
    way({{bbox}})[amenity=nursery];

    // convert ways to area for later area query
    map_to_area ->.area;

    (
      // Determine difference of all school buildings in bbox
      // minus those inside the closed way with an amenity=school tag

      // All nodes+ways with building=school and no amenity=* tag in bbox
      (
        node ["building"="school"]["amenity"!~"."]({{bbox}});
        way  ["building"="school"]["amenity"!~"."]({{bbox}});
        node ["building"="kindergarten"]["amenity"!~"."]({{bbox}});
        way  ["building"="kindergarten"]["amenity"!~"."]({{bbox}});
        node ["building"="nursery"]["amenity"!~"."]({{bbox}});
        way  ["building"="nursery"]["amenity"!~"."]({{bbox}});
      );
    - // except for
      (
        // All nodes+ways with building=school and no amenity=* tag in area
        node ["building"="school"]["amenity"!~"."](area.area);
        way  ["building"="school"]["amenity"!~"."](area.area);
        node ["building"="kindergarten"]["amenity"!~"."](area.area);
        way  ["building"="kindergarten"]["amenity"!~"."](area.area);
      node ["building"="nursery"]["amenity"!~"."](area.area);
        way  ["building"="nursery"]["amenity"!~"."](area.area);
      );
    );

    out geom;
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
