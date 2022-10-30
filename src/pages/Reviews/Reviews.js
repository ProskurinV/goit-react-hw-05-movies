import PropTypes from 'prop-types';
import { Suspense } from 'react';
import { useState, useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { fetchFilmsReview } from '../../api/movieDatabaseApi';
import Loader from '../../components/Loader/Loader';
import toast, { Toaster } from 'react-hot-toast';
import {
  ReviewInfo,
  Wrapper,
  AuthorName,
  AuthorTitle,
  Content,
} from './Reviews.styled';

export default function Reviews(id) {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchMovieReviews(movieId) {
      try {
        setIsLoading(true);
        const response = await fetchFilmsReview(movieId);
        const reviewList = response.results;
        if (reviewList.length === 0) {
          toast('We don`t have any reviews for this movie');
          return;
        }
        setReviews(reviewList);
      } catch {
        setError('Can`t load movies!');
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovieReviews(movieId);
  }, [movieId]);

  useEffect(() => {
    if (error !== false) {
      toast.error(error);
    }
  }, [error]);

  if (!reviews) {
    return null;
  }

  return (
    <>
      {isLoading && <Loader />}
      {reviews.map(({ id, author, content }) => {
        return (
          <ReviewInfo key={id}>
            <Wrapper>
              <AuthorTitle>Author:</AuthorTitle>
              <AuthorName>{author}</AuthorName>
            </Wrapper>
            <Content>{content}</Content>
          </ReviewInfo>
        );
      })}

      <Toaster />
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
}

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
};
