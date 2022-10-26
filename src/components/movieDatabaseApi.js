import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const paramsTraiding = 'trending/movie/day?';
const SEARCH_URL = 'search/movie?';

const API_KEY = 'api_key=07a0b7347da6bb0b9ce66f00964e6e58';
const lang = 'language=en-US';

export async function fetchTraidingFilms() {
  const response = await axios.get(`${BASE_URL}${paramsTraiding}${API_KEY}`);

  return response.data;
}

export async function fetchFilmsById(id) {
  const response = await axios.get(`${BASE_URL}movie/${id}?${lang}&${API_KEY}`);

  return response.data;
}

export async function fetchSearchFilms(query) {
  const response = await axios.get(
    `${BASE_URL}${SEARCH_URL}&query=${query}&${API_KEY}`
  );

  return response.data;
}

export async function fetchFilmsCast(id) {
  const response = await axios.get(
    `${BASE_URL}movie/${id}/credits?${lang}&${API_KEY}`
  );

  return response.data;
}

export async function fetchFilmsReview(id) {
  const response = await axios.get(
    `${BASE_URL}movie/${id}/reviews?${lang}&${API_KEY}`
  );

  return response.data;
}
