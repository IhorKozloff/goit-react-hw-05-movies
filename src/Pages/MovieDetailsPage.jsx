import { MovieDetails } from 'components/MovieDetails/MovieDetails';
import { AddInform } from 'components/AddInform/AddInform';
import { Outlet } from 'react-router-dom';

export const MovieDetailsPage = () => {
    return (
        <>
            <MovieDetails/>
            <AddInform/>
            <Outlet/>
        </>
    );
};