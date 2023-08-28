import { useEffect, useState } from "react";
import buscadorIcon from "./buscador.svg";
import TarjetaPelicula from "./TarjetaPelicula";

import "./App.css";

// Api Key = 5d0d8d73

const API_URL = "http://www.omdbapi.com/?apikey=5d0d8d73";

const movie1 = {
  Title: "Scott Pilgrim vs. the World: The Game",
  Year: "2010",
  imdbID: "tt1628764",
  Type: "game",
  Poster: "N/A",
};

const App = () => {
  const [movies, setMovies] = useState([]);
  const [busquedaParams, setBusquedaParams] = useState("");

  const buscadorCine = async (titulo) => {
    const response = await fetch(`${API_URL}&s=${titulo}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    buscadorCine("marvel");
  }, []);

  return (
    <div className="app">
      <h1>Es demaciado Cineeeeeee</h1>
      <div className="busqueda">
        <input
          placeholder="Busca la pelicula que deseas ver"
          value={busquedaParams}
          onChange={(e) => setBusquedaParams(e.target.value)}
        />
        <img
          src={buscadorIcon}
          alt="Buscar"
          onClick={() => buscadorCine(busquedaParams)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="contenedor">
          {movies.map((movie) => (
            <TarjetaPelicula movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No se encontraron películas</h2>
        </div>
      )}

      {/*<div className="container">
        <TarjetaPelicula movie={movie1}/>
      </div>*/}
    </div>
  );
};

export default App;
