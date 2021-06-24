import React from 'react';
import PropTypes from 'prop-types';
import { StyledFooter } from './Footer.styled';
import NavLink from '../navLink/NavLink';

const Footer = ({
  device,
  copyright,
  links,  
  ...props 
}) => {

  return (
    <StyledFooter device={device} {...props}>
      <div className="links-container">
        {links.map((link, index) => 
            <div 
              className="link" 
              key={index}>

              <NavLink 
                Icon={ link.icon } 
                href={ link.url } 
                target="_blank"
            />
            </div>
         )}
      </div>

    </StyledFooter>
  )
}

Footer.propTypes = {
  device: PropTypes.object.isRequired,
  copyright: PropTypes.string.isRequired,
  links: PropTypes.array.isRequired,
}

export default Footer;