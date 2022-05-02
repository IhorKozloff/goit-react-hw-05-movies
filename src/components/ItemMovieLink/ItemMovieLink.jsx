import React from "react";
import { MovieLink, MovieLinkWrapper } from 'components/ItemMovieLink/ItemMovieLink.styled';



export const ItemMovieLink = ({id, state, children}) => {
    return (
        <MovieLinkWrapper> 
            <MovieLink to={`/movies/${id}`} state={state} className="movie-item-link">{children}</MovieLink>;
        </MovieLinkWrapper>
    )
};
