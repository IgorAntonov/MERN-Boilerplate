import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-left: 1.1rem;
  padding-right: 1.1rem;
  
  background-color: papayawhip;
`;


export const Title = styled.h1.attrs({
  children: 'Webpack Boilerplate'
})`
  color: palevioletred; 
`;

export const GHLink = styled.a.attrs({
  href: 'https://github.com/IgorAntonov/Webpack-Bolierplate',
  children: 'GitHub'
})`
  
  color: #000;
  font-weight: bold;
  font-size: 1.2rem;

  :hover {
    color: palevioletred;
    text-decoration: none;
  }
`;

