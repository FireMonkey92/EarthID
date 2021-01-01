import React from 'react';
import './overlap-box-rest.styles.scss';

export const OverlapBoxRest = props => {
  return (
    <div className='overlap-box-rest'>
      <p className='box-title-rest'>{props.title}</p>
      {props.children}
    </div>
  );
};
