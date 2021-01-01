import React from 'react';
import './face-id.styles.scss';
import icon_dynamic_image from '../../../assest/Home/icon_dynamic_image.png';
import { useState } from 'react';

export const FaceId = () => {
  const [content, togglecontent] = useState(0);
  const [btns, toggleBtns] = useState([
    {
      name: 'btn-2',
      hidden: true,
      title: 'DECENTRALIZED IDENTITY',
      content:
        'third generation distirbuted ledger technology for fraud prevention, through immutable proof of authenticity and user consent',
    },
    {
      name: 'btn-1',
      hidden: true,
      content: 'Manage the identity of your customer using the secure and full proof solution.',
      title: 'identity management as a service',
    },
    {
      name: 'btn-3',
      hidden: true,
      content:
        'Manage access restricted areas using earthid app and Facial recoginition; highly crusial in current pandemic situations.',
      title: 'conatactless and keyless entry',
    },
    {
      name: 'btn-4',
      hidden: true,
      content:
        'Authenticate online users with password-less technology using our privacy preserving solutions.',
      title: 'nextgen passwordless login',
    },
    {
      name: 'btn-5',
      hidden: true,
      content:
        'know your customers better and innovate the business model with the help of their identity score',
      title: 'trust score',
    },
    {
      name: 'btn-6',
      hidden: true,
      content:
        'Verify the Age, Gender and other key identity information without divulging anything more',
      title: 'selective data disclosure',
    },
    {
      name: 'btn-7',
      hidden: true,
      content:
        'Earth ID pioneered the ID + selfie approach to identity verification, leveraging 10 years.Real-world production data and hundreds of millions of domain-specific data pointsto deliver a better, smarter. Faster online identity experience.',
      title: 'DECENTRALIZED IDENTITY',
    },
    {
      name: 'btn-8',
      hidden: true,
      content:
        'artificial intelligence powered processing of data allows digitization of end to processes, bringing accuracy and efficiency',
      title: 'automation',
    },
    {
      name: 'btn-9',
      hidden: true,
      content:
        'multi modal biometric technology offering the most versatile human verification capabilities, including anti-spoofing liveness test',
      title: 'biometrics',
    },
  ]);
  console.log(btns, toggleBtns, togglecontent);

  const handleChange = e => {
    togglecontent(e.target.value);
  };

  return (
    <div className='faceId-content'>
      <div className='faceId-content_text'>
        <p className='faceId-content_text-1'>Introducing</p>
        <p className='faceId-content_text-2'>
          A global identity management and digital Know-Your-Stakeholder (KYS) platform
        </p>
        <p className='faceId-content_text-3'>
          EarthId helps customers fight frauds comply with regulations, and onboard users
          efficiently, supporting over 4000 identity documents in 200+ countries.
          <p className='faceId-content_text-3-spaning'>
            Our digital KYS platform allows you to manage the identity of your stakeholders across
            banking, finance, insurance, healthcare, gaming, and many more industries across private
            and public sectors..
          </p>
        </p>
      </div>
      <div className='faceId-content_dynamic'>
        <div className='faceId-content_dynamic-1'>
          <p className='faceId-content_dynamic-1-title'>Decentralized IDENTITY </p>
          <p className='faceId-content_dynamic-1-desc'>{btns[content].content}</p>
        </div>
        <div className='faceId-dyanmic-img-div'>
          <img
            src={icon_dynamic_image}
            className='faceId-content_dynamic-1-img'
            alt='dynamicImage'
          />
        </div>
        <div className='faceId-dyanmic-img-div-2'>
          <button className='dynamic-btn dynamic-btn_1' value='0' onClick={handleChange}>
            btn-1
          </button>
          <button className='dynamic-btn dynamic-btn_2' value='1' onClick={handleChange}>
            btn-2
          </button>
          <button className='dynamic-btn dynamic-btn_3' value='2' onClick={handleChange}>
            btn-3
          </button>
          <button className='dynamic-btn dynamic-btn_4' value='3' onClick={handleChange}>
            btn-4
          </button>
          <button className='dynamic-btn dynamic-btn_5' value='4' onClick={handleChange}>
            btn-5
          </button>
          <button className='dynamic-btn dynamic-btn_6' value='5' onClick={handleChange}>
            btn-6
          </button>
          <button className='dynamic-btn dynamic-btn_7' value='6' onClick={handleChange}>
            btn-7
          </button>
          <button className='dynamic-btn dynamic-btn_8' value='7' onClick={handleChange}>
            btn-8
          </button>
          <button className='dynamic-btn dynamic-btn_9' value='8' onClick={handleChange}>
            btn-9
          </button>
        </div>
      </div>
    </div>
  );
};
