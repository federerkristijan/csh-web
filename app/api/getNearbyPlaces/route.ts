import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const lat = searchParams.get('lat');
  const lng = searchParams.get('lng');

  if (!lat || !lng) {
    return NextResponse.json({ error: 'Latitude and longitude are required' }, { status: 400 });
  }

  const apiKey = process.env.GOOGLE_MAPS_API_KEY_PRODUCTION;

  if (!apiKey) {
    return NextResponse.json({ error: 'API key is missing' }, { status: 400 });
  }

  const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=500&type=school|kindergarten&key=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log('API Response:', data);

    if (!response.ok) {
      return NextResponse.json({ error: data.error_message }, { status: response.status });
    }

    return NextResponse.json(data.results);
  } catch (error) {
    console.error('Error fetching nearby places:', error);
    return NextResponse.json({ error: 'Failed to fetch nearby places' }, { status: 500 });
  }
}
