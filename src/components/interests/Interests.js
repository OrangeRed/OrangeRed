import React from 'react'
import { StyledInterests } from './Interests.styled';

const Interests = ({
  interests,
  device,
  ...props
}) => {

  return (
    <StyledInterests device={device} {...props}>
      <h2> Experience and Interests </h2>
      <div className='box-section'>
        {interests.map(element => 
          <div className='interests-container'>
            <element.icon className='interests-icon' />
            <span className='interests-text'> {element.description} </span>
          </div> 
        )}
      </div>
    </StyledInterests>

  )
}

export default Interests
