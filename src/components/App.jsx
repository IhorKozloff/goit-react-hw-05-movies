import React from "react";
import { Routes, Route } from "react-router-dom";
import { UpSideBar } from 'components/Views/UpSideBar';
import { Trending } from 'components/Trending/Trending';
import { MoviesView } from 'components/Views/MoviesView';
import { MovieDetailsView } from "components/Views/MovieDetailsView";
import { Cast } from 'components/Cast/Cast';
import { Reviews } from 'components/Reviews/Reviews';


export const App = () => {

  return (
    <>
     <Routes>
        <Route path="/" element={<UpSideBar/>}>
          <Route index element={<Trending/>}/>
          
          <Route path="movies" element={<MoviesView/>}/>
          <Route path="movies/:movieId" element={<MovieDetailsView/>}>
            <Route path="cast" element={<Cast/>}></Route>
            <Route path="reviews" element={<Reviews/>}></Route>
          </Route>
          
        </Route>
        
      </Routes>
    

     
    </>
  );
};
