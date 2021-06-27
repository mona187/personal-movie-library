import MovieItem from "./MovieItem";
import movies from "../movies";
const MovieList = () => {
  const movieList = movies.map((movie) => (
    <MovieItem movie={movie} key={movie.id} />
  ));
  return { movieList };
};
export default MovieList;
