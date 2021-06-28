import movieStore from "./stores/movieStore";
import { Wrapper } from "../styles";
import { useState } from "react";

const AddMovie = () => {
  //const [newMovie, setNewMovie] = useState("");
  //changes
  const [newMovie, setNewMovie] = useState({
    id: "",
    watched: false,
    title: "",
    released: "",
    runtime: "",
    genre: "",
    plot: "",
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
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Enter a movie..."
            onChange={handleChange}
            title="title"
            aria-label="movie name"
            aria-describedby="button-addon2"
          />
          <button
            class="btn btn-outline-secondary"
            type="submit"
            id="button-addon2"
          >
            Add+
          </button>
        </div>
      </form>
    </Wrapper>

    /*
    <form onSubmit={handleAdd}>
      <div className="form-group row">
        <div className="col-6">
          <input
            className="form-control"
            type="text"
            onChange={handleChange}
            title="title"
            placeholder="Enter a movie..."
          />
        </div>
      </div>
      <button type="submit">Add +</button>
    </form>
    */
  );
};
export default AddMovie;
