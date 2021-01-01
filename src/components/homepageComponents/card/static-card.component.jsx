import React from 'react';
import './static-card.styles.scss';
import phone_img from '../../../assest/Home/phone-img.png';
import phone__img_2 from '../../../assest/Home/phone__img-2.png';
import customer from '../../../assest/customer-insight.png';
import fingerprint from '../../../assest/gdpr-fingerprint.png';
import recognition from '../../../assest/facial-recognition-scan.png';

export const StaticCard = () => (
  <div className='static-card'>
    <div className='static-card_1'>
      <img src={customer} alt='icon' className='icon' />
      <p className='static-card-text_bold'>
        Significantly increase customer conversions with improved user experience
      </p>
      <p className='static-card-text_light'>
        Convert more customers efficiently with our highly automated, frictionless and user-friendly
        onboarding and identity verification solutions. Dramatically reduce abandonment rates by
        eliminating physical documents and minimizing manual interventions.
      </p>
      <img src={phone_img} alt='phone__img' className='phone__img' />
    </div>
    <div className='static-card_1'>
      <img src={fingerprint} alt='icon' className='icon' />
      <p className='static-card-text_bold'>
        Grow your business while fighting fraud and achieving compliance
      </p>
      <p className='static-card-text_light'>
        Fraud is evolving, so is EarthId’s robust platform. Expand into news countries and regions
        without having to worry about growing frauds or changing regulatory landscape. With
        EarthId’s global data protection compliant solutions, make borders invisible and stay ahead
        of the competition.
      </p>
      <img src={phone__img_2} alt='phone__img' className='phone__img' />
    </div>
    <div className='static-card_1'>
      <img src={recognition} alt='icon' className='icon' />
      <p className='static-card-text_bold'>
        Protect your assets with our nextGen authentication solution
      </p>
      <p className='static-card-text_light'>
        Protect your assets, both digital and physical, against unauthorized access with our nextGen
        passwordless and keyless access solutions. Authenticate the user’s identity instantly with
        the EarthId platform, powered by technologies like Artificial Intelligence, blockchain, and
        physical and behavioral biometrics.
      </p>
      <img src={phone_img} alt='phone__img' className='phone__img' />
    </div>
  </div>
);
