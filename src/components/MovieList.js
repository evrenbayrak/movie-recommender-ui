import React, { useEffect, useState } from 'react';
import { fetchDailyMovies } from '../services/movieService';
import MovieCard from './MovieCard';
import styled from 'styled-components';

const List = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 16px;
    padding: 16px;
`;

const genreNames = {
    ACTION_ADVENTURE: "Action & Adventure",
    DRAMA_CRIME: "Drama & Crime",
    FAMILY_ANIMATION: "Family & Animation",
    HORROR_THRILLER: "Horror & Thriller",
    COMEDY_ROMANCE: "Comedy & Romance"
};

const MovieList = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getMovies = async () => {
            try {
                const data = await fetchDailyMovies();
                setMovies(data);
                setLoading(false);
            } catch (error) {
                setError('Failed to fetch movies');
                setLoading(false);
            }
        };

        getMovies();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <List>
            {movies.map(movie => (
                <MovieCard 
                    key={movie.id} 
                    movie={movie} 
                    genreName={genreNames[movie.genreGroup]} 
                />
            ))}
        </List>
    );
};

export default MovieList;