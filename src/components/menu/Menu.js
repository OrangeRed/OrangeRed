import React from 'react';
import PropTypes from 'prop-types';
import { StyledMenu } from './Menu.styled';
import NavLink from '../navLink/NavLink';
import { CgClose } from 'react-icons/cg';
import NavSwitch from '../navSwitch/NavSwitch';

const Menu = ({ 
  open, 
  links,
  isDarkMode, 
  onSwitchChange,
  onButtonClick, 
  ...props 
}) => {
  
  const isHidden = open ? true : false;

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <div className="menu-header-container">
        <CgClose 
          className="menu-close"
          size="25px"
          onClick={onButtonClick}
        />
      </div>

      <div className="menu-buttons-container">
        {links.map((link, index) => 
            <div 
              className="menu-link" 
              key={index}>
              <NavLink 
                Icon={link.icon} 
                title={link.title} 
                href={link.url} 
                target="_blank"
                rel="noopener noreferrer"
            />
            </div>
         )}

        <div className="menu-link">
          <NavSwitch 
            isDarkMode={isDarkMode}
            onChange={onSwitchChange}
          />
        </div>
      </div>
    </StyledMenu>
  )
}

Menu.propTypes = {
  open: PropTypes.bool.isRequired,
  links: PropTypes.array.isRequired,
  isDarkMode: PropTypes.bool.isRequired,
  onSwitchChange: PropTypes.func.isRequired,
  onButtonClick: PropTypes.func.isRequired,
}

export default Menu;