import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const paramsTraiding = 'trending/movie/day?';
const SEARCH_URL = 'search/movie?';

const API_KEY = 'api_key=07a0b7347da6bb0b9ce66f00964e6e58';
const lang = 'language=en-US';

export async function fetchTraidingFilms() {
  const { data } = await axios.get(`/${paramsTraiding}${API_KEY}`);

  return data;
}

export async function fetchFilmsById(id) {
  const { data } = await axios.get(`/movie/${id}?${lang}&${API_KEY}`);

  return data;
}

export async function fetchSearchFilms(query) {
  const { data } = await axios.get(`/${SEARCH_URL}&query=${query}&${API_KEY}`);

  return data;
}

export async function fetchFilmsCast(id) {
  const { data } = await axios.get(`/movie/${id}/credits?${lang}&${API_KEY}`);

  return data;
}

export async function fetchFilmsReview(id) {
  const { data } = await axios.get(`/movie/${id}/reviews?${lang}&${API_KEY}`);

  return data;
}
