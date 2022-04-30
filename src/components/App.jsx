import React from "react";
import { Routes, Route } from "react-router-dom";


import { Layout } from 'Pages/Layout';
import { HomePage } from 'Pages/HomePage';
import { MoviesPage } from 'Pages/MoviesPage';
import { MovieDetailsPage } from 'Pages/MovieDetailsPage';
import { Cast } from 'components/Cast/Cast';
import { Reviews } from 'components/Reviews/Reviews'

export const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<HomePage/>}/>
          <Route path="movies" element={<MoviesPage/>}/>
          <Route path="movies/:movieId" element={<MovieDetailsPage/>}>
            <Route path="cast" element={<Cast/>}></Route>
            <Route path="reviews" element={<Reviews/>}></Route>
          </Route>
        </Route>





      </Routes>
    </>
  );
};

// '/' - компонент <HomePage>, домашняя страница со списком популярных кинофильмов.
// '/movies' - компонент <MoviesPage>, страница поиска фильмов по ключевому слову.
// '/movies/:movieId' - компонент <MovieDetailsPage>, страница с детальной информацией о кинофильме.
// /movies/:movieId/cast - компонент <Cast>, информация о актерском составе. Рендерится на странице <MovieDetailsPage>.
// /movies/:movieId/reviews - компонент <Reviews>, информация об обзорах. Рендерится на странице <MovieDetailsPage>.