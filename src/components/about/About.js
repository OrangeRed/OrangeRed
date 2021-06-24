import React from 'react';
import PropTypes from 'prop-types';
import { StyledAbout } from './About.styled';

const About = ({
  about,
  device, 
  ...props 
}) => {

  return (
    <StyledAbout device={device} {...props}>
      <h1>{about.title}</h1>
      <div className="box-section image-container">
        <img 
          src={about.image.source} 
          alt={about.image.title}
        />
      </div>

      <div className="info-grid">
        <div className="box-section grid-column">
          <div>
            <h4>About me:</h4>
            <ul> 
              {about.description.map(element => 
                <li> <span> {element} </span> </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </StyledAbout>
  )
}

About.propTypes = {
  about: PropTypes.object.isRequired,
  device: PropTypes.object.isRequired,
}

export default About;