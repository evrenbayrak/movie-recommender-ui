import React from 'react';
import styled from 'styled-components';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTranslation } from 'react-i18next';

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
    background: #f8f9fa; /* Changed to a soft color */
    border-radius: 8px;
    max-width: 800px;
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
    overflow-y: auto;

    @media (max-width: 768px) {
        padding-left: 0;
    }
`;

const Poster = styled.img`
    height: 100%;
    max-height: 400px;
    border-radius: 8px;
    margin-bottom: 20px;

    @media (max-width: 768px) {
        display: none; /* Hide poster on mobile */
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
    text-align: left; /* Left-align text */
`;

const Info = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin: 8px 0;
    font-size: 0.9rem;
    color: #555;
    background-color: #e0e0e0ab; /* Background color */
    padding: 8px;
    border-radius: 4px;
`;

const Overview = styled.p`
    text-align: left;
    margin: 16px 0;
    max-height: 200px; /* Set a max height for the overview */
    overflow-y: auto; /* Make it scrollable */
`;

const IMDbLink = styled.a`
    display: inline-block;
    font-size: 0.8rem;
    font-weight: bold;
    color: #f5c518; /* IMDb yellow color */
    text-decoration: none;
    border: 1px solid #f5c518; /* Add a border to IMDb link */
    padding: 2px 6px; /* Add some padding */
    border-radius: 4px; /* Add rounded corners */
    
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
    const { t, i18n } = useTranslation();
    const movieDetail = movie.movie;
    if (!show) return null;

    const getFormattedRuntime = (runtime) => {
        const hours = Math.floor(runtime / 60);
        const minutes = runtime % 60;
        let formattedRuntime;
        if (minutes === 0) {
            formattedRuntime = t('runtime_hours_only', { hours });
        } else {
            formattedRuntime = t('runtime_hours_minutes', { hours, minutes });
        }
        return formattedRuntime;
    };

    const releaseYear = new Date(movieDetail.releaseDate).getFullYear();
    const formattedRuntime = getFormattedRuntime(movieDetail.runtime);
    
    return (
        <Overlay>
            <ModalContainer>
                {!isMobile && (
                    <Poster src={`https://image.tmdb.org/t/p/w500${movieDetail.posterPath}`} alt={movie.title} />
                )}
                <InfoContainer>
                    <CloseButton onClick={onClose}>&times;</CloseButton>
                    <Title>{i18n.language === 'en' ? movieDetail.title : movie.title} </Title>
                    <SubInfo>{movieDetail.originalLanguage} | {movieDetail.originalTitle}</SubInfo>
                    {movie.tagline && <Tagline>"{i18n.language === 'en' ? movieDetail.tagline : movie.tagline} "</Tagline>}
                    <Info>
                        <div>{releaseYear}</div>
                        <div>{formattedRuntime}</div>
                        <div>⭐ {movieDetail.overallRating.toFixed(1)}</div>
                        <IMDbLink href={`https://www.imdb.com/title/${movieDetail.imdbId}`} target="_blank" rel="noopener noreferrer">
                           IMDb
                        </IMDbLink>
                    </Info>
                    {movieDetail.director !== 'N/A' && <SubInfo><strong>{t('director')}:</strong> {movieDetail.director}</SubInfo>}
                    {movieDetail.writer !== 'N/A' && <SubInfo><strong>{t('writer')}:</strong> {movieDetail.writer}</SubInfo>}
                    {movieDetail.actors !== 'N/A' && <SubInfo><strong>{t('actors')}:</strong> {movieDetail.actors}</SubInfo>}
                    <Overview><strong>{t('overview')}:</strong> {i18n.language === 'en' ? movieDetail.overview : movie.overview} </Overview>
                </InfoContainer>
            </ModalContainer>
        </Overlay>
    );
};

export default Modal;