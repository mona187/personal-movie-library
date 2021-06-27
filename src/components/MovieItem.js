import { MovieWrapper } from "../styles";

const MovieItem = (props) => {
  return (
    <div>
      <MovieWrapper>
        <img src={props.movie.poster} alt={props.movie.title} />
        <p>{props.movie.title}</p>
        <p>{props.movie.genre}</p>
      </MovieWrapper>
    </div>
  );
};
export default MovieItem;
