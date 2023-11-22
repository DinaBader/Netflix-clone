import React, { useEffect, useState } from 'react';
import "./style.css"
function Index() {
      const [casts, setCast] = useState([]);
      const [data, setData] = useState({});
      const fetchInfo = () => {
          return fetch("https://api.themoviedb.org/3/movie/550?api_key=324752feff8b4c90538fe9c50b9e9ad5")
            .then((res) => res.json())
            .then((movieData) => {
              setData(movieData);
            });
        };
        useEffect(() => {
          fetchInfo();
        }, []);
      const fetchCast = () => {
        return fetch("https://api.themoviedb.org/3/movie/550/credits?api_key=324752feff8b4c90538fe9c50b9e9ad5")
          .then((res) => res.json())
          .then((castData) => {
            setCast(castData.cast);
          });
      };

      useEffect(() => {
        fetchCast();
      }, []);
      function timeConvert(n) {
        var num = n;
        var hours = Math.floor(num / 60);
        var minutes = num % 60;
        return hours + "h" + minutes + "m";
      }
    
      function checkAge(adult) {
        if (adult) {
          return "|" + "+18";
        }
        return "";
      }
      const myDiv = document.getElementsByClassName('movie-details')[0];

      // Set the background image of the div
       myDiv.style.backgroundImage = `url(https://image.tmdb.org/t/p/w500${data.backdrop_path})`;
    
  return (
    <>
       <div className="movie-details">
                <h1 className="movie-name">{data.title}</h1>
                <p className='genre'>{data.release_date && new Date(data.release_date).getFullYear()} {checkAge(data.adult)} | {data.runtime && timeConvert(data.runtime)} |{data.genres && data.genres.map(genre => genre.name).join(', ')}</p>
                <p className="description">{data.overview}</p>
                <p className="starring">Starring: {casts && casts.slice(0, 3).map((cast, index) => (
                <span className="cast-name" key={index}>{cast.name}{index < 2 ? ', ' : ''} </span>
                ))} </p>
      </div>
    </>
  )
}

export default Index
