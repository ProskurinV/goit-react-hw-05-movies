import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { FilmCard, Img, MovieList, MovieTitle } from './ListFilms.styled';

import images from '../../images/images.jpg';
import { routes } from 'routes';

export default function ListFilms({ films }) {
  const location = useLocation();
  const IMG_URL = 'https://image.tmdb.org/t/p/w500';

  return (
    <MovieList>
      {films &&
        films.map(({ poster_path, title, id }) => (
          <Link
            key={id}
            to={`/${routes.MOVIES}/${id}`}
            state={{ from: location }}
          >
            <FilmCard>
              {poster_path ? (
                <Img src={IMG_URL + poster_path} alt={title} />
              ) : (
                <Img src={images} alt={title} />
              )}

              <MovieTitle> {title}</MovieTitle>
            </FilmCard>
          </Link>
        ))}
    </MovieList>
  );
}

ListFilms.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
    })
  ),
};
