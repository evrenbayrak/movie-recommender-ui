import React, { useState } from 'react';
import styled from 'styled-components';

const Card = styled.div`
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 16px;
    margin: 8px;
    width: 80%;
    max-width: 300px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background-color: #f8f9fa;
    transition: transform 0.2s, box-shadow 0.2s, width 0.3s, max-width 0.3s;

    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 4px 16px rgba(0,0,0,0.2);
        cursor: pointer;
    }

    &.expanded {
        max-width: 800px;
    }

    img {
        max-width: 100%;
        height: 350px;
        object-fit: cover;
        border-radius: 8px;
    }

    h3 {
        font-size: 1.25rem;
        margin: 8px 0;
    }

    .rating {
        margin: 8px 0;
        font-weight: bold;
    }

    .details {
        display: ${props => (props.show ? 'block' : 'none')};
        text-align: left;
        width: 100%;
        padding: 10px;
    }

    .details p {
        margin: 4px 0;
    }
`;

const Genre = styled.h2`
    font-size: 1.25rem;
    margin-bottom: 16px;
    color: #007bff;
`;

const MovieCard = ({ movie, genreName, isExpanded, onCardClick }) => {
    return (
        <Card className={isExpanded ? 'expanded' : ''} onClick={onCardClick} show={isExpanded}>
            <Genre>{genreName}</Genre>
            <img src={`https://image.tmdb.org/t/p/w500${movie.posterPath}`} alt={movie.title} />
            <h3>{movie.title}</h3>
            <div className="rating">Rating: {movie.voteAverage.toFixed(2)}</div>
            <div className="details">
                <p><strong>Release Date:</strong> {movie.releaseDate}</p>
                <p><strong>Overview:</strong> {movie.overview}</p>              
                <p><strong>Original Language:</strong> {movie.originalLanguage}</p>
                <p><strong>Original Title:</strong> {movie.originalTitle}</p>
                <p><strong>Vote Count:</strong> {movie.voteCount}</p>
            </div>
        </Card>
    );
};

export default MovieCard;