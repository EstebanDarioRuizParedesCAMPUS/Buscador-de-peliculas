const TarjetaPelicula = ({ movie }) => {
  return (
    <div className="cine">
      <div className="empty">
        <h3>{movie.Year}</h3>
      </div>
      <div>
        <img
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/400"
          }
          alt={movie.Title}
        />
      </div>

      <div>
        <span>{movie.Type}</span>
        <h2>{movie.Title}</h2>
      </div>
    </div>
  );
};

export default TarjetaPelicula;
