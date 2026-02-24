/*import './App.css';

function App() {
	return <></>;
}

export default App;*/

import { useState } from "react";

// 1) Import mock data
import { genres } from "./mock-data/genres";
import { movies as moviesData } from "./mock-data/movies";

import GenreList from "./GenreList";
import MovieList from "./MovieList";

function App() {
  // 2) State: all movies (from mock data)
  const [movies] = useState(moviesData);

  // 3) State: currently selected genre name (string)
  // "" means "Show All"
  const [currentGenre, setCurrentGenre] = useState("");

  // 4) Filter movies based on currentGenre
  const filteredMovies =
    currentGenre === ""
      ? movies
      : movies.filter((movie) => movie.genre === currentGenre);

  // 5) Check if there are any movies for the selected genre
  const hasMovies = filteredMovies.length > 0;

  return (
    <div style={{ padding: "16px" }}>
      <h1>Movie Genre Selector</h1>

      {/* Genre list gets genres, currentGenre and setter */}
      <GenreList
        genres={genres}
        currentGenre={currentGenre}
        setCurrentGenre={setCurrentGenre}
      />

      {/* Movie list gets filtered movies and info about selection */}
      <MovieList
        movies={filteredMovies}
        currentGenre={currentGenre}
        hasMovies={hasMovies}
      />
    </div>
  );
}

export default App;

