import * as OSM from 'osm-api';

const bbox: [number, number, number, number] = [8.67, 47.26, 15.01, 54.81]; // Bounding box of Germany
const query: string[] = ['amenity=school', 'amenity=kindergarten']; // Query for schools and kindergartens

const osm: OSM = new OSM('https://api.openstreetmap.org/api/0.6/');

osm.search({
  bbox: bbox,
  query: query.join(';'),
}).then((results: any) => {
  console.log(results);
}).catch((error: any) => {
  console.error(error);
});
