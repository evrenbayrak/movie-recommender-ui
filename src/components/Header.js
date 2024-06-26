import React from 'react';
import styled from 'styled-components';
import logo from '../assets/cineroll-icon.png';

const HeaderContainer = styled.header`
  background-color: #f5f5f5;
  padding: 20px;
  color: #333;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ddd;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

    @media (max-width: 600px) {
    padding: 10px;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  height: 70px;
  margin-right: 10px;

  @media (max-width: 600px) {
    height: 30px;
    margin-right: 0;
  }
`;

const Title = styled.h1`
  font-size: 2.5em;
  margin: 0;
  color: #007bff;

  @media (max-width: 600px) {
    font-size: 1.8em;
  }
`;

const Slogan = styled.p`
  font-size: 1.2em;
  margin: 0;
  color: #555;

  @media (max-width: 600px) {
    font-size: 0.8em;
  }
`;

const DateDisplay = styled.div`
  font-size: 1.2em;
  margin: 0;
  color: #777;

  @media (max-width: 600px) {
    font-size: 0.6em;
    margin-top: 10px;
  }
`;

const Header = () => {
    const today = new Date().toLocaleDateString('en-GB', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  
    return (
      <HeaderContainer>
        <TitleContainer>
          <Logo src={logo} alt="Cineroll Logo" />
          <div>
            <Title>Cineroll</Title>
            <Slogan>Your daily movie advisor</Slogan>
          </div>
        </TitleContainer>
        <DateDisplay>{today}</DateDisplay>
      </HeaderContainer>
    );
  };

export default Header;