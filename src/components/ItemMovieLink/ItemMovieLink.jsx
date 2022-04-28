import React from "react";
import { MovieLink } from 'components/ItemMovieLink/ItemMovieLink.styled';


export const ItemMovieLink = ({id, children}) => {
    return (
        <li> 
            <MovieLink to={`/movies/${id}`} className="movie-item-link">{children}</MovieLink>;
        </li>
    )
};
