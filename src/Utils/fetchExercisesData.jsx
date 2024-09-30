import axios from "axios";

const fetchExercisesData = async () => {
  const options = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/equipmentList',
    headers: {
      'x-rapidapi-key': import.meta.env.VITE_APP_RAPID_API_KEY,
      'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);  // This will show us the fetched data
    return response.data;
  } catch (error) {
    console.error(error);  // If something goes wrong, we'll know
  }
};

export default fetchExercisesData;
