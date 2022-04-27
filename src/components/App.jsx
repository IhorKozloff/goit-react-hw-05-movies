import React from "react";
import { Routes, Route } from "react-router-dom";
import { UpSideBar } from 'components/Views/UpSideBar';
import { Trending } from 'components/Trending/Trending';
import { MoviesView } from 'components/Views/MoviesView';



export const App = () => {

  return (
    <>
     <Routes>
        <Route path="/" element={<UpSideBar/>}>
          <Route index element={<Trending/>}/>
          <Route path="movies" element={<MoviesView/>}/>
        </Route>
        
      </Routes>
    

     
    </>
  );
};
