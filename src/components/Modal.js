import React from 'react';
import styled from 'styled-components';
import useMediaQuery from '@mui/material/useMediaQuery';

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

const ModalContainer = styled.div`
    background: white;
    border-radius: 8px;
    max-width: 800px; /* Reduced the max-width */
    width: 80%;
    height: auto;
    max-height: 80%;
    padding: 20px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    position: relative;

    @media (max-width: 768px) {
        flex-direction: column;
        max-width: 95%;
        width: 95%;
        padding: 10px;
    }
`;

const CloseButton = styled.button`
    background: none;
    border: none;
    font-size: 1.5rem;
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
`;

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    padding-left: 20px;

    @media (max-width: 768px) {
        padding-left: 0;
    }
`;

const Poster = styled.img`
    height: 100%;
    max-height: 400px; /* Set maximum height for the poster */
    border-radius: 8px;
    margin-bottom: 20px;

    @media (max-width: 768px) {
        width: 100%;
        height: auto;
        max-height: none;
    }
`;

const Title = styled.h2`
    font-size: 1.5rem;
    margin: 16px 0;
`;

const SubInfo = styled.p`
    font-size: 0.9rem;
    color: #777;
    margin: 4px 0;
`;

const Info = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    margin: 8px 0;
    font-size: 0.9rem;
    color: #555;
`;

const Overview = styled.p`
    text-align: left;
    margin: 16px 0;
`;

const IMDbLink = styled.a`
    display: inline-block;
    margin-top: 16px;
    font-size: 0.9rem;
    font-weight: bold;
    color: #f5c518; /* IMDb yellow color */
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;

const Tagline = styled.p`
    font-style: italic;
    color: #555;
    margin: 8px 0;
`;

const Modal = ({ show, onClose, movie }) => {
    const isMobile = useMediaQuery('(max-width: 768px)');

    if (!show) return null;

    const getFormattedRuntime = (runtime) => {
        const hours = Math.floor(runtime / 60);
        const minutes = runtime % 60;
        return hours > 0 ? `${hours}h ${minutes}m` : `${minutes}m`;
    };

    const releaseYear = new Date(movie.releaseDate).getFullYear();
    const formattedRuntime = getFormattedRuntime(movie.runtime);

    return (
        <Overlay>
            <ModalContainer>
                {!isMobile && (
                    <Poster src={`https://image.tmdb.org/t/p/w500${movie.posterPath}`} alt={movie.title} />
                )}
                <InfoContainer>
                    <CloseButton onClick={onClose}>&times;</CloseButton>
                    <Title>{movie.title}</Title>
                    <SubInfo>{movie.originalLanguage} | {movie.originalTitle}</SubInfo>
                    {movie.tagline && <Tagline>"{movie.tagline}"</Tagline>}
                    <Info>
                        <div>Release Date: {releaseYear}</div>
                        <div>Runtime: {formattedRuntime}</div>
                        <div>Rating: ⭐ {movie.overallRating.toFixed(1)}</div>
                    </Info>
                    <Overview><strong>Overview:</strong> {movie.overview}</Overview>
                    {movie.director !== 'N/A' && <SubInfo><strong>Director:</strong> {movie.director}</SubInfo>}
                    {movie.writer !== 'N/A' && <SubInfo><strong>Writer:</strong> {movie.writer}</SubInfo>}
                    {movie.actors !== 'N/A' && <SubInfo><strong>Actors:</strong> {movie.actors}</SubInfo>}
                    <IMDbLink href={`https://www.imdb.com/title/${movie.imdbId}`} target="_blank" rel="noopener noreferrer">
                        View on IMDb
                    </IMDbLink>
                </InfoContainer>
            </ModalContainer>
        </Overlay>
    );
};

export default Modal;