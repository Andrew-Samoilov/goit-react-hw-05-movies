import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { getMovieById } from "../services/MoviesAPI";


export const MoviesDetails = () => {
    const { id } = useParams();
    // const movie = getMovieById(id);

    const [movie, setMovie] = useState([]);
    const [error, setError] = useState('');

    console.log({ movie });

    useEffect(() => {
        // console.log("Mouting phase: same when componentDidMount runs");
        getMovieById(id)
            .then((mve) => {
                console.log(mve);
                setMovie(mve);
            })
            .catch((err) => {
                setError(err);
                console.log('error :>> ', error);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    let mGenres = () => {
        // console.log(movie.genres);
        if (movie.genres) {
            return movie.genres.map(g => <span key={g.id}>{g.name} </span>);
        }
    }

    return (
        <main>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={`${movie.poster_path}`} />
            <h2>{movie.original_title} ({movie.release_date && movie.release_date.slice(0, 4)})</h2>
            <i>{movie.tagline}</i>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
            <h3>Genres</h3>
            <p>{mGenres()}</p>
            <ul>
                <li>
                    <Link to="cast">Read about our Cast</Link>
                </li>
                <li>
                    <Link to="reviews">Read reviews</Link>
                </li>
            </ul>
            <Outlet />

        </main>
    );
};