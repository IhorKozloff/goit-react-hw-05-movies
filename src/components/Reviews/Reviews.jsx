import { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { ReviewsWrapper } from 'components/Reviews/Reviews.styled';
import { searchAPIReviews } from 'components/API';

export const Reviews = () => {
    
  const [reviewsData, setReviewsData] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    searchAPIReviews(movieId).then(data => {
        setReviewsData(data.results);
    });
  },[movieId]);
    

    return (
        <>
            {reviewsData && <ReviewsWrapper>
                <ul>
                    {reviewsData.map(item => {
                        return (
                            <li key={item.id}>
                                <h4>Author:{item.author}</h4>
                                <p>{item.content}</p>
                            </li>
                        )
                    })}
                </ul>
            </ReviewsWrapper>}
        </>
    )
}