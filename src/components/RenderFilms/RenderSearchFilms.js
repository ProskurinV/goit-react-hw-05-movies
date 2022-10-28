import PropTypes from 'prop-types';
import SearchBar from 'components/Searchbar/SearchBar';
import { useState, useEffect } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import Loader from 'components/Loader';
import { fetchSearchFilms } from 'components/movieDatabaseApi';
import {
  MovieList,
  FilmCard,
  Img,
  MovieTitle,
} from './RenderSearchFilms.styled';
import images from '../../images/images.jpg';

export default function RenderSearchFilms() {
  const [searchMovies, setSearchMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();

  const IMG_URL = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    if (!query) {
      return;
    }
    async function fetchImg(query) {
      try {
        setIsLoading(true);

        const response = await fetchSearchFilms(query);
        const films = response.results;
        const total = response.total_results;

        if (total === 0) {
          toast.error(
            'Sorry, there are no movies matching your query. Please try again.'
          );
          return;
        }

        setSearchMovies(films);
      } catch {
        setError('Can`t load movies!');
      } finally {
        setIsLoading(false);
      }
    }
    fetchImg(query);
  }, [query, searchMovies.length]);

  useEffect(() => {
    if (error !== false) {
      toast.error(error);
    }
  }, [error]);

  const handlerFormSubmit = values => {
    if (query !== values.query.trim()) {
      setSearchMovies([]);
      setQuery(values.query.trim());
      setError(false);
      setIsLoading(false);
    }
  };
  console.log(location);

  return (
    <main>
      <SearchBar onSubmit={handlerFormSubmit} />
      {isLoading && <Loader />}
      <MovieList>
        {searchMovies.map(({ poster_path, title, id }) => (
          <NavLink key={id} to={`${id}`} state={{ from: location }}>
            <FilmCard>
              {poster_path ? (
                <Img src={IMG_URL + poster_path} alt={title} />
              ) : (
                <Img src={images} alt={title} />
              )}

              <MovieTitle> {title}</MovieTitle>
            </FilmCard>
          </NavLink>
        ))}
        <Outlet />
        <Toaster />
      </MovieList>
    </main>
  );
}

RenderSearchFilms.propTypes = {
  searchMovies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string.isRequired,
    })
  ),
};
