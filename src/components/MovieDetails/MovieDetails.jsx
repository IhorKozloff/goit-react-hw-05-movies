import { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { searchAPIById } from 'components/API';

export const MovieDetails = () => {
    const { movieId } = useParams();
    const [data, setData] = useState(null)


    // searchAPIById(Number(movieId)).then(responseData => {
    //     console.log(responseData)
    //     setData(responseData)
    // })

    useEffect(() => {
        searchAPIById(movieId).then(responseData => {
                console.log(responseData)
                setData(responseData)
            })
    },[movieId]) 

    
    const imageLinkCreator = (dataLink) => {
        return ["https://image.tmdb.org/t/p/w300", dataLink].join("");
    };

    const genresCreator = (genres) => {
        return genres.map(item => item.name).join(" ");
    };
    // const {poster_path, original_title, overview, release_date, genres, vote_average} = data;
    return (
        

        <>
            {data && 
                <div className="movie-detales-wrapper">

                    <img src={imageLinkCreator(data.poster_path)} alt="poster" width="280" height="398"></img>
                    
                    <div className="movie-detales-inform">
                        <p>
                            {data.original_title}
                            <span>
                                {data.release_date}
                            </span>
                        </p>
                        <p>User Score:{data.vote_average * 10}%</p>
                        <h3>Overview</h3>
                        <p>{data.overview}</p>
                        <h4>Genres</h4>
                        <span>
                            {genresCreator(data.genres)}
                        </span>
                    </div>
                </div>
            }
        </>
    )
};
// {poster_path, original_title, overview, release_date, genres, vote_count}