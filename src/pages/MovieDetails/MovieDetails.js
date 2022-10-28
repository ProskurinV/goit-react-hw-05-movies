import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import { fetchFilmsById } from '../../components/movieDatabaseApi';
import Loader from '../../components/Loader/Loader';
import toast, { Toaster } from 'react-hot-toast';
import {
  FilmCard,
  Img,
  MovieTitle,
  Overview,
  OverTitle,
  VoteTitle,
  Vote,
  GenresTitle,
  Genres,
  AddTitle,
  StyledLink,
} from './MovieDetails.styled';
import BackLink from 'components/BackLink/BackLink';
import images from '../../images/images.jpg';

export default function MovieDetails(id) {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();
  const backLink = location.state?.from ?? '/';

  const IMG_URL = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    async function fetchMovieID(movieId) {
      try {
        setIsLoading(true);
        const response = await fetchFilmsById(movieId);
        setMovie(response);
      } catch {
        setError('Can`t load movies!');
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovieID(movieId);
  }, [movieId]);

  useEffect(() => {
    if (error !== false) {
      toast.error(error);
    }
  }, [error]);

  if (!movie) {
    return null;
  }

  const { poster_path, title, vote_average, overview } = movie;
  return (
    <>
      <BackLink to={backLink}>Back</BackLink>
      <FilmCard>
        {isLoading && <Loader />}
        {movie.poster_path ? (
          <Img src={IMG_URL + poster_path} alt={title} />
        ) : (
          <Img src={images} alt={title} />
        )}

        <div>
          <MovieTitle>{title}</MovieTitle>
          <OverTitle>Overview:</OverTitle>
          <Overview>{overview}</Overview>
          <VoteTitle>User Score:</VoteTitle>
          <Vote>{Math.round(vote_average * 10)}%</Vote>
          <GenresTitle>Genres:</GenresTitle>
          <Genres> {movie.genres.map(genre => genre.name).join(', ')}</Genres>
        </div>
      </FilmCard>
      <div>
        <AddTitle>Additional information</AddTitle>
        <StyledLink to={'cast'}>Cast</StyledLink>
        <StyledLink to={'reviews'}>Reviews</StyledLink>

        <Outlet />
        <Toaster />
      </div>
    </>
  );
}

MovieDetails.propTypes = {
  id: PropTypes.number.isRequired,
  movie: PropTypes.arrayOf(
    PropTypes.shape({
      poster_path: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      vote_average: PropTypes.number.isRequired,
      overview: PropTypes.string.isRequired,
    })
  ),
};
