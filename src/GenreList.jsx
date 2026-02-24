// GenreList.jsx
// props: genres (array of {id, name}), currentGenre (string), setCurrentGenre (function)
function GenreList({ genres, currentGenre, setCurrentGenre }) {
  return (
    <div style={{ marginBottom: "16px" }}>
      <h2>Genres</h2>

      {/* Bonus: Show All option */}
      <button
        onClick={() => setCurrentGenre("")}
        style={{
          fontWeight: currentGenre === "" ? "bold" : "normal",
          marginRight: "8px",
        }}
      >
        Show All
      </button>

      {/* One button per genre from mock-data/genres.js */}
      {genres.map((genre) => (
        <button
          key={genre.id}
          onClick={() => setCurrentGenre(genre.name)}
          style={{
            fontWeight: currentGenre === genre.name ? "bold" : "normal",
            marginRight: "8px",
          }}
        >
          {genre.name}
        </button>
      ))}
    </div>
  );
}

export default GenreList;
