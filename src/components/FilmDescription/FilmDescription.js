// import PropTypes from 'prop-types';

export default function FilmDescription({
  movie: { title, overview, release_date, poster_path },
}) {
  // const IMG_URL = 'https://image.tmdb.org/t/p/w500';

  return (
    <div>
      <h2>{title}</h2>
      <p>{overview}</p>
    </div>
  );
}
