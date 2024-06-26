import axios from 'axios';

const API_URL = 'https://cineroll.app/api/movie/daily-movies';

export const fetchDailyMovies = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching daily movies:', error);
        throw error;
    }
};