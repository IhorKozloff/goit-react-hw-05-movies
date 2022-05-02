import { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { CastWrapper } from 'components/Cast/Cast.styled';
import { searchAPIActors } from 'components/API';


export default function Cast () {
  const [actorsListData, setActorsListData] = useState(null);
  const { movieId } = useParams();
    
    useEffect(() => {
        searchAPIActors(movieId).then(data => {
            setActorsListData(data.cast);
        })
    },[movieId])

    return (
        
        <>
            {actorsListData && <CastWrapper>
                <p>Cast {movieId}</p>
                <ul>
                 {
                    actorsListData.map( item => {
                        return (
                            <li key={item.id}>

                                <img 
                                    src={`https://image.tmdb.org/t/p/original${item.profile_path}`}
                                    width="60"
                                    height="80"
                                    alt=""
                                /> 
                                
                                <p>{item.name}</p>
                                <p>Character: {item.character}</p>
                            </li>
                        )
                    })
                 }
                </ul>
            </CastWrapper>}
        </>
    )
}
//original_name profile_path character