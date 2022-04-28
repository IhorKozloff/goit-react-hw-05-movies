import React from "react";
import { Routes, Route } from "react-router-dom";
import { UpSideBar } from 'components/Views/UpSideBar';
import { Trending } from 'components/Trending/Trending';
import { MoviesView } from 'components/Views/MoviesView';
import { MovieDetails } from "components/MovieDetails/MovieDetails";



export const App = () => {

  return (
    <>
     <Routes>
        <Route path="/" element={<UpSideBar/>}>
          <Route index element={<Trending/>}/>
          
          <Route path="movies" element={<MoviesView/>}/>
          <Route path="movies/:movieId" element={<MovieDetails/>}/>
          
        </Route>
        
      </Routes>
    

     
    </>
  );
};
