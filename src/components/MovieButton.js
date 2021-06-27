// import movies from "../movies";
import movieStore from "./stores/movieStore";
import { observer } from "mobx-react";
const MovieButton = (props) => {
  const handleUpdate = () => {
    movieStore.updateWatchStatus(props.movie);
  };

  return (
    <button onClick={handleUpdate}>
      {props.movie.watched ? "Watch" : "Unwatch"}
    </button>
  );
};
export default observer(MovieButton);
