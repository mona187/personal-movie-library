import "./App.css";
import { GlobalStyle } from "./styles";
import { ThemeProvider } from "styled-components";
import MovieList from "./components/MovieList";
import WatchedList from "./components/WatchedList";
import movies from "./movies";

const theme = {
  mainColor: "white",
  backgroundColor: "#14213d",
  red: "#ff3232",
};
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <h1>Movies</h1>
        <MovieList movies={movies} />

        <h1>Watched Movies</h1>
        <WatchedList movies={movies} />
      </ThemeProvider>
    </div>
  );
}

export default App;
