import MovieItem from "./MovieItem";
import SearchBar from "./SearchBar";
import { ListWrapper } from "../styles";
import { useState } from "react";
import { observer } from "mobx-react";
import movieStore from "./stores/movieStore";
const WatchedList = () => {
  const [query, setQuery] = useState("");

  const watchedList = movieStore.movies
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
export default observer(WatchedList);
