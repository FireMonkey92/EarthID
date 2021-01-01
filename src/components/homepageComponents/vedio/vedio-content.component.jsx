import React from 'react';
import './vedio-content.styles.scss';
import ReactPlayer from 'react-player';

export const VedioContent = () => (
  <div className='vedio-content'>
    <div className='vedio-player'>
      <ReactPlayer
        className='Real-player'
        url='https://www.youtube.com/watch?v=KPsuGu14jjc&ab_channel=Regz'
        controls={true}
        width='100%'
        height='100%'
      />
    </div>
  </div>
);
