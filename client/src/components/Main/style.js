import styled from 'styled-components';

export const MainWrapper = styled.main`
  display: flex;
  justify-content: center;

  padding: 1.5rem;
  
  color: #333;
  font-size: 2rem;
  font-weight: bold;
`;

export const ClickerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ClickerHeader = styled.h3`
  color: palevioletred;
`;

export const ClickBtn = styled.button`
  padding: 0 2rem;
  
  font-weight: bold;
  color: palevioletred;
  border: 2px solid palevioletred;
  border-radius: 4px;

  background-color: #fff;

  cursor: pointer;

  :focus {
    outline: none;
  }
  :active {
    background-color: papayawhip;
  }
`;
