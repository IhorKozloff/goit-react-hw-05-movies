import React, {useState, useEffect} from "react"
import { useLocation } from "react-router-dom";

import { searchAPITop } from 'components/API';
import { ItemMovieLink } from 'components/ItemMovieLink/ItemMovieLink';

export const HomePage = () => {
    const [trendingList, setTrendingList] = useState([]);
    const location = useLocation();
   
    useEffect(() => {

        searchAPITop(1).then(data => {
            setTrendingList(data.results);
        });

    },[])

    return (
        <>
            <h2>Trending</h2>
            <ul>
                {
                    trendingList.map(({id, original_title}) => 
                        <ItemMovieLink id={id} key={id} state={{from: location}}
                        >
                            {original_title}
                        </ItemMovieLink>)
                }
            </ul>
        </>
    );
};