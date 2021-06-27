import movies from "../../movies";
import { makeAutoObservable } from "mobx";

class MovieStore {
  movies = movies;

  constructor() {
    makeAutoObservable(this);
  }
  updateWatchStatus = (updatedMovie) => {
    const movie = this.movies.find((movie) => movie.id === updatedMovie.id);
    movie.watched = !movie.watched;
  };
}
const movieStore = new MovieStore();

export default movieStore;
