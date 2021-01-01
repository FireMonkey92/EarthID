import React from 'react';
import './header-half.styles.scss';
import './header-half-resources.styles.scss';

export const HeaderHalf = ({ title, uris }) => {
  return (
    <div className='headerHalf-main'>
      <div>
        <p className='headerHalf-title'>{title}</p>
        <p className='headerHalf-uris'>
          Resources / <span className='uris-class'>{uris}</span>
        </p>
      </div>
    </div>
  );
};
