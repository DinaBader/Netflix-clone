import React from "react";
import MoviesBrowse from "../../pages/MoviesBrowse";
import MovieDetailsPage from "../../pages/MovieDetails";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" component={MoviesBrowse} />
        <Route path="/movie-details/:id" component={MovieDetailsPage} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
