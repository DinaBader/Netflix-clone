import React from 'react'
import "./style.css"
import Nav from "../../components/common/Nav"
import Recommendations from "../../components/common/Recommendations/Index" 
import MovieInfo from "../../components/common/Movie-Information/Index"
import MovieDetails from "../../components/common/Movie-Details/Index"
import ComingSoon from "../../components/common/Coming-soon"
function Index() {
  return (
    <div>
    <Nav/>
    <MovieDetails/>
    <MovieInfo/>
    <Recommendations/>
    <ComingSoon/>
    </div>
  );
}

export default Index
