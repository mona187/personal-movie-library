import logo from "./logo.svg";
import "./App.css";
import { GlobalStyle } from "./styles";
import { ThemeProvider } from "styled-components";
import MovieList from "./components/MovieList";
import movies from "./movies";
const theme = {
  mainColor: "white",
  backgroundColor: "#14213d",
  red: "#ff3232",
};
function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <h1>Movies</h1>
        <MovieList />
      </ThemeProvider>
=======
      <h1>Mona</h1>
      <h1>Athari</h1>
>>>>>>> 7dabbfad9cdc728f7cf2e0bc119c91587f126482
    </div>
  );
}

export default App;
