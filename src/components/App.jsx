import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
// import Footer from './Footer';
// import Home from '../pages/Home/Home';
// import Movies from '../pages/Movies/Movies';
// import SharedLayout from './SharedLayout/SharedLayout';
// import MovieDetails from 'pages/MovieDetails/MovieDetails';
// import Cast from './Cast';
// import Reviews from './Reviews';

const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const SharedLayout = lazy(() => import('./SharedLayout/SharedLayout'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast'));
const Reviews = lazy(() => import('./Reviews'));
const NotFound = lazy(() => import('./NotFound/NotFound'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="movies" element={<Movies />}></Route>
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="/movies/:movieId/cast" element={<Cast />}></Route>
            <Route
              path="/movies/:movieId/reviews"
              element={<Reviews />}
            ></Route>
          </Route>
          {/* <Route index element={<Footer />}></Route> */}
        </Route>
        {/* <Route path="/" element={<Footer />}></Route> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
