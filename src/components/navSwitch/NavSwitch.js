import React from 'react';
import PropTypes from 'prop-types';
import { StyledNavSwitch } from './NavSwitch.styled';
import { BsMoon } from 'react-icons/bs';
import { FiSun } from 'react-icons/fi';

const NavSwitch = ({isDarkMode, onChange, ...props }) => {

  return (
    <StyledNavSwitch {...props}>
      <input 
        type="checkbox" 
        className="checkbox" 
        id="checkbox" 
        onChange={onChange}
        checked={isDarkMode}
      />

      <label htmlFor="checkbox" className="label">
      <FiSun className="icon-sun" />
      <BsMoon className="icon-moon" />
      <div className="ball" />
      </label>
    </StyledNavSwitch>
  )
}

NavSwitch.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default NavSwitch;