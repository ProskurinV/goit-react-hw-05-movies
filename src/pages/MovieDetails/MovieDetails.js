import BackLink from 'components/BackLink/BackLink';
import { Suspense } from 'react';

import { useMovieDetails } from 'hooks';
import PropTypes from 'prop-types';
import { Toaster } from 'react-hot-toast';
import { Outlet, useLocation } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import images from '../../images/images.jpg';
import {
  AddTitle,
  FilmCard,
  Genres,
  GenresTitle,
  Img,
  MovieTitle,
  OverTitle,
  Overview,
  StyledLink,
  Vote,
  VoteTitle,
  AddWrapper,
} from './MovieDetails.styled';

export default function MovieDetails() {
  const location = useLocation();
  const { movie, isLoading } = useMovieDetails();

  const IMG_URL = 'https://image.tmdb.org/t/p/w500';
  const backLink = location?.state?.from ?? '/';
  const { poster_path, title, vote_average, overview, genres } = movie;

  return (
    <>
      <BackLink to={backLink}>Back</BackLink>

      {isLoading && <Loader />}

      <FilmCard>
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

          <Genres>
            {genres && genres.map(genre => genre.name).join(', ')}
          </Genres>
        </div>
      </FilmCard>

      <AddWrapper>
        <AddTitle>Additional information</AddTitle>

        <StyledLink to={'cast'} state={{ from: location?.state?.from }}>
          Cast
        </StyledLink>

        <StyledLink to={'reviews'} state={{ from: location?.state?.from }}>
          Reviews
        </StyledLink>
        <Suspense fallback={<></>}>
          <Outlet />
        </Suspense>
        <Toaster />
      </AddWrapper>
    </>
  );
}

MovieDetails.propTypes = {
  movie: PropTypes.arrayOf(
    PropTypes.shape({
      poster_path: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      vote_average: PropTypes.number.isRequired,
      overview: PropTypes.string.isRequired,
      genres: PropTypes.arrayOf(
        PropTypes.shape({ genre: PropTypes.string.isRequired })
      ),
    })
  ),
};
