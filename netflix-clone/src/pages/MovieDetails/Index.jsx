import React from "react";
import "./style.css";
import Nav from "../../components/common/Nav";
import Recommendations from "../../components/common/Recommendations/Index";
import MovieInfo from "../../components/common/Movie-Information/Index";
import MovieDetails from "../../components/common/Movie-Details/Index";
import ComingSoon from "../../components/common/Coming-soon";
import { useParams } from "react-router-dom";
import Wrapper from "../../components/common/Wrapper/Index";
import VideoClip from "../../components/common/Video-clip/Index";

function MovieDetailsPage() {
  const { id } = useParams();
  console.log("test test testtesttesttesttesttest=" + id);

  return (
    <div>
      <Nav />
      <MovieDetails id={id} />
      <Wrapper />
      <VideoClip />
      <MovieInfo />
      <Recommendations />
      <ComingSoon />
    </div>
  );
}

export default MovieDetailsPage;
