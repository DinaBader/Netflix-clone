import React from "react";

import "./style.css";

const Movie = ({ title, imagePath, id }) => {
  const imgSrc = `https://image.tmdb.org/t/p/original${imagePath}`;

  // function showMovieDetails(MovieId){
  //   window.location.href = ``
  // }

  return (
    <div className="movie-card">
      <li>
        <img src={imgSrc} alt="Movie Cover" />
        <span>{title}</span>
      </li>
    </div>
  );
};

export default Movie;
