import movies from "../../movies";
import { makeAutoObservable } from "mobx";

class MovieStore {
  movies = movies;

  constructor() {
    makeAutoObservable(this);
  }
  updateWatch = (updatedMovie) => {
    const movie = this.movies.find((movie) => movie.id === updatedMovie.id);
    movie.watched = !movie.watched;
  };

  moviesDelete = (deletedMovie) => {
    const movieDeleted = this.movies.filter(
      (movie) => movie.id !== deletedMovie.id
    );
    this.movies = movieDeleted;
  };
}
const movieStore = new MovieStore();

export default movieStore;
