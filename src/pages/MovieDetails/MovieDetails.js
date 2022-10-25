// import FilmDescription from 'components/FilmDescription';
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
} from './MovieDetails.styled';

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
    <FilmCard>
      {isLoading && <Loader />}
      <Img src={IMG_URL + poster_path} alt={title} />
      <div>
        <MovieTitle>{title}</MovieTitle>
        <Overview>
          <OverTitle>Overview:</OverTitle>
          {overview}
        </Overview>

        <Vote>
          <VoteTitle>Vote_average:</VoteTitle>
          {vote_average}
        </Vote>
        {/* <p>{movie.genres}</p> */}
      </div>

      {/* <FilmDescription movie={film} /> */}
      <Outlet />
      <Toaster />
    </FilmCard>
  );
}
