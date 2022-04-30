import React, {useState, useEffect} from "react"
import { SearchBar } from 'components/SearchingBar/SearchBar';
import { searchAPIByName } from 'components/API';
import { ItemMovieLink } from 'components/ItemMovieLink/ItemMovieLink';

export const MoviesPage = () => {
    const [movieTitle, setmovieTitle] = useState('');
    const [movieList, setmovieList] = useState(null);

    useEffect(() => {
        if(movieTitle !== ''){
            searchAPIByName(movieTitle, 1).then(data => {
                setmovieList(data.results)
            });
        }
        
    },[movieTitle])

return (
    <>
        <SearchBar setmovieTitle={setmovieTitle} setmovieList={setmovieList}/>
        {movieList && 
            <ul className='search-movie-list'>
                {movieList.map(({id, original_title}) => <ItemMovieLink key={id} id={id}>{original_title}</ItemMovieLink>)}
            </ul>
        }
    </>
)

};