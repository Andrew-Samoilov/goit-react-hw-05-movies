import { Link, useLocation } from "react-router-dom";
import { getTrendingMovies } from "../services/MoviesAPI";
import { useEffect, useState } from "react";

export const MoviesList = () => {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        // console.log("Mouting phase: same when componentDidMount runs");
        getTrendingMovies()
            .then((mve) => {
                console.log(mve);
                setMovies(mve);
            })
            .catch((err) => {
                setError(err);
                console.log('error :>> ', error);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const location = useLocation();

    return (
        <ul>
            {movies.map(({ id, title }) => (
                <Link to={`/movies/${id}`} state={{ from: location }}>
                    <li key={Math.random() * id}>
                        {title}
                    </li>
                </Link>
            ))
            }
        </ul>
    );

}