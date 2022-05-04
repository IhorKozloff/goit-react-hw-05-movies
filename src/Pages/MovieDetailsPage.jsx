import { useEffect, useState } from 'react';
import { MovieDetails } from 'components/MovieDetails/MovieDetails';
import { AddInform } from 'components/AddInform/AddInform';
import { GoBackBtn } from 'components/GoBackBtn';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';


export default function MovieDetailsPage () {

    const location = useLocation();
    const navigate = useNavigate();
    const [backLink, setBackLink] = useState('');

    useEffect(() => {
       if(backLink !== '') {
            return
       };
       setBackLink(location?.state?.from ?? '/')
    },[backLink, location?.state?.from])
     
    
    const onBackClick = () => {
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
