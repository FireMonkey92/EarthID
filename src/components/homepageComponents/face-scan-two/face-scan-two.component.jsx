import React from 'react';
import faceScanNet from '../../../assest/Home/faceScanNet.png';
import faceScanBrain from '../../../assest/Home/faceScanBrain.png';
import faceScanDesk from '../../../assest/Home/faceScandesk.png';
import faceScanCross from '../../../assest/Home/faceScanCross.png';
import './face-scan-two.styles.scss';

export const FaceScanTwo = () => (
  <div className='faceScan-content'>
    <p className='faceScan-content_title'>An Award-Winning GDPR Compliant Universal ID Solution</p>
    <p className='faceScan-content_desc'>
      As a trusted identity sharing platform, EarthId thrives to bring intelligence to identity. Our
      global identity management platform, powered by AI and Blockchain offers secure and seamless
      onboarding, verification, and password-less authentication using pre-verified user
      information, resulting in massive cost and time savings.
    </p>
    <p className='faceScan-content_feat'>Featuring</p>
    <div className='faceScan-content-img'>
      <button className='btn-animate'>
        <img src={faceScanNet} alt='icons_face-content' className='icon-face-content' />
      </button>
      <button className='btn-animate'>
        <img src={faceScanBrain} alt='icons_face-content' className='icon-face-content' />
      </button>
      <button className='btn-animate'>
        <img src={faceScanDesk} alt='icons_face-content' className='icon-face-content' />
      </button>
      <button className='btn-animate'>
        <img src={faceScanCross} alt='icons_face-content' className='icon-face-content' />
      </button>
    </div>
    <button className='faceScan-content-btn'>Explore Earth ID&apos;s Technology</button>
  </div>
);
