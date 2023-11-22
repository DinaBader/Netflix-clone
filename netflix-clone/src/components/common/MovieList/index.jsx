import React, { useEffect, useState } from "react";
import Movie from "../Movie";
import "./style.css";

function MovieList({ title, fetchURL }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(fetchURL)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
      })
      .catch((error) => console.log(error));
  });

  console.log(movies);
  const movieComponents = movies.map((movie, index) => (
    <Movie
      key={index}
      title={movie.title}
      imagePath={movie.backdrop_path}
      id={movie.id}
    />
  ));
  return (
    <div className="movie-list">
      <span className="movie-list-title">{title}</span>
      <ul>{movieComponents}</ul>
    </div>
  );
}

export default MovieList;
