import React from 'react';
import './compliance-page.styles.scss';
import { Footer } from '../../../components/essentials/footer/footer.component';
import { OverlapBox } from '../../../components/essentials/overlap-box/overlap-box.component';
import network__43 from '../../../assest/Home/network__43.svg';
import { NavBar } from '../../../components/essentials/navbar/navbar.component';

export const CompliancePage = () => {
  return (
    <div className='solution-platform'>
      <NavBar />
      <HeaderHalf title='Compliance' uris='Compliance' />
      <OverlapBox
        title='Simplify Compliance with Online Identity Verification'
        className='overlap-box'
      >
        <p className='compliance-text'>
          Regulators today face a growing chorus of concern over consumer privacy and data
          protection online.In the course of capturing and verifying Identity information, companies
          expose a range of personal identifying information (PII).This information and the consumer
          who owns it, demands protection.
        </p>
        <p className='compliance-text'>
          This page summarize some of the key regulations you&apos;ll need to consider as you
          subject your customer and online users to ID, identity or document Verification process.
          Click a link below to learn more.
        </p>
        <div className='cards-div-compliance'>
          <SmallCard icon={network__43} title='General Data Protection Regulation (GDPR)' />
          <SmallCard icon={network__43} title='General Data Protection Regulation (GDPR)' />
          <SmallCard icon={network__43} title='General Data Protection Regulation (GDPR)' />
          <SmallCard icon={network__43} title='General Data Protection Regulation (GDPR)' />
          <SmallCard icon={network__43} title='General Data Protection Regulation (GDPR)' />
          <SmallCard icon={network__43} title='General Data Protection Regulation (GDPR)' />
          <SmallCard icon={network__43} title='General Data Protection Regulation (GDPR)' />
          <SmallCard icon={network__43} title='General Data Protection Regulation (GDPR)' />
          <SmallCard icon={network__43} title='General Data Protection Regulation (GDPR)' />
        </div>
      </OverlapBox>
      <Footer />
    </div>
  );
};

const SmallCard = ({ icon, title }) => {
  return (
    <div className='small-card'>
      <img src={icon} className='small-card-icon' alt='smallCardIcon' />
      <p className='small-card-title'>{title}</p>
      <button className='small-card-btn'>
        <span className='btn-lable'>Learn More</span>
      </button>
    </div>
  );
};

//odfgh
const HeaderHalf = ({ title, uris }) => {
  return (
    <div className='headerHalf-main-compliance'>
      <div className='headerHalf-content'>
        <p className='headerHalf-title'>{title}</p>
        <p className='headerHalf-uris'>
          Solutions / <span className='uris-class'>{uris}</span>
        </p>
      </div>
    </div>
  );
};
