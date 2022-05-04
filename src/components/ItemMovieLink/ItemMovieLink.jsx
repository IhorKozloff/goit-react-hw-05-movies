import React from "react";
import { MovieLink, MovieLinkWrapper } from 'components/ItemMovieLink/ItemMovieLink.styled';
import PropTypes from 'prop-types';




export const ItemMovieLink = ({id, state, children}) => {
    return (
        <MovieLinkWrapper> 
            <MovieLink to={`/movies/${id}`} state={state} className="movie-item-link">{children}</MovieLink>;
        </MovieLinkWrapper>
    )
};

ItemMovieLink.propTypes = {
    id: PropTypes.number.isRequired,
    state: PropTypes.object.isRequired,
    children: PropTypes.string.isRequired,
};