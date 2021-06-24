import styled from 'styled-components';

export const StyledNavbar = styled.nav`
  padding: 20px 0 20px 0;
  .navbar-container {
    display: flex;
    height: 26px;
    align-items: flex-start;
    justify-content: flex-end;
    
    .nav-links {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      a {
        margin: 0 20px;
        text-decoration: none;
        transition: color 0.1s linear;
        color: ${({ theme }) => theme.button};
        &:hover {
          color: ${({ theme }) => theme.buttonHover};
        }
      }
    }
    .nav-toggle {
      flex: 1;
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
    .nav-menu {
      height: 100%;
      color: ${({ theme }) => theme.title};
    }
  }
`;