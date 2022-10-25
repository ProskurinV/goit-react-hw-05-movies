// import PropTypes from 'prop-types';
// import SearchBar from 'components/Searchbar/SearchBar';
// import { useState } from 'react';
// import { useSearchParams } from 'react-router-dom';

import RenderSearchFilms from 'components/RenderFilms/RenderSearchFilms';
import { MainSection } from './Movies.styled';
// import { Outlet } from 'react-router-dom';

export default function Movies() {
  // const [searchParams] = useSearchParams();

  // const [searchMovies, setSearchMovies] = useState([]);
  // const [query, setQuery] = useState('');
  // const [error, setError] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);

  // const handlerFormSubmit = values => {
  //   if (query !== values.query.trim()) {
  //     setSearchMovies([]);
  //     setQuery(values.query.trim());
  //     setError(false);
  //     setIsLoading(false);
  //   }
  // };

  return (
    <MainSection>
      {/* <SearchBar onSubmit={handlerFormSubmit} /> */}
      <RenderSearchFilms />
      {/* <Outlet /> */}
    </MainSection>
  );
}
