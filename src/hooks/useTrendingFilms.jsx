import { fetchTraidingFilms } from 'api/movieDatabaseApi';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

export const useTrendingFilms = () => {
  const [trendingFilms, setTrendingFilms] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchMovie() {
      try {
        setIsLoading(true);
        const response = await fetchTraidingFilms();
        const films = response.results;
        setTrendingFilms(films);
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

  return { trendingFilms, isLoading };
};
