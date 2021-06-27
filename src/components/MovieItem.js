import { MovieWrapper } from "../styles";
import MovieButton from "./MovieButton";

const MovieItem = (props) => {
  return (
    <div>
      <MovieWrapper>
        <img src={props.movie.poster} alt={props.movie.title} />
        <p>{props.movie.title}</p>
        <p>{props.movie.genre}</p>
        <MovieButton movie={props.movie}></MovieButton>
      </MovieWrapper>
    </div>
  );
};
export default MovieItem;
