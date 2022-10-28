import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import { fetchFilmsCast } from '../../components/movieDatabaseApi';
import Loader from '../../components/Loader/Loader';
import toast, { Toaster } from 'react-hot-toast';
import images from '../../images/images.jpg';
import {
  AddInfo,
  Img,
  NameTitle,
  Character,
  CharacterTitle,
  Wrapper,
  MainWrapper,
  DisabledLink,
} from './Cast.styled';

export default function Cast(id) {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  const IMG_URL = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    async function fetchMovieCast(movieId) {
      try {
        setIsLoading(true);
        const response = await fetchFilmsCast(movieId);
        const castList = response.cast;
        if (castList.length === 0) {
          toast('We don`t have any reviews for this movie');
          return;
        }
        setCast(castList);
      } catch {
        setError('Can`t load movies!');
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovieCast(movieId);
  }, [movieId]);

  useEffect(() => {
    if (error !== false) {
      toast.error(error);
    }
  }, [error]);

  if (!cast) {
    return null;
  }

  return (
    <MainWrapper>
      {isLoading && <Loader />}
      {cast.map(({ id, character, original_name, profile_path }) => {
        return (
          <AddInfo key={id}>
            <DisabledLink to={'movies'} state={{ from: location }}>
              {profile_path ? (
                <Img src={IMG_URL + profile_path} alt={original_name} />
              ) : (
                <Img src={images} alt={original_name} />
              )}

              <Wrapper>
                <NameTitle>{original_name}</NameTitle>
                <CharacterTitle>Character:</CharacterTitle>
                <Character>{character}</Character>
              </Wrapper>
            </DisabledLink>
          </AddInfo>
        );
      })}
      <Outlet />
      <Toaster />
    </MainWrapper>
  );
}

Cast.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      character: PropTypes.string.isRequired,
      original_name: PropTypes.string.isRequired,
      profile_path: PropTypes.string.isRequired,
    })
  ),
};
