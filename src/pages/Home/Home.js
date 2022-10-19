// import PropTypes from 'prop-types';
import { Title, MainSection } from './Home.styled';
import TraidingFilms from 'components/RenderFilms/TraidingFilms';

export default function Home() {
  return (
    <div>
      <Title>Trending today</Title>
      <MainSection>
        <TraidingFilms />
      </MainSection>
    </div>
  );
}
