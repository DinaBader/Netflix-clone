import React from "react";

import "./style.css";
import { Link } from "react-router-dom";
const Movie = ({ title, imagePath, id }) => {
  const imgSrc = `https://image.tmdb.org/t/p/original${imagePath}`;

  // function showMovieDetails(MovieId){
  //   window.location.href = ``
  // }

  return (
    <Link to={`/movie-details/${id}`}>
      <div className="movie-card">
        <li>
          <img src={imgSrc} alt="Movie Cover" />
          <span>{title}</span>
        </li>
      </div>
    </Link>
  );
};

export default Movie;
