import axios from 'axios';
import cheerio from 'cheerio';

export default async function scrapeBubatzkarte() {
  try {
    // Make a GET request to the bubatzkarte website
    const response = await axios.get('https://bubatzkarte.de/#6/51.124/9.635');

    // Load the HTML content into cheerio
    const $ = cheerio.load(response.data);

    // Extract all elements with the class name "marker"
    const markers = $('.marker');

    // Iterate over the markers and extract relevant data
    markers.each((index, element) => {
      // Check if the marker is a school or kindergarten (you may need to inspect the HTML structure to determine this)
      // Extract relevant data such as name, location, etc.
      const name = $(element).text(); // Example: Extract the text content of the marker

      // Print or store the extracted data
      console.log(name);
    });
  } catch (error) {
    console.error('Error scraping bubatzkarte:', error);
  }
}

// Call the scraping function
scrapeBubatzkarte();
