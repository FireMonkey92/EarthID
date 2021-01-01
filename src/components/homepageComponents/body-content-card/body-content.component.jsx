import React from 'react';
import './body-content.styles.scss';
import user_privacy from '../../../assest/home-card/user privacy_user.svg';
import ecosystem from '../../../assest/home-card/trusted ecosystem (1).svg';
import customer from '../../../assest/home-card/Strong Customer Authentication (1).svg';
import network_back_540 from '../../../assest/Home/network-back_540.png';

export const BodyContentCard = () => (
  <div className='body-content'>
    <div className='body-content_text'>
      <p className='body-content_text-1'>Why is EarthId the right solution for you? </p>
      <p className='body-content_text-2'>
        We establish trust between you and your customers through our innovation and intelligence.
      </p>
    </div>
    <div className='body-content_card'>
      <div className='body-content_card-1'>
        <img src={user_privacy} alt='body-card_icon' className='body-content_card-icon' />
        <p className='body-content_card-title'>
          User Privacy With Self Sovereign Identity (Redirected to SSI)
        </p>
        <p className='body-content_card-desc'>
          No more sacrifices. Earth ID automates identity verification so you can quickly onboard
          more customers while enjoying the industry’s highest accuracy rates.
        </p>
        <button className='body-content_card-btn'>Learn more</button>
      </div>
      <div className='body-content_card-1'>
        <img src={ecosystem} alt='body-card_icon' className='body-content_card-icon' />
        <p className='body-content_card-title'>
          A Trusted Ecosystem For Global Businesses (Redirected to Industries)
        </p>
        <p className='body-content_card-desc'>
          EarthId lets you accelerate customer acquisition and transcend borders without having to
          worry about security and compliance. With our capability to verify ~60% of the world
          population and experience across private and public sectors, we provide a verification
          engine that fits your needs.
        </p>
        <button className='body-content_card-btn'>Learn more</button>
      </div>
      <div className='body-content_card-1'>
        <img src={customer} alt='body-card_icon' className='body-content_card-icon' />
        <p className='body-content_card-title'>
          Better Corroboration With Strong Customer Authentication
        </p>
        <p className='body-content_card-desc'>
          EarthId uses Strong Customer Authentication as per the recommendations by EBA to help
          fight against identity fraud. Future-proof your business by moving to EarthId’s all-new
          biometric-based multi-factor authentication for better identity corroboration.
        </p>
        <button className='body-content_card-btn'>Learn more</button>
      </div>
    </div>
    <img src={network_back_540} alt='bg-img-content-1' className='body-content-2_img' />
  </div>
);
