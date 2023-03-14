import { MoviesList } from "../components/MoviesList";
export const Home = () => {

    const handleClick = (id) => {
        console.log(id);
    }

    return (
        <main>
            <h1>Trending today</h1>
            <MoviesList onClick={handleClick} />
        </main>
    );
};
