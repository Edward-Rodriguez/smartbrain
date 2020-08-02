import React from 'react';
import './Logo.css';
import Tilt from 'react-tilt';
import brain from './brain.png';

const Logo = () => {
  return (
    <div className='ma4 mt0'>
      <Tilt
        className='Tilt br2 shadow-2'
        options={{ max: 55 }}
        style={{ height: 250, width: 250 }}
      >
        <div className='Tilt-inner'>
          {' '}
          <img src={brain} alt='Logo' />{' '}
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
