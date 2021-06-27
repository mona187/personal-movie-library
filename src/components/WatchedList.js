import MovieItem from "./MovieItem";
import SearchBar from "./SearchBar";
import { ListWrapper } from "../styles";
import { useState } from "react";
const WatchedList = (props) => {
  const [query, setQuery] = useState("");
  /*
  const watchedList = props.movies
    .filter(
      (movie) =>
        movie.title.toLowerCase().includes(query.toLowerCase()) ||
        movie.genre.toLowerCase().includes(query.toLowerCase())
    )
    .map((movie) => <MovieItem movie={movie} movieId={movie.id} />);
*/
  const watchedList = props.movies
    .filter(
      (movie) =>
        movie.title.toLowerCase().includes(query.toLowerCase()) ||
        movie.genre.toLowerCase().includes(query.toLowerCase())
    )
    .filter((movie) => movie.watched === false)

    .map((movie) => <MovieItem movie={movie} movieId={movie.id} />);

  return (
    <div>
      <SearchBar setQuery={setQuery} />
      <ListWrapper>{watchedList}</ListWrapper>
    </div>
  );
};
export default WatchedList;
