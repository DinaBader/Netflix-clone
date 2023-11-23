import React, { useEffect, useState } from 'react';
import "./style.css"

function Index(){
    const [movies,setMovies]=useState({});
    const fetchMovie=()=>{
        return fetch("https://api.themoviedb.org/3/movie/550/videos?api_key=324752feff8b4c90538fe9c50b9e9ad5")
        .then((res)=>res.json())
        .then((movies)=>{
            console.log(movies);
            setMovies(movies);
        })
    }
    useEffect(()=>{
        fetchMovie();
    },[])

    return (
        <>
        <section className='nmtitle-section section-additinal-videos'>
            <div className='section-header'>
                <h2 className='section-header-text section-item'>
                    Videos
                </h2>
            </div>
            <div className='nm-content-horizontal-row'>
                <ul className='nm-content-horizontal-row-item-container'>
                {movies && movies.results && movies.results.slice(0, 2).map((movie, index) => (
                    <li key={index}>
                        <iframe src={`https://www.youtube.com/embed/${movie.key}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </li>
                    ))}
                </ul>
            </div>
        </section>
        </>
    );

}

export default Index;