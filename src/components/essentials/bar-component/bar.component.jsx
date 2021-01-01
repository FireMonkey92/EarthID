import React from 'react';
import './bar.styles.scss';

export const HeaderOverlap = ({ title, platform, kyc }) => (
  <div className='overlap-content'>
    <div className='overlap-text-overall'>
      <p className='overlap-text_1-overall'>{title}</p>
      <p className='overlap-text_2-overall'>{platform}</p>
      <p className='overlap-text_3-overall'>{kyc}</p>
    </div>
    <div className='overlap-btn-overall'>
      <button className='overlap-btn_1-overall'>Get Details</button>
    </div>
  </div>
);
