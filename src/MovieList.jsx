// MovieList.jsx
// props: movies (filtered array), currentGenre (string), hasMovies (boolean)
function MovieList({ movies, currentGenre, hasMovies }) {
  return (
    <div>
      <h2>Movies</h2>

      {/* If a genre is selected but there are no movies, show error */}
      {!hasMovies && currentGenre !== "" && (
        <p style={{ color: "red" }}>
          No movies found for genre: {currentGenre}
        </p>
      )}

      {/* If there ARE movies, show the list */}
      {hasMovies && (
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <strong>{movie.title}</strong> – {movie.genre} – {movie.director} (
              {movie.yearReleased})
            </li>
          ))}
        </ul>
      )}

      {/* Optional message when showing all movies */}
      {currentGenre === "" && movies.length > 0 && (
        <p>Showing all movies.</p>
      )}
    </div>
  );
}

export default MovieList;
