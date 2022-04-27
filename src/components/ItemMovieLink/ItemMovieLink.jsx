import React from "react";
import { MovieLink } from 'components/ItemMovieLink/ItemMovieLink.styled';


export const ItemMovieLink = ({children}) => {
    return (
        <li> 
            <MovieLink to="/movies/:movieId" className="movie-item-link">{children}</MovieLink>;
        </li>
    )
};
