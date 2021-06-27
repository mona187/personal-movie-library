const MovieItem = (props) => {
  const movie = props.movie;
  return (
    <div>
      <img src={movie.poster} alt={movie.title} />
      <p>{movie.title}</p>
      <p>{movie.genre}</p>
    </div>
  );
};
export default MovieItem;
