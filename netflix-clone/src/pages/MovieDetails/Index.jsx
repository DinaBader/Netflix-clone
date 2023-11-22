import React from 'react'
import "./style.css"
import Nav from "../../components/common/Nav"
import Recommendations from "../../components/common/Recommendations/Index" 
import MovieInfo from "../../components/common/Movie-Information/Index"
import MovieDetails from "../../components/common/Movie-Details/Index"
function Index() {
  return (
    <div>
    <Nav/>
    <MovieDetails/>
    <MovieInfo/>
    <Recommendations/>
    </div>
  );
}

export default Index
