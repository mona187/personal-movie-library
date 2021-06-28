import movieStore from "./stores/movieStore";
import { Wrapper } from "../styles";
import { useState } from "react";

const AddMovie = () => {
  const [newMovie, setNewMovie] = useState({
    id: "",
    watched: false,
    title: "",
    genre: "Drama",
    poster: "",
  });
  const handleChange = (event) => {
    setNewMovie({ ...newMovie, [event.target.title]: event.target.value });
  };

  const handleAdd = (event) => {
    event.preventDefault();
    movieStore.moviesAdd(newMovie);
  };
  return (
    <Wrapper>
      <form onSubmit={handleAdd}>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter a movie..."
            onChange={handleChange}
            title="title"
            aria-label="movie name"
            aria-describedby="button-addon2"
          />
          <input
            type="text"
            className="form-control"
            placeholder="movie poster..."
            onChange={handleChange}
            title="poster"
            aria-label="movie poster"
            aria-describedby="button-addon2"
          />
          <button
            className="btn btn-outline-secondary"
            type="submit"
            id="button-addon2"
          >
            Add+
          </button>
        </div>
      </form>
    </Wrapper>
  );
};
export default AddMovie;
