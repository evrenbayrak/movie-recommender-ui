import React, { useState } from 'react';
import styled from 'styled-components';
import RatingScore from './RatingScore';
import RuntimeComponent from './RuntimeComponent'; 
import Modal from './Modal';
import '../MovieCard.css';


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
        margin: 8px 0;
        font-weight: bold;
    }
`;

const Genre = styled.h2`
    font-size: 0.9rem;
    margin: 8px 0;
    color: #777;
    text-align: center;
`;

const StyledTitle = styled.h3`
    font-size: 1rem;
    margin: 8px 0;
    color: #333;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: baseline;

    .release-year {
        font-size: 0.8rem;
        margin-left: 8px;
        color: #666;
    }
`;

const MovieCard = ({ movie }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const releaseYear = new Date(movie.releaseDate).getFullYear();

    return (
        <>
            <Card onClick={() => setIsModalOpen(true)}>
            <div className="movie-card">
            <div className="poster-container">
                <img src={`https://image.tmdb.org/t/p/w500${movie.posterPath}`} alt={movie.title} />
                <RatingScore rating={movie.overallRating.toFixed(1)} />
                <RuntimeComponent runtime={movie.runtime} />
                </div>
                <Genre>{movie.genreGroup.replace('_', ' & ')}</Genre>
                <StyledTitle>
                    {movie.title}
                {releaseYear && <span className="release-year">({releaseYear})</span>}
                </StyledTitle>
                </div>
            </Card>
            <Modal show={isModalOpen} onClose={() => setIsModalOpen(false)} movie={movie} />
        </>
    );
};

export default MovieCard;