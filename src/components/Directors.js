import React from "react";
import { directors } from "../data";

function Directors() {

  const directorsComponent = directors.map((director) => {
    return(
      <div key={director.name}>
        <h1>Name: {director.name}</h1>
        <ul>
        {director.movies.map((movie) => <li key={movie}>{movie}</li>)}
        </ul>
      </div>
    )
  })

  return (
    <div>
      <h1>Directors Page</h1>
      {directorsComponent}
    </div>
    )
}

export default Directors;
