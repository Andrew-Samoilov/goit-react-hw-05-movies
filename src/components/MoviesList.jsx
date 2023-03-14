import { getTrendingMovies } from "../services/getTrendingMovies";
import { useEffect, useState } from "react";

export const MoviesList = ({onClick}) => {
    const [movies, setMuvies] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        // console.log("Mouting phase: same when componentDidMount runs");
        getTrendingMovies()
            .then((mve) => {
                console.log(mve);
                setMuvies(mve);
            })
            .catch((err) => {

                setError(err);
                console.log('error :>> ', error);
            });
    }, []);

    return (
        <ul>
            {movies.map(({ id, title }) => (
                <li key={id}
                    onClick={() => onClick(id)}
                >{title}</li>
            ))
            }
        </ul>
    );

}