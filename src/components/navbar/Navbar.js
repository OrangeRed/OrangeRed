import React from 'react';
import PropTypes from 'prop-types';
import { StyledNavbar } from './Navbar.styled';
import { CgMenu } from 'react-icons/cg';
import NavLink from '../navLink/NavLink';
import NavSwitch from '../navSwitch/NavSwitch';

const Navbar = ({
  // logo,
  links, 
  isMobile, 
  isDarkMode, 
  onSwitchChange, 
  onButtonClick, 
  ...props 
}) => {

  // const navLogo = (
  //   <div className="nav-logo">
  //     <img 
  //       src={logo} 
  //       alt="logo"
  //     />
  //   </div>
  // );

  const navLinkButtons = (
    <div className="nav-links">
      {links.map((link, index) => 
        <NavLink
          key={index} 
          Icon={ link.icon } 
          title={ link.title } 
          href={ link.url } 
          target="_blank"
          rel="noopener noreferrer"
        />
      )}
    </div>
  );

  const navToggle = (
    <div className="nav-toggle">
      <NavSwitch 
        isDarkMode={isDarkMode}
        onChange={onSwitchChange}
      />
    </div>
  );

  const navButton = (
    <CgMenu 
      className="nav-menu"
      size="25px"
      onClick={onButtonClick}
    />
  );

  const expandedNavbar = (
    <div className="navbar-container">
      {/* {navLogo} */}
      {navLinkButtons}
      {navToggle}
    </div>
  );

  const compactNavbar =  (
    <div className="navbar-container">
      {/* {navLogo} */}
      {navButton}
    </div>
  );

  let currentNavbar = isMobile ? compactNavbar : expandedNavbar

  return (
    <StyledNavbar {...props}>
      {currentNavbar}
    </StyledNavbar>
  );
}

Navbar.propTypes = {
  // logo: PropTypes.node.isRequired,
  links: PropTypes.array.isRequired,
  isMobile: PropTypes.bool.isRequired,
  isDarkMode: PropTypes.bool.isRequired,
  onSwitchChange: PropTypes.func.isRequired,
  onButtonClick: PropTypes.func.isRequired,
}

export default Navbar;