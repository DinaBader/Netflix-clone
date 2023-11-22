import React, { useEffect, useState } from 'react';
import "./style.css"
import netfix_logo from "../../common/netflix-logo.png"

function Index() {
  const [data, setData] = useState({});
  const [casts, setCast] = useState([]);

  const fetchInfo = () => {
      return fetch("https://api.themoviedb.org/3/movie/550?api_key=324752feff8b4c90538fe9c50b9e9ad5")
        .then((res) => res.json())
        .then((movieData) => {
          console.log(data);
          setData(movieData);
        });
    };  
    
    const fetchCast = () => {
      return fetch("https://api.themoviedb.org/3/movie/550/credits?api_key=324752feff8b4c90538fe9c50b9e9ad5")
        .then((res) => res.json())
        .then((castData) => {
          setCast(castData.cast);
        });
    };
    useEffect(() => {
      fetchInfo();
      fetchCast();

    }, []);
 

  return (
    <>
      <div className="container">
                <div className="right-side-container">
                    <img src={netfix_logo} alt="Netflix Logo" />
                    <p className="watch-all-you-want">
                    Watch all you want.
                    </p>
                </div>
                <div className="left-side-container">
                    <button className="btn join-btn join-btn-container">Join now</button>
                </div>
      </div>
        {/* More details */}
        <div className='wrap'>
      <div className="details-container">
        <div className="movie-information">More Details</div>
        <div className="movie-details-container">
          <div className="movie-detailss-one-container">
            <div className="small-title">Watch offline</div>
            <div className="small-title-description">Download and watch everywhere you go.</div>
          </div>

          <div className="movie-detailss-one-container">
            <div className="small-title">Genres</div>
            <div className="small-title-description">{data.genres && data.genres.map(genre => genre.name).join(', ')}</div>
          </div>

          <div className="movie-detailss-one-container">
            <div className="small-title">Audio</div>
            <div className="small-title-description">{data.spoken_languages && data.spoken_languages.map(language => language.name).join(', ')}</div>
          </div>

          <div className="movie-detailss-one-container">
            <div className="small-title">Subtitles</div>
            <div className="small-title-description">English,Arabic</div>
          </div>
        </div>
      </div>
       <div className='cast-container'>
        <div className='cast-container-title'>
              Cast:
        </div>
        <div className='cast-container-name'>
              {casts && casts.slice(0,12).map((cast, index) => (
                  <span className="cast-name-movie-detail" key={index}>{cast.name}</span>
                ))}
        </div>
        </div> 
        </div>
      </>
      
  
  )
}

export default Index
