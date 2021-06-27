import movieStore from "./stores/movieStore";
import { observer } from "mobx-react";

const DeleteButton = (props) => {
  const handleDelete = () => {
    movieStore.moviesDelete(props.movie);
  };

  return <button onClick={handleDelete}>Delete</button>;
};
export default observer(DeleteButton);
