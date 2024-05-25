export const fetchQuotes = async () => {
  try {
    const response = await fetch('/api/fetchQuotes');
    if (!response.ok) {
      throw new Error('Failed to fetch quotes');
    }
    const data = await response.json();
    console.log('Fetched quotes from API:', data);
    return data;
  } catch (error) {
    console.error('Error fetching quotes:', error);
    return { yesQuotes: [], noQuotes: [] };
  }
};
