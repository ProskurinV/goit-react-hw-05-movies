import PropTypes from 'prop-types';
import { useState } from 'react';
import { useEffect } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { fetchTraidingFilms } from '../movieDatabaseApi';
import { MovieList, FilmCard, Img, MovieTitle } from './TraidingFilms.styled';
import Loader from '../Loader/Loader';
import toast, { Toaster } from 'react-hot-toast';
import images from '../../images/images.jpg';

export default function TraidingFilms() {
  const [traidingFilms, setTraidingFilms] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();

  const IMG_URL = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    async function fetchMovie() {
      try {
        setIsLoading(true);
        const response = await fetchTraidingFilms();
        const films = response.results;
        setTraidingFilms(films);
      } catch {
        setError('Can`t load movies!');
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovie();
  }, []);

  useEffect(() => {
    if (error !== false) {
      toast.error(error);
    }
  }, [error]);

  return (
    <MovieList>
      {isLoading && <Loader />}
      {traidingFilms.map(({ poster_path, title, id }) => (
        <NavLink key={id} to={`/movies/${id}`} state={{ from: location }}>
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
  );
}

TraidingFilms.propTypes = {
  traidingFilms: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string.isRequired,
    })
  ),
};
