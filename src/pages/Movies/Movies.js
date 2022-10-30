import { MainSection } from './Movies.styled';
import SearchBar from 'components/Searchbar/SearchBar';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import Loader from 'components/Loader';
import { fetchSearchFilms } from 'api/movieDatabaseApi';
import ListFilms from 'components/ListFilms/ListFilms';

export default function Movies() {
  const [searchMovies, setSearchMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const searchQuery = searchParams.get('query') ?? '';

    if (!searchQuery) {
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

    fetchImg(searchQuery);
  }, [searchParams]);

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
      setSearchParams({ query: values.query });
    }
  };

  return (
    <MainSection>
      <SearchBar onSubmit={handlerFormSubmit} />
      {isLoading && <Loader />}

      <ListFilms films={searchMovies} />
      <Toaster />
    </MainSection>
  );
}
