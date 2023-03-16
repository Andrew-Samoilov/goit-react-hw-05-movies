import { Link, useLocation } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { getSearchMovie } from "../services/MoviesAPI";
import { SearchBox } from "../components/SearchBox";
import { useEffect, useState } from "react";

export const MovieSearch = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const srcPararm = searchParams.get("name") ?? "";

    const [movies, setMovies] = useState([]);
    const [error, setError] = useState('');

    const updateQueryString = (name) => {
        const nextParams = name !== "" ? { name } : {};
        setSearchParams(nextParams);
    };

    useEffect(() => {
        // console.log("Mouting phase: same when componentDidMount runs");
        getSearchMovie(searchParams)
            .then((mve) => {
                console.log(mve);
                setMovies(mve);
            })
            .catch((err) => {
                setError(err);
                console.log('error :>> ', error);
            });
    }, [error, searchParams]);

    const location = useLocation();

    const mList = () => {
        console.log(movies);
        if (movies.total_results) {
            return movies.results.map(({ id, title }) => (
                <Link to={`/movies/${id}`} state={{ from: location }}>
                    <li key={Math.random() * id}>
                        {title}
                    </li>
                </Link>))
        }
    }
    
    return (
        <div>
            <SearchBox value={srcPararm} onChange={updateQueryString} />
            <ul>{mList()}</ul>
        </div>
    );

}