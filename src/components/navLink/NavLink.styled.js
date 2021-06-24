import styled from 'styled-components';

export const StyledNavLink = styled.a`
  display: flex;
  align-items: center;
  letter-spacing: 4px;
  text-transform: uppercase;
  font-size: 16px;
  .navLink-icon {
    margin-right: ${({ hasTitle }) => hasTitle ? '10px' : '0'};
  }
`;