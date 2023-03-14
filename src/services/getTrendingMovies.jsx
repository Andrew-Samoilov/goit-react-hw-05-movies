import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/'
const API_KEY = '50540b41e66ef631d8d57e13679f9024'

export const getTrendingMovies = () => {
    return axios
        .get(`${BASE_URL}trending/movie/week?api_key=${API_KEY}`)
        .then(response => response.data.results);
};

// https://api.themoviedb.org/3/trending/movie/week?api_key=50540b41e66ef631d8d57e13679f9024