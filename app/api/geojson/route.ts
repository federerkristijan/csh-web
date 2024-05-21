import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  const filePath = path.join(process.cwd(), 'public', 'export.geojson');
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    return new NextResponse(data, {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error reading GeoJSON file from api:', error);
    return new NextResponse(JSON.stringify({ error: 'Failed to fetch data' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
