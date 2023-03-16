import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "../services/MoviesAPI";

export const Reviews = () => {
    const { id } = useParams();

    const [review, setReview] = useState([]);
    const [error, setError] = useState('');

    // console.log({ review });

    useEffect(() => {
        // console.log("Mouting phase: same when componentDidMount runs");
        getMovieReviews(id)
            .then((mve) => {
                console.log(mve);
                setReview(mve);
            })
            .catch((err) => {
                setError(err);
                console.log('error :>> ', error);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    let mReviews = () => {
        if (review.results) {
            return (
                review.results.map(a => <li key={a.id}>
                    <h3>{a.author}</h3>
                    <p>{a.content}</p>
                </li>)
            );
        } else {
            // console.log(`We don't have any reviews for this movie.`);
            return <li key={1}>`We dont have any reviews for this movie.`</li>;
        }

    }

    return (
        <section>
            <h2>Reviews</h2>
            <ul>
                {mReviews()}
            </ul>
        </section>
    );
};
