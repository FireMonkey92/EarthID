import React from 'react';
import { NavBar } from '../../../components/essentials/navbar/navbar.component';
import { Footer } from '../../../components/essentials/footer/footer.component';
import prize from '../../../assest/17 - About - Partners/1stprize.png';
import './partners.styles.scss';
import shuttle from '../../../assest/17 - About - Partners/shuttle.svg';
import stock_brand from '../../../assest/Home/stock-brand-photo.png';

export const PartnerPage = () => (
  <div className='blogs-main'>
    <NavBar />
    <HeaderHalf title='partners' uris='partners' />
    <OverlapPartner title="What's in it for you?">
      <div className='content-partners'>
        <div className='text-content-partner'>
          <p>
            With Identity theft and account take over on the rise, it&apos;s is increasingly
            difficult for businesses to trust that someone is who they claim to be online.
          </p>
          <p>
            Earth ID identity verification and authentication Solutions leverage the power of
            biometrics, informed AI and latest technology to quickly verify the digital identity of
            new customers and existing users.
          </p>
        </div>
        <img src={prize} className='img-for-partner' alt='partner-img' />
      </div>
    </OverlapPartner>
    <div className='overlapPartner-2'>
      <div className='partner-cards'>
        <PartnerCard
          icon={shuttle}
          title='Explosive Growth'
          summary='Get your slice of the global online 
            identity verification market that 
            is exploding.'
        />
        <PartnerCard
          icon={shuttle}
          title='Explosive Growth'
          summary='Get your slice of the global online 
            identity verification market that 
            is exploding.'
        />
        <PartnerCard
          icon={shuttle}
          title='Explosive Growth'
          summary='Get your slice of the global online 
          identity verification market that 
          is exploding.'
        />
        <PartnerCard
          icon={shuttle}
          title='Explosive Growth'
          summary='Exploit re-brandable content, 
          collateral, sales presentations 
          and simple battlecards 
          to sell and market smarter.'
        />
        <PartnerCard
          icon={shuttle}
          title='Explosive Growth'
          summary='Get your slice of the global online 
            identity verification market that 
            is exploding.'
        />
        <PartnerCard
          icon={shuttle}
          title='Explosive Growth'
          summary='Get your slice of the global online 
            identity verification market that 
            is exploding.'
        />
        <PartnerCard
          icon={shuttle}
          title='Explosive Growth'
          summary='Get your slice of the global online 
          identity verification market that 
          is exploding.'
        />
        <PartnerCard
          icon={shuttle}
          title='Explosive Growth'
          summary='Exploit re-brandable content, 
          collateral, sales presentations 
          and simple battlecards 
          to sell and market smarter.'
        />
      </div>
    </div>
    <div className='brand-content-box-2'>
      <img src={stock_brand} className='brand-content-box-img-2' alt='brandContentImg' />
      <div className='brand-content-box_container-2'>
        <p className='brand-text-2'>
          &quot;As monzo continues to grow and pursue new markets, we know that earthId will scale
          withour business and continue to provide an essential service -- helping monzo create the
          best possible experience for our banking customers while fighting financial crimes.&quot;
        </p>
        <p className='brand-text_quote-auth-2'>Natasha vernier, head of financial crime</p>
        <p className='brand-name-2'>Monzo bank</p>
        <button className='brand-btn-card-2'>Read the full case study &#x2192;</button>
      </div>
    </div>
    <Footer />
  </div>
);

export const OverlapPartner = props => {
  return (
    <div className='overlap-partner-box'>
      <p className='box-title-1'>{props.title}</p>
      {props.children}
    </div>
  );
};

const PartnerCard = ({ icon, title, summary }) => {
  return (
    <div className='card-container-partner'>
      <img src={icon} className='icon-for-partner' alt='icon' />
      <p className='title-for-partner'>{title}</p>
      <p className='summary-for-partner'>{summary}</p>
    </div>
  );
};

//partner
const HeaderHalf = ({ title, uris }) => {
  return (
    <div className='headerHalf-main-partner'>
      <div className='headerHalf-content'>
        <p className='headerHalf-title'>{title}</p>
        <p className='headerHalf-uris'>
          Solutions / <span className='uris-class'>{uris}</span>
        </p>
      </div>
    </div>
  );
};
