import movieStore from "./stores/movieStore";

import { useState } from "react";

const AddMovie = () => {
  //const [newMovie, setNewMovie] = useState("");
  //changes
  const [newMovie, setNewMovie] = useState({
    id: 0,
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
    <form onSubmit={handleAdd}>
      <div className="form-group row">
        <div className="col-6">
          <input
            className="form-control"
            type="text"
            onChange={handleChange}
            title="title"
          />
        </div>
      </div>
      <button>Add +</button>
    </form>
  );
};
export default AddMovie;
