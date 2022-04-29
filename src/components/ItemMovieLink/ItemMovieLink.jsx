import React from "react";
import { MovieLink, MovieLinkWrapper } from 'components/ItemMovieLink/ItemMovieLink.styled';


export const ItemMovieLink = ({id, children}) => {
    return (
        <MovieLinkWrapper> 
            <MovieLink to={`/movies/${id}`} className="movie-item-link">{children}</MovieLink>;
        </MovieLinkWrapper>
    )
};
