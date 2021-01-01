import React from 'react';
import './industries.styles.scss';
import { Footer } from '../../../components/essentials/footer/footer.component';
import network__43 from '../../../assest/Home/network__43.svg';
import tower from '../../../assest/5 - Solutions - Industries/123.png';
import gaming from '../../../assest/5 - Solutions - Industries/acastro_190618_1777_cloud_gaming_0003.0.png';
import retail from '../../../assest/5 - Solutions - Industries/download (2).png';
import credit_cards from '../../../assest/5 - Solutions - Industries/Banking-and-Financial-Services-header-2732x1536.png';
import sharing_eco from '../../../assest/5 - Solutions - Industries/sharing-economy.png';
import mobility from '../../../assest/5 - Solutions - Industries/Transforming-Mobility_i1140.png';
import books from '../../../assest/5 - Solutions - Industries/rptgtpxd-1396254731.png';
import travel from '../../../assest/5 - Solutions - Industries/https___specials-images.forbesimg.com_imageserve_5f709d82fa4f131fa2114a74_0x0.png';
import doc from '../../../assest/5 - Solutions - Industries/ContentPages15.png';
import { NavBar } from '../../../components/essentials/navbar/navbar.component';

export const Industries = () => {
  return (
    <div className='solution-platform'>
      <NavBar />
      <HeaderHalf title='Industries' uris='Industries' />
      <OverlapBoxIndustry title='ID Verification Industires' className=' overlap-box-industry'>
        <p className='compliance-text'>
          At Earth ID we are using informed AI and Machine Learning to build the next generation of
          online ID verificaton technologies, We&apos;re here to help businesses reduce faults and
          maintain regulatory compliance, while increasig revenue and providing a fast and seamless
          customer experience. Our solutions are used by wide range of companies across the globe.
        </p>
        <div className='cards-div-industries'>
          <LargeCard
            img={retail}
            title='Retails'
            desc='Reduce mobile checkout abandonment 
            and increase conversions with a 
            streamlined online ID verification 
            process.'
          />
          <LargeCard
            img={credit_cards}
            title='Financial Services'
            desc='Increase account opening conversions 
            by reducing the friction and 
            abandonment associated with 
            traditionally clunky and time-consuming 
            eKYC experiences.'
          />

          <LargeCard
            img={gaming}
            title='Gaming'
            desc='Verify player age, improve sign-up 
            rates and beat cybercriminals with 
            easy KYC.'
          />
          <LargeCard
            img={tower}
            title='Telco'
            desc='Enable quicker subscription origination, 
            prevent SIM swap fraud and meet 
            emerging compliance requirements.'
          />
          <LargeCard
            img={sharing_eco}
            title='Sharing Economy'
            desc='Verify user and driver identities to 
            build trust and safety in the sharing 
            economy.'
          />
          <LargeCard
            img={mobility}
            title='Mobility'
            desc='Verify remote customers before you 
            hand over the keys or pick up a new 
            rider.'
          />
          <LargeCard
            img={travel}
            title='Travel'
            desc='Verify remote customers before you 
            hand over the keys or pick up a new 
            rider.'
          />
          <LargeCard
            img={doc}
            title='Health Care'
            desc='Know Your Patient and fight insurance 
            and payment fraud with online identity 
            verification and authentication.'
          />
          <LargeCard
            img={books}
            title='Health Care'
            desc='Know with certainty that online students 
            are who they say they are, no matter 
            their location.'
          />
        </div>
      </OverlapBoxIndustry>
      <OverlapBoxIndustry className='ovelapBox-2' title='Success Stories'>
        <div className='large-card-div'>
          <ExtraLargeCard
            icon={network__43}
            desc='Monzo Bank Uses a 
          Customer-Centric Approach'
          />
          <ExtraLargeCard
            icon={network__43}
            desc='Monzo Bank Uses a 
          Customer-Centric Approach'
          />
        </div>
      </OverlapBoxIndustry>
      <Footer />
    </div>
  );
};

const LargeCard = ({ img, desc, title }) => {
  return (
    <div className='large-card'>
      <img src={img} className='large-card-img' alt='largeCardImg' />
      <p className='large-card-title'>{title}</p>
      <p className='large-card-desc'>{!desc ? 'right now description is not available' : desc}</p>
      <button className='large-card-btn'>
        <span className='btn-lable'>Learn More</span>
      </button>
    </div>
  );
};

const ExtraLargeCard = ({ icon, desc }) => {
  return (
    <div className='extra-large-card'>
      <img src={icon} className='extra-large-icon' alt='largeIcon' />
      <p className='extra-large-card-desc'>{desc}</p>
      <button className='extra-large-card-button'>Read More</button>
    </div>
  );
};

const HeaderHalf = ({ title, uris }) => {
  return (
    <div className='headerHalf-main-industry'>
      <div className='headerHalf-content'>
        <p className='headerHalf-title'>{title}</p>
        <p className='headerHalf-uris'>
          Solutions / <span className='uris-class'>{uris}</span>
        </p>
      </div>
    </div>
  );
};

const OverlapBoxIndustry = props => {
  return (
    <div className='overlap-box-industry overlap-box-industry-1'>
      <p className='box-title'>{props.title}</p>
      {props.children}
    </div>
  );
};
