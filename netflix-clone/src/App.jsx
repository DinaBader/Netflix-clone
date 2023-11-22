import React from "react";
import MoviesBrowse from "./pages/MoviesBrowse";
import MovieDetailsPage from "./pages/MovieDetails";
import LandingPage from "./pages/LandingPage";

import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<LandingPage />} path="/" />
          <Route element={<MoviesBrowse />} path="/browse-movies" />
          <Route element={<MovieDetailsPage />} path="/movie-details/:id" />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
