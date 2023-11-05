import axios from 'axios';

export async function getData(aRoute) { //in case there is no .env file
  try {
    const response = await axios.get(`http://localhost:5555/${aRoute}`);

    // Validate response
    if (!response.data) {
      throw new Error('Response data is empty');
    }

    console.log(response.data);
    return { data: response.data, error: null };
  } catch (error) {
    console.error(`Error fetching data from /${aRoute}:`, error);
    return { data: null, error };
  } finally {
    console.log(`${aRoute} API call executed`);
  }
};
