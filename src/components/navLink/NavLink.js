import React from 'react';
import PropTypes from 'prop-types';
import { StyledNavLink } from './NavLink.styled';

const NavLink = ({
  Icon, 
  title, 
  ...props 
}) => {

  const hasTitle = title === undefined ? false : true;

  return (
    <StyledNavLink hasTitle={hasTitle} {...props}>
      <Icon className="navLink-icon" size="20px" />
      {title}
    </StyledNavLink>
  )
}

NavLink.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  title: PropTypes.string
}

export default NavLink;