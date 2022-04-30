import React, {useState, useEffect} from "react"
import { searchAPITop } from 'components/API';
import { ItemMovieLink } from 'components/ItemMovieLink/ItemMovieLink';

export const Trending = () => {
    const [trendingList, setTrendingList] = useState([]);

   
    useEffect(() => {

        searchAPITop(1).then(data => {
            setTrendingList(data.results);
        });

    },[])

    return (
        <>
            <h2>Trending</h2>
            <ul>
                {trendingList.map(({id, original_title}) => <ItemMovieLink key={id} id={id}>{original_title}</ItemMovieLink>)}
            </ul>
        </>
    );
};