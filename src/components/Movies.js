import React from "react";
import { movies } from "../data";

function Movies() {

const movieComponents = movies.map((movie) => {
  return(
    <div key={movie.title}>
      <h1>Name: {movie.title}</h1>
      <p>Time: {movie.time}</p>
      <ul>
        {movie.genres.map((genre) => <li key={genre}>{genre}</li>)}
      </ul>
    </div>
  )
})

  return (
    <div>
      <h1>Movies Page</h1>
      {movieComponents}
    </div>
  );
}

export default Movies;
