import axios from 'axios';

const API_URL = 'https://cineroll.app/api/movie/daily-movies';

export const fetchDailyMovies = async () => {
    try {
        let language = navigator.language || navigator.userLanguage || 'en'; // Default to 'en' if browser language is not available
        language = language.split('-')[0]; // Extract the language code without region (e.g., 'en-US' -> 'en')

        const response = await axios.get(API_URL, {
            headers: {
                'Accept-Language': language,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching daily movies:', error);
        throw error;
    }
};