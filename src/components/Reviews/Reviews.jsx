import { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { ReviewsWrapper } from 'components/Reviews/Reviews.styled';
import { searchAPIReviews } from 'components/API';

export default function Reviews () {
    
  const [reviewsData, setReviewsData] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    searchAPIReviews(movieId).then(data => {
        // if (data.results.lenth === 0) {
        //     setReviewsData([{id:'none', author:'', content:''}]);
        // }
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
            {
                reviewsData && reviewsData.length === 0 &&

                <ReviewsWrapper>
                    <p>We don't have any reviews for this movie.</p>
                </ReviewsWrapper>
            }
        </>
    )
}