// import PropTypes from 'prop-types';

import RenderSearchFilms from 'components/RenderFilms/RenderSearchFilms';
import { MainSection } from './Movies.styled';

export default function Movies() {
  return (
    <MainSection>
      <RenderSearchFilms />
    </MainSection>
  );
}
