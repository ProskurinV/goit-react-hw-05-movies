import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchFilmsById } from 'api/movieDatabaseApi';
import { routes } from 'routes';

export const useMovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchMovieID(movieId) {
      try {
        setIsLoading(true);
        const response = await fetchFilmsById(movieId);
        setMovie(response);
      } catch {
        setError('Can`t load movies!');
        navigate(routes.HOME, { replace: true });
      } finally {
        setIsLoading(false);
      }
    }

    fetchMovieID(movieId);
  }, [movieId, navigate]);

  useEffect(() => {
    if (error !== false) {
      toast.error(error);
    }
  }, [error]);

  return { movie, isLoading };
};
