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

  //changes
  moviesAdd = (addedMovie) => {
    addedMovie.id = this.movies.length + 1;
    this.movies.push(addedMovie);
  };
  /*
  moviesAdd = (updatedMovieTitle) => {
    console.log(updatedMovieTitle);
    this.movies.push({
      title: updatedMovieTitle,
      id: this.movies.length + 1,
      watched: false,
    });
    console.log(this.movies);
  };*/
}
const movieStore = new MovieStore();

export default movieStore;
