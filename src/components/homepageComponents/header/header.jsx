import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';

export const Header = () => (
  <div className='header-content'>
    <div className='content-1'>
      <p className='text-style-1'>Frictionless Identity.</p>
      <p className='text-style-2'>Secure, Seamless, and Trustworthy.</p>
    </div>
    <div className='content-2'>
      <p className='text-style-3'>
        Onboard, verify, and authenticate your customers efficiently, with EarthId’s award-winning
        decentralized identity management platform.
      </p>
    </div>
    <div className='header-button'>
      <button className='button-header_1'>
        <Link to='#'>
          <p className='border-para_1'>explore the kyx platform</p>
        </Link>
      </button>
      <button className='button-header_2'>
        <Link to='#'>
          <p className='border-para_2'>Explore solutions</p>
        </Link>
      </button>
    </div>
  </div>
);

export const HeaderOverlap = () => (
  <div className='overlap-content'>
    <div className='overlap-text'>
      <p className='overlap-text_1'>EARTH ID ACQUIRES</p>
      <p className='overlap-text_2'>Beam Solutions’ AML Platform</p>
      <p className='overlap-text_3'>
        AI-based screening and transaction monitoring AI-based
        <br />
        screening and transaction monitoring.
      </p>
    </div>
    <div className='overlap-btn'>
      <button className='overlap-btn_1'>read the announcement</button>
    </div>
  </div>
);
