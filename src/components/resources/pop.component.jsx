import React from 'react';
import { Dialog, DialogContent } from '@material-ui/core';
import ReactPlayer from 'react-player/youtube';
import cancel from '../../assest/Home/cancel.png';
import './pop.styles.scss';

export const Popup = ({ popup, setPopup }) => {
  console.log('i am a popup watch me:', popup);

  const handleChange = e => {
    console.log('I am a cancle button popup value:', popup);
    setPopup({ show: false, url: '' });
  };

  return (
    <Dialog open={popup.show} maxWidth={'md'}>
      <DialogContent>
        <div className='popup-dialog'>
          <button className='cancel-btn' onClick={handleChange}>
            <img src={cancel} alt='toCncl' className='cancel-img' />
          </button>
        </div>
        <ReactPlayer url={popup.url} controls={true} className='player-box' />
      </DialogContent>
    </Dialog>
  );
};
