import ListFilms from 'components/ListFilms/ListFilms';
import Loader from 'components/Loader/Loader';
import { useTrendingFilms } from 'hooks';
import { Toaster } from 'react-hot-toast';
import { MainSection, Title } from './Home.styled';

export default function Home() {
  const { trendingFilms, isLoading } = useTrendingFilms();

  return (
    <>
      {isLoading && <Loader />}

      <Title>Trending today</Title>

      <MainSection>
        <ListFilms films={trendingFilms} />
      </MainSection>

      <Toaster />
    </>
  );
}
