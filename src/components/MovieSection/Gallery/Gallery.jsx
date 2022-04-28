import { ItemMovieLink } from 'components/ItemMovieLink/ItemMovieLink';



export const Gallery = ({data}) => {
    // console.log(data)
    return (
        <ul className='search-movie-list'>
            {data.map(({id, original_title}) => <ItemMovieLink key={id} id={id}>{original_title}</ItemMovieLink>)}
        </ul>
    );
};
