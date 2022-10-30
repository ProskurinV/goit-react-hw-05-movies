import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { routes } from 'routes';

const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const SharedLayout = lazy(() => import('./SharedLayout/SharedLayout'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('../pages/Cast'));
const Reviews = lazy(() => import('../pages/Reviews'));
const NotFound = lazy(() => import('./NotFound/NotFound'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path={routes.HOME} element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path={routes.MOVIES} element={<Movies />} />
          <Route path={`${routes.MOVIES}/:movieId`} element={<MovieDetails />}>
            <Route path={routes.CAST} element={<Cast />} />
            <Route path={routes.REVIEWS} element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};
