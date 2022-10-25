import FilmDescription from 'components/FilmDescription';
import { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Outlet, useParams } from 'react-router-dom';
import { fetchFilmsId } from '../../components/movieDatabaseApi';
import Loader from '../../components/Loader/Loader';

export default function MovieDetails(film) {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // const filmDesc = fetchFilmsId(movieId);

  useEffect(() => {
    if (!movie) {
      return;
    }
    async function fetchMovieID() {
      try {
        setIsLoading(true);
        const response = await fetchFilmsId(movieId);
        const film = response.data;
        setMovie(film);
      } catch {
        setError('Can`t load images!');
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovieID();
  }, [movie, movieId]);

  useEffect(() => {
    if (error !== false) {
      toast.error(error);
    }
  }, [error]);

  return (
    <main>
      {isLoading && <Loader />}
      {/* {filmDesc.title} */}
      <p>{movieId}</p>
      <FilmDescription movie={film} />
      <Toaster />
      <Outlet />
    </main>
  );
}
