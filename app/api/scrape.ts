// import puppeteer from 'puppeteer';
// import cheerio from 'cheerio';

// export default async function handler(req, res) {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();

//   try {
//     await page.goto('https://bubatzkarte.de/#13/52.5797/13.5765');
//     await page.waitForSelector('.leaflet-marker-pane');

//     // Get the HTML content
//     const content = await page.content();

//     // Parse the HTML using Cheerio
//     const $ = cheerio.load(content);

//     // Example: Extracting school locations from the map
//     const schools: { lat: number, lng: number }[] = [];
//     $('.leaflet-marker-pane .school-marker').each((index, element) => {
//       const lat = $(element).data('lat');
//       const lng = $(element).data('lng');
//       schools.push({ lat, lng });
//     });

//     // Example: Extracting daycare locations from the map
//     const daycares: { lat: number, lng: number }[] = [];
//     $('.leaflet-marker-pane .daycare-marker').each((index, element) => {
//       const lat = $(element).data('lat');
//       const lng = $(element).data('lng');
//       daycares.push({ lat, lng });
//     });

//     // You can now use the extracted school and daycare locations to compare with the user's location

//     res.status(200).json({ schools, daycares });
//   } catch (error) {
//     console.error('Error scraping data:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   } finally {
//     await browser.close();
//   }
// }
