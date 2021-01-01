import React from 'react';
import './overlap-box.styles.scss';

export const OverlapBox = props => {
  return (
    <div className='overlap-box extend-it'>
      <p className='box-title'>{props.title}</p>
      {props.children}
    </div>
  );
};
