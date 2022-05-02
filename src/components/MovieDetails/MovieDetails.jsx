import { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { searchAPIById } from 'components/API';

import { MovieDetalesWrapper, MovieDetalesInform } from 'components/MovieDetails/MovieDetails.styled'

export const MovieDetails = () => {
    const { movieId } = useParams();
    const [data, setData] = useState(null)
    


    useEffect(() => {
        searchAPIById(movieId).then(responseData => {
                setData(responseData)
            })
    },[movieId]) 


    const genresCreator = (genres) => {
        return genres.map(item => item.name).join(" ");
    };

    return (
        

        <>

            {data && 
                <MovieDetalesWrapper className="movie-detales-wrapper">

                    <img 
                        src={`https://image.tmdb.org/t/p/w300${data.poster_path}`} 
                        alt="poster" 
                        width="280" 
                        height="398"
                    />
                    
                    <MovieDetalesInform className="movie-detales-inform">
                        <p>
                            {data.original_title}
                            <span>
                                ({data.release_date.slice(0, 4)})
                            </span>
                        </p>
                        <p>User Score:{data.vote_average * 10}%</p>

                        <h3>Overview</h3>
                        <p>{data.overview}</p>

                        <h4>Genres</h4>
                        <span>
                            {genresCreator(data.genres)}
                        </span>
                    </MovieDetalesInform>
                </MovieDetalesWrapper>
            }
        </>
    )
};
