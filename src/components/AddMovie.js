import movieStore from "./stores/movieStore";

import { useState } from "react";

const AddMovie = () => {
  const [newMovie, setNewMovie] = useState("");

  const handleChange = (event) => {
    setNewMovie({ ...newMovie, [event.target.title]: event.target.value });
  };

  const handleAdd = (event) => {
    event.preventDefault();
    console.log(newMovie);
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
