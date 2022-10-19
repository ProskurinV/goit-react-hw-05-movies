import { useState } from 'react';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { fetchTraidingFilms } from '../movieDatabaseApi';
import { MovieList } from './TraidingFilms.styled';

export default function TraidingFilms() {
  const [traidingFilms, setTraidingFilms] = useState([]);
  // const [error, setError] = useState(false);

  useEffect(() => {
    if (!traidingFilms) {
      return;
    }
    async function fetchMovie() {
      try {
        const response = await fetchTraidingFilms();
        const films = response.results;
        setTraidingFilms(films);
      } catch (error) {
        console.log('Can`t load movies!');
      } finally {
      }
    }
    fetchMovie();
  }, [traidingFilms]);

  return (
    <MovieList>
      {traidingFilms.map(({ poster_path, title, id }) => (
        <NavLink key={id} to={`movies/${id}`}>
          {title}
        </NavLink>
      ))}
    </MovieList>
  );
}
