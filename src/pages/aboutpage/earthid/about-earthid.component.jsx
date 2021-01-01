import React from 'react';
import { NavBar } from '../../../components/essentials/navbar/navbar.component';
import { Footer } from '../../../components/essentials/footer/footer.component';
import { OverlapPartner } from '../partners/partners.component';
import { HeaderOverlap } from '../../../components/essentials/bar-component/bar.component';
import playing from '../../../assest/15 - About - Company/playing-b.png';
import '../../../components/essentials/bar-component/bar.styles.scss';
import './about-earthid.styles.scss';
import { MediumCard } from '../../solutionpage/use-case-page/use-case-page.component';
import customer from '../../../assest/15 - About - Company/customer (1).svg';
import three_boys from '../../../assest/15 - About - Company/three-boys.svg';
import newspaper from '../../../assest/15 - About - Company/newspaper.svg';
import cal from '../../../assest/15 - About - Company/calender.svg';
import loc from '../../../assest/15 - About - Company/placeholder (1).svg';

export const AboutEarthId = () => (
  <div className='blogs-main'>
    <NavBar />
    <HeaderHalf title='company' uris='company' />
    <OverlapPartner
      title='Identity verification, eKYC and transaction 
        monitoring powered by AI.'
    >
      <div className='content-partners'>
        <div className='text-content-partner'>
          <p className='text-content-earth'>
            EarthId is an award-winning Decentralized Identity Management platform that allows
            secure and frictionless exchange and verification of identity information.EarthId helps
            organisations reduce identity frauds, and save time and costs associated with customer
            onboarding processes, while ensuring privacy and regulatory compliance. Powered by
            third-generation DLT, Artificial Intelligence and latest biometric security, EarthId
            provides a Universal ID Solution that is resistant to cyberattacks and compliant with
            global Data Regulations like GDPR and PDPB.
          </p>
          <p className='text-content-earth'>
            We have developed an innovative Universal ID Solution with an aim to simplify the
            identity management process to provide seamless access to online as well as offline
            services across industries. EarthID&apos;s mission is to eradicate the monolithic
            Identity Management Solutions which are highly prone to cyber-attacks. Using
            state-of-the-art technologies, we ensure that we offer a robust digital solution to our
            customers that is Secure, Seamless, and Trustworthy.
          </p>
          <p className='text-content-earth'>
            EarthId has a team of global experts across India, UK, US and expanding.
          </p>
          <p className='text-content-earth'>
            <b>
              <i>Vision </i>
            </b>
            <span>Our vision is an inclusive Earth powered by Self-Sovereign Digital Identity</span>
          </p>
        </div>
        <img src={playing} className='img-for-partner' alt='partner-img' />
      </div>
    </OverlapPartner>
    <div className='header-overlap-earthid'>
      <HeaderOverlap
        title='INTRODUCING'
        platform='The EARTH ID KYX Platform'
        kyc='Unified Identity Verification + eKYC'
      />
    </div>
    <EarthidBox title='Get to Know Earth ID' />
    <Footer />
  </div>
);

const EarthidBox = props => {
  return (
    <div className='Box-Earth-id'>
      <p className='title-earth-id'>{props.title}</p>
      <div className='first-flex-div'>
        <MediumCard
          icon={three_boys}
          title='Leadership'
          desc='Meet the team responsible for 
          leading and supporting our success.'
        />
        <MediumCard
          icon={loc}
          title='Locations'
          desc='Earth ID is a global organization with 
          offices in key locations. 
          See where we work.'
        />
        <MediumCard
          icon={customer}
          title='Clients'
          desc="Leading brands and organizations around the world trust 
          Jumio's solutions."
        />
        <MediumCard
          icon={cal}
          title='Upcoming Events'
          desc='Meet up with us online and in-person. 
          See our webinar and events schedule.'
        />
        <MediumCard
          icon={newspaper}
          title='Latest News'
          desc='See what Jumio is up to now. Read our latest press releases here.'
        />
      </div>
    </div>
  );
};

// className earthCard = (props) => {
//   return (
//     <div className='earthCard' />
//   );
// };
const HeaderHalf = ({ title, uris }) => {
  return (
    <div className='headerHalf-main-about'>
      <div className='headerHalf-content'>
        <p className='headerHalf-title'>{title}</p>
        <p className='headerHalf-uris'>
          Solutions / <span className='uris-class'>{uris}</span>
        </p>
      </div>
    </div>
  );
};
