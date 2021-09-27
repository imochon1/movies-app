import React, { useEffect, useState } from "react";

function Movies({ movies, setMovies }) {
  console.log("LLEGANDO", movies);

  return (
    <div>
      <h3>Cartelera</h3>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Boletos disponibles</th>
          </tr>
        </thead>
        <tbody>
          {movies?.length > 0 ? (
            movies.map((movie, index) => (
              <tr key={index}>
                {" "}
                <td>{movie.movieName}</td>
                <td>{movie.tickets}</td>{" "}
              </tr>
            ))
          ) : (
            <tr>
              <td>No hay películas en la Cartelera</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Movies;
