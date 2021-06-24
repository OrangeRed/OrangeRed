import styled from 'styled-components';

export const StyledMenu = styled.nav`
  background: ${({ theme }) => theme.backgroundActive};
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  height: 100%;
  width: 250px;
  position: fixed;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  z-index: 3;
  .menu-header-container {
    padding: 20px 24px 20px 24px;
    
    .menu-close {
      color: ${({ theme }) => theme.title};
      float: right;
    }
  }
  .menu-buttons-container {
    margin-top: 70px;
    display: inline-block;
    width: 100%;
    background-color: ${({ theme }) => theme.background};
    .menu-link {
      display: flex;
      margin-bottom: 2px;
      padding: 20px 0 20px 0;
      justify-content: center;
      background-color: ${({ theme }) => theme.backgroundActive};
    }
    a {
      text-decoration: none;
      transition: color 0.1s linear;  
      height: 30px;
      color: ${({ theme }) => theme.title};
      &:hover {
        color: ${({ theme }) => theme.accent};
      }
    }
  }
`;