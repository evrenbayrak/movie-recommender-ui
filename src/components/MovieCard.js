import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from './Modal';

const Card = styled.div`
    border: none;
    border-radius: 16px;
    padding: 0;
    margin: 16px;
    width: 100%;
    max-width: 300px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #ffffff;
    transition: transform 0.2s, box-shadow 0.2s;

    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        cursor: pointer;
    }

    img {
        max-width: 100%;
        border-top-left-radius: 16px;
        border-top-right-radius: 16px;
    }

    h3 {
        font-size: 1.25rem;
        margin: 16px 0;
        font-weight: bold;
    }
`;

const Genre = styled.h2`
    font-size: 0.85rem;
    margin: 8px 0;
    color: #777;
    text-align: center;
`;

const Info = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 8px 16px;
    font-size: 0.85rem;
    color: #555;
`;

const StyledTitle = styled.h3`
    font-size: 1rem;
    margin: 8px 0;
    color: #333;
    text-align: center;
`;

const MovieCard = ({ movie }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const getFormattedRuntime = (runtime) => {
        const hours = Math.floor(runtime / 60);
        const minutes = runtime % 60;
        return hours > 0 ? `${hours}h ${minutes}m` : `${minutes}m`;
    };

    const releaseYear = new Date(movie.releaseDate).getFullYear();
    const formattedRuntime = getFormattedRuntime(movie.runtime);

    return (
        <>
            <Card onClick={() => setIsModalOpen(true)}>
                <img src={`https://image.tmdb.org/t/p/w500${movie.posterPath}`} alt={movie.title} />
                <Info>
                    <div>{releaseYear}</div>
                    <div>{formattedRuntime}</div>
                    <div>⭐ {movie.overallRating.toFixed(1)}</div>
                </Info>
                <Genre>{movie.genreGroup.replace('_', ' & ')}</Genre>
                <StyledTitle>{movie.title}</StyledTitle>
            </Card>
            <Modal show={isModalOpen} onClose={() => setIsModalOpen(false)} movie={movie} />
        </>
    );
};

export default MovieCard;