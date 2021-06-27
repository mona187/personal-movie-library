import MovieItem from "./MovieItem";
import SearchBar from "./SearchBar";
import { ListWrapper } from "../styles";
import { useState } from "react";
const MovieList = (props) => {
  const [query, setQuery] = useState("");
  const movieList = props.movies
    .filter(
      (movie) =>
        movie.title.toLowerCase().includes(query.toLowerCase()) ||
        movie.genre.toLowerCase().includes(query.toLowerCase())
    )

    .map((movie) => <MovieItem movie={movie} movieId={movie.id} />);
  return (
    <div>
      <SearchBar setQuery={setQuery} />
      <ListWrapper>{movieList}</ListWrapper>
    </div>
  );
};
export default MovieList;
