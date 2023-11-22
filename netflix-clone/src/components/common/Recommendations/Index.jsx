import React, { useEffect, useState } from 'react';
import "./style.css"

function Index() {
    const [movies,setMovies]=useState({})
    const fetchMovies=()=>{
    return fetch("https://api.themoviedb.org/3/movie/550/similar?api_key=324752feff8b4c90538fe9c50b9e9ad5")
    .then((res)=>res.json())
    .then((movies)=>{
      console.log(movies)
      setMovies(movies)
    })
  }

  useEffect(() => {
    fetchMovies();
  }, []);



  return (
    
      <>
        <div className="recommendations">
          <h1 className="heading"> More Like This</h1>
              <div className='recommendations-container'>
                    <div className='movie'>
                    <ul>
                    {movies && movies.results && movies.results.slice(0, 12).map((movie, index) => (
                    <li key={index}>
                        <img
                        className='more-like-this-image'
                        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                        alt={`Movie ${index}`}
                        />
                    </li>
                    ))}
                    </ul>
                    </div>
              </div>
        </div>
      </>
    
  );
}

export default Index
