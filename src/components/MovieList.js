import MovieItem from "./MovieItem";
import SearchBar from "./SearchBar";
import { ListWrapper } from "../styles";
import { useState } from "react";
import { observer } from "mobx-react";
import movieStore from "./stores/movieStore";
// import watchedList from "./WatchedList";
const MovieList = () => {
  const [query, setQuery] = useState("");

  const movieList = movieStore.movies
    .filter(
      (movie) =>
        movie.title.toLowerCase().includes(query.toLowerCase()) ||
        movie.genre.toLowerCase().includes(query.toLowerCase())
    )
    .filter((movie) => movie.watched === false)

    .map((movie) => <MovieItem movie={movie} movieId={movie.id} />);

  return (
    <div>
      {!query
        ? movieList.length
        : " showing " +
          movieList.length +
          " out of " +
          movieStore.movies.filter((movie) => movie.watched === false).length}
      <SearchBar setQuery={setQuery} />
      <ListWrapper>{movieList}</ListWrapper>
    </div>
  );
};
export default observer(MovieList);
