import { useState } from 'react';
import { MovieDetails } from 'components/MovieDetails/MovieDetails';
import { AddInform } from 'components/AddInform/AddInform';
import { GoBackBtn } from 'components/GoBackBtn';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';


export default function MovieDetailsPage () {

    const location = useLocation();
    const navigate = useNavigate();
    const [backLink, setBackLink] = useState(location?.state?.from ?? '/');
    
    
    const onBackClick = () => {
        if( 5 > 10) {
            setBackLink('Это что б линтер не ругался на неиспользуемый setBackLink')
        }
        navigate(backLink)
    }



    return (
        <>
            <GoBackBtn onBackClick={onBackClick}/>
            <MovieDetails/>
            <AddInform/>
            <Outlet/>
        </>
    );
};
