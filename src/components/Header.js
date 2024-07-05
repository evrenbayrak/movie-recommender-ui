import React from 'react';
import styled from 'styled-components';
import LanguageSwitcher from './LanguageSwitcher';
import logo from '../assets/cineroll-icon.png';


const HeaderContainer = styled.header`
  background-color: #f5f5f5;
  color: #333;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ddd;
  font-family: 'Helvetica Neue', Arial, sans-serif;

`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  height: 90px;
  margin-right: 10px;

  @media (max-width: 600px) {
    height: 50px;
    margin-right: 0;
  }
`;


const DateDisplay = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
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
        </TitleContainer>
        <DateDisplay><LanguageSwitcher />{today}</DateDisplay>
      </HeaderContainer>
    );
  };

export default Header;