import axios from 'axios';

const THE_CAT_API_KEY =
  'live_ZRgbBHJqgNMula4MM0iCWTzXUjzZl2DkCaQ88DwD6Vsb5qyd5uxrl2YpDd75X6oV';

axios.defaults.baseURL = 'https://api.thecatapi.com/v1/';
axios.defaults.headers.common['x-api-key'] = THE_CAT_API_KEY;

async function fetchBreeds() {
  const url = `breeds`;
  try {
    const response = await axios.get(url);
    const listOfBreeds = response.data;
    return listOfBreeds;
  } catch (error) {
    if (error.code === 'ERR_BAD_REQUEST') {
      console.log('Error', 'Bad request!');
    }
    throw new Error(error);
  }
}

async function fetchCatByBreed(breedId) {
  const url = `images/search?breed_ids=${breedId}`;
  try {
    const response = await axios.get(url);
    const catByBreed = response.data;
    return catByBreed;
  } catch (error) {
    if (error.code === 'ERR_BAD_REQUEST') {
      console.log('Error', 'Bad request!');
    }
    throw new Error(error);
  }
}

export { fetchBreeds, fetchCatByBreed };
