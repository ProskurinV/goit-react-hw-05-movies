// import PropTypes from 'prop-types';

import { useState, useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';
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
} from './MovieDetails.styled';
import Cast from 'components/Cast';
import Reviews from 'components/Reviews';

export default function MovieDetails(id) {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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
      <FilmCard>
        {isLoading && <Loader />}
        <Img src={IMG_URL + poster_path} alt={title} />
        <div>
          <MovieTitle>{title}</MovieTitle>
          <OverTitle>Overview:</OverTitle>
          <Overview>{overview}</Overview>
          <VoteTitle>User Score:</VoteTitle>
          <Vote>{vote_average * 10}%</Vote>
          <GenresTitle>Genres:</GenresTitle>
          <Genres> {movie.genres.map(genre => genre.name).join(', ')}</Genres>
        </div>
      </FilmCard>
      <div>
        <AddTitle>Additional information</AddTitle>
        <Cast />
        <Reviews />
        <Outlet />
        <Toaster />
      </div>
    </>
  );
}
