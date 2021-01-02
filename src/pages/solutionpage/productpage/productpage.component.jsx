import React from 'react';
import './productpage.styles.scss';
import { Footer } from '../../../components/essentials/footer/footer.component';
import { OverlapBox } from '../../../components/essentials/overlap-box/overlap-box.component';
import ReactPlayer from 'react-player';
import { HeaderOverlap } from '../../../components/essentials/bar-component/bar.component';
import network__43 from '../../../assest/Home/network__43.svg';
import locationsvg from '../../../assest/Home/faceScanBrain.png';
import { NavBar } from '../../../components/essentials/navbar/navbar.component';
import { OverlapBoxRest } from '../../../components/essentials/overlap-box/overlap-box-rest/overlap-box-rest.component';
import user_id from '../../../assest/3 - Solutions - Products/id_card.svg';
import user from '../../../assest/3 - Solutions - Products/user (14).svg';
import next from '../../../assest/3 - Solutions - Products/next (24).png';
import loop from '../../../assest/3 - Solutions - Products/loupe (2).png';

export const Product = () => {
  return (
    <div className='solution-platform'>
      <NavBar />
      <HeaderHalf title='Products' uris='Products' />
      <OverlapBox title='Online Identity Proofing and eKYC Powered by AI'>
        <div className='overlap-box-product-content'>
          <p className='overlap-box-product-content_text'>
            With identity theft and account takeover on the rise,it&apos;s incresingly difficult for
            business this is what we have to post.
          </p>
          <div className='to-hold-vedio'>
            <ReactPlayer
              url='https://www.youtube.com/watch?v=OJbh3ldeV1U&t=9s&ab_channel=harshavardhan'
              controls={true}
              className='player-class-1'
              width='100%'
              height='100%'
            />
          </div>
        </div>
      </OverlapBox>
      <div className='header-over'>
        <HeaderOverlap
          title='INTRODUCING'
          platform='The EARTH ID KYX Platform'
          kyc='Unified Identity Verification + eKYC'
        />
      </div>
      <div className='cards-div product-page'>
        <MediumCard
          icon={user_id}
          title='Earth ID Verification'
          desc='Determine if an ID is authentic or has 
          been manipulated.'
        />
        <MediumCard
          icon={user}
          title='Earth ID Document Verification'
          desc='Automatically determine proof of 
          address from pictures of utility bills, 
          credit card and bank statements.'
        />
        <MediumCard
          icon={next}
          title='Earth ID Authentication'
          desc='Replace outdated knowledge-based 
          authentication and SMS-based 2FA with 
          the simplicity and security of a selfie.'
        />
        <MediumCard icon={network__43} title='General Data Protection Regulation (GDPR)' />
        <MediumCard
          icon={network__43}
          title='General Data Protection Regulation (GDPR)'
          desc='this is a test description to check if the description is actually working or not!'
        />
        <MediumCard icon={loop} title='General Data Protection Regulation (GDPR)' />
        <MediumCard icon={network__43} title='General Data Protection Regulation (GDPR)' />
        <MediumCard
          icon={network__43}
          title='General Data Protection Regulation (GDPR)'
          desc='this is a test description to check if the description is actually working or not!'
        />
      </div>
      <OverlapBoxRest title='Experience the Jumio Difference'>
        <div className='invesible-card'>
          <InvesibleCard
            icon={locationsvg}
            title='Optimize Conversions'
            desc='Experience the Jumio Difference'
          />
          <InvesibleCard
            icon={locationsvg}
            title='Optimize Conversions'
            desc='Jumio provides an automated and intuitive 
            user experience that takes less than a 
            minute to complete.'
          />
          <InvesibleCard
            icon={locationsvg}
            title='Optimize Conversions'
            desc='Experience the Jumio Difference'
          />
          <InvesibleCard
            icon={locationsvg}
            title='Optimize Conversions'
            desc='Experience the Jumio Difference'
          />
          <InvesibleCard
            icon={locationsvg}
            title='Optimize Conversions'
            desc='Experience the Jumio Difference'
          />
          <InvesibleCard
            icon={locationsvg}
            title='Optimize Conversions'
            desc='Experience the Jumio Difference'
          />
        </div>
      </OverlapBoxRest>
      <div style={{ marginTop: '8%', display: 'flex', justifyContent: 'center' }}>
        <OverlapBox className='to-push-behind large-container' title=''>
          <div className='large-card-div-product'>
            <ExtraLargeCardProduct
              icon={network__43}
              desc='Monzo Bank Uses a 
            Customer-Centric Approach'
            />
            <ExtraLargeCardProduct
              icon={network__43}
              desc='Monzo Bank Uses a 
            Customer-Centric Approach'
            />
          </div>
        </OverlapBox>
      </div>
      <Footer />
    </div>
  );
};

const MediumCard = ({ icon, desc, title }) => {
  return (
    <div className='medium-card'>
      <img src={icon} className='medium-card-icon' alt='mediumCardIcon' />
      <p className='medium-card-title'>{title}</p>
      <p className='medium-card-desc'>{!desc ? 'right now description is not available' : desc}</p>
      <button className='medium-card-btn'>
        <span className='btn-lable'>Learn More</span>
      </button>
    </div>
  );
};

const InvesibleCard = ({ icon, title, desc }) => {
  return (
    <div className='invesible-card-compo'>
      <img src={icon} className='invesibel-card-icon' alt='invesibleCard' />
      <p className='invesible-card-title'>{title}</p>
      <p className='invesible-card-desc'>{desc}</p>
    </div>
  );
};
const ExtraLargeCardProduct = ({ title, desc, ul1, ul2, ul3 }) => {
  return (
    <div className='extra-large-card'>
      <p className='extra-large-title'>{title}</p>
      <p className='extra-large-card-desc'>{desc}</p>
      <ul className='ul-elcd'>
        <li className='ul-elcd_extra'>{ul1}</li>
        <li className='ul-elcd_extra'>{ul2}</li>
        <li className='ul-elcd_extra'>{ul3}</li>
      </ul>
      <button className='extra-large-card-button'>Read More</button>
    </div>
  );
};

const HeaderHalf = ({ title, uris }) => {
  return (
    <div className='headerHalf-main-product'>
      <div className='headerHalf-content'>
        <p className='headerHalf-title'>{title}</p>
        <p className='headerHalf-uris'>
          Solutions / <span className='uris-class'>{uris}</span>
        </p>
      </div>
    </div>
  );
};
