import schools from '@/lib/data/schools';

export default async function scrapeSchoolData() {
  try {
    // Access the schools data from the imported module
    const schoolsData = schools;

    // Iterate over the schools data and extract relevant information
    schools.forEach((schoolData: { name: any; location: any; }) => {
      // Extract relevant data such as name, location, etc.
      const { name, location } = schoolData;

      // Print or store the extracted data
      console.log(`Name: ${name}, Location: ${location}`);
    });
  } catch (error) {
    console.error('Error fetching school data:', error);
  }
}

// Call the scraping function
scrapeSchoolData();
