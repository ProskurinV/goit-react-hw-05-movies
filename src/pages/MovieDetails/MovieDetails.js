import FilmDescription from 'components/FilmDescription';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchFilmsId } from '../../components/movieDatabaseApi';

export default function MovieDetails(film) {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    if (!movie) {
      return;
    }
    async function fetchMovieID() {
      try {
        const response = await fetchFilmsId(movieId);
        const film = response.data;
        setMovie(film);
      } catch (error) {}
    }
    fetchMovieID();
  }, [movie, movieId]);

  return (
    <main>
      {film.title}
      <h2>- - {movieId}</h2>
      <FilmDescription movie={film} />
    </main>
  );
}
