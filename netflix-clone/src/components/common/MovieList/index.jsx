import axios from "./axios";
import React, { useEffect, useState } from "react";
import Movie from "./Movie";
import "../css/MovieList.css";

function MovieList({ title, fetchURL }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, []);
  console.log(movies);
  const movieComponents = movies.map((movie, index) => (
    <Movie key={index} title={movie.title} imagePath={movie.backdrop_path} />
  ));
  return (
    <div className="movie-list">
      <span>{title}</span>
      <ul>{movieComponents}</ul>
    </div>
  );
}

export default MovieList;
