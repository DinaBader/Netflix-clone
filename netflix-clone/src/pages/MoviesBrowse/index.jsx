import React from "react";
import "./style.css";
import Nav from "../../components/common/Nav";
import Header from "../../components/common/Header";
import MovieList from "../../components/common/MovieList";
import requests from "../../components/utilities/Requests";

const MoviesBrowse = () => {
  const rows = [
    { title: "Popular on Netflix", url: requests.fetchNetflixPopular },
    { title: "Hollywood Movies", url: requests.fetchHollywood },
    { title: "Kids & Family Movies", url: requests.fetchKidsFamily },
    { title: "Arabic Movies & TV", url: requests.fetchArabicMoviesTV },
    { title: "Romantic Movies", url: requests.fetchRomantic },
    { title: "New Releases", url: requests.fetchNewRelease },
    { title: "Comedy Movies", url: requests.fetchComedy },
    { title: "Action Thriller Movies", url: requests.fetchActionThriller },
    { title: "Sci-Fi & Fantasy Movies", url: requests.fetchSciFiFantasy },
    { title: "Exciting Movies", url: requests.fetchExciting },
    { title: "Family Feature Animation", url: requests.fetchFamilyAnimation },
    { title: "Horror Movies", url: requests.fetchHorror },
    { title: "Family Comedy Movies", url: requests.fetchFamilyComedy },
    { title: "Action Movies", url: requests.fetchAction },
  ];

  const movieListComponents = rows.map((moviesRow, index) => (
    <MovieList key={index} title={moviesRow.title} fetchURL={moviesRow.url} />
  ));

  return (
    <div className="movies-browse">
      <Nav />
      <Header />
      {movieListComponents}
    </div>
  );
};

export default MoviesBrowse;
