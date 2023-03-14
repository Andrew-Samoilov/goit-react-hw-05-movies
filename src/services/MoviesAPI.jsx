import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/'
const API_KEY = '50540b41e66ef631d8d57e13679f9024'

export const getTrendingMovies = async () => {
    const response = await axios
        .get(`${BASE_URL}trending/movie/week?api_key=${API_KEY}`);
    return response.data.results;
// https://api.themoviedb.org/3/trending/movie/week?api_key=50540b41e66ef631d8d57e13679f9024
};

export const getMovieById = async (id) => {
    const response = await axios
        .get(`${BASE_URL}movie/${id}?api_key=${API_KEY}&language=en-US`);
    console.log(response.data);
    return response.data;
// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
}
