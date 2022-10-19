import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const paramsTraiding = 'trending/movie/week?';
// const SEARCH_URL = 'search/movie?&query=';
const API_KEY = 'api_key=07a0b7347da6bb0b9ce66f00964e6e58';

export async function fetchTraidingFilms() {
  const response = await axios.get(`${BASE_URL}${paramsTraiding}${API_KEY}`);

  return response.data;
}

//   fetchSearchFilms() {
//     const response = axios.get(
//       `${BASE_URL}${SEARCH_URL}${query}&${API_KEY}`
//     );

//     return response.data;
//   }
