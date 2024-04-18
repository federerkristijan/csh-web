// import axios from 'axios';
// import cheerio from 'cheerio';

// // Function to scrape data from the interactive map
// export const scrapeInteractiveMap = async (): Promise<string[]> => {
//   try {
//     const response = await axios.get('https://interaktiv.morgenpost.de/cannabis-legalisierung-kiffen-karte?utm_source=substack&utm_medium=email');
//     const $ = cheerio.load(response.data);

//     // Extract the addresses from the map
//     const addresses: string[] = [];
//     $('.leaflet-marker-icon').each((index, element) => {
//       const address = $(element).attr('title');
//       if (address) {
//         addresses.push(address);
//       }
//     });

//     return addresses;
//   } catch (error) {
//     console.error('Error scraping interactive map:', error);
//     return [];
//   }
// };

// // Function to scrape hyperlinks from the source page
// export const scrapeHyperlinks = async (): Promise<string[]> => {
//   try {
//     const response = await axios.get('https://www.bildungsserver.de/schulen-in-deutschland-276-de.html');
//     const $ = cheerio.load(response.data);

//     // Extract hyperlinks to German cities
//     const hyperlinks: string[] = [];
//     $('a').each((index, element) => {
//       const href = $(element).attr('href');
//       if (href && href.startsWith('https://')) {
//         hyperlinks.push(href);
//       }
//     });

//     return hyperlinks;
//   } catch (error) {
//     console.error('Error scraping hyperlinks:', error);
//     return [];
//   }
// };
