import { useState } from 'react';
import { useEffect } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { fetchTraidingFilms } from '../movieDatabaseApi';
import { MovieList, FilmCard, Img, MovieTitle } from './TraidingFilms.styled';

export default function TraidingFilms() {
  const [traidingFilms, setTraidingFilms] = useState([]);
  // const [error, setError] = useState(false);
  const IMG_URL = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
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
  }, []);

  return (
    <MovieList>
      {traidingFilms.map(({ poster_path, title, overview, id }) => (
        <NavLink key={id} to={`/movies/:movieId${id}`}>
          <FilmCard>
            <Img src={IMG_URL + poster_path} alt={title} />
            <MovieTitle> {title}</MovieTitle>
          </FilmCard>
        </NavLink>
      ))}
      <Outlet />
    </MovieList>
  );
}
