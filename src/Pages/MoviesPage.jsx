import React, {useState, useEffect} from "react"
import { useSearchParams, useLocation } from "react-router-dom";
import { SearchBar } from 'components/SearchingBar/SearchBar';
import { searchAPIByName } from 'components/API';
import { ItemMovieLink } from 'components/ItemMovieLink/ItemMovieLink';

export const MoviesPage = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const [movieList, setmovieList] = useState(null);
    const movieTitle = searchParams.get('query') ?? '';
    const location = useLocation();


 
    useEffect(() => {

        if(movieTitle !== ''){
            
            searchAPIByName(movieTitle, 1).then(data => {
                setmovieList(data.results)
            });  
        }
        
     
    },[movieTitle])

return (
    <>
        <SearchBar setSearchParams={setSearchParams} setmovieList={setmovieList}/>
        {movieList && 
            <ul className='search-movie-list'>
                {movieList.map(({id, original_title}) => <ItemMovieLink key={id} id={id} state={{from: location}}>{original_title}</ItemMovieLink>)}
            </ul>
        }
    </>
)

};

