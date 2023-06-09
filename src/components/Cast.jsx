import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../services/MoviesAPI";

const Cast = () => {
    const { id } = useParams();

    const [cast, setCast] = useState([]);
    const [error, setError] = useState('');

    console.log({ cast });

    useEffect(() => {
        // console.log("Mouting phase: same when componentDidMount runs");
        getMovieDetails(id)
            .then((mve) => {
                console.log(mve);
                setCast(mve);
            })
            .catch((err) => {
                setError(err);
                console.log('error :>> ', error);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    let mCast = () => {
        if (cast.cast) {
            return (cast.cast.map(a => <li key={a.id + a.credit_id}>
                <h3>{a.original_name}</h3>
                {a.profile_path && (<img src={`https://image.tmdb.org/t/p/w500/${a.profile_path}`} alt={`${a.original_name}`} />)}
                
                <p>Character: {a.character}</p>
            </li>));
        }
    }

    return (
        <section>
            <h2>Our Cast</h2>
            <ul>
            {mCast()}
            </ul>     
        </section>
    );
};

export default Cast;
