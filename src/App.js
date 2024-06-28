import React from 'react';
import MovieList from './components/MovieList';
import Header from './components/Header';
import styled from 'styled-components';
import './index.css';

const Container = styled.div`
  text-align: center;
  padding: 10px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Footer = styled.footer`
  text-align: center;
  margin-top: 10px;
  font-size: 0.9rem;

  a {
    color: #007bff;
    text-decoration: none;
  }
`;

const App = () => {
  return (
    <Container>
      <Header />
      <MovieList />
      <Footer>
        Movie data taken from <a href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer">TMDb</a>.
      </Footer>
    </Container>
  );
};

export default App;