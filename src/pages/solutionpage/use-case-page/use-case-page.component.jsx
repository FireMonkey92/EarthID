import React from 'react';
import './use-case.styles.scss';
import { Footer } from '../../../components/essentials/footer/footer.component';
import { OverlapBox } from '../../../components/essentials/overlap-box/overlap-box.component';
import { NavBar } from '../../../components/essentials/navbar/navbar.component';
import digital from '../../../assest/solutions/Digital KYC (2).svg';
import passwordless from '../../../assest/solutions/Passwordless.svg';
import ai from '../../../assest/solutions/AI.svg';
import next_gen from '../../../assest/solutions/next_gen.svg';

export const UseCase = () => {
  return (
    <div className='solution-platform'>
      <NavBar />
      <HeaderHalf title='Use Cases' uris='use-cases' />
      <OverlapBox title='Put Earth ID to Work' className='overlap-box extend-it'>
        <div className='cards-div'>
          <MediumCard
            icon={digital}
            title='Digital KYC'
            desc='Reduce the cost of KYC by up to 80% by using EarthId’s digital KYC services. Improve your user experience by reducing onboarding friction with no more human errors and forget about the hassle of handling physical documents anymore. With EarthId, completing the KYC process is a matter of minutes.'
          />
          <MediumCard
            icon={passwordless}
            title='Passwordless Login'
            desc='Switch to EarthId’s passwordless login for secure access and eliminate the cost incurred while resetting passwords. With EarthId’s passwordless login avoid productivity losses, credential reuse as well as eliminate any risk of phishing completely. User authentication is swift and easy with EarthId’s Identity Management Platform'
          />
          <MediumCard
            icon={ai}
            title='Data Entry Automation'
            desc='Experience faster processing with EarthId’s intelligent platform and reduce cost as well as errors caused by human intervention. Give your users a tailor-made customer experience without compromising on regulatory compliance. Experience speed and accuracy in identity verification with EarthId’s state-of-the-art technologies.'
          />
          <MediumCard
            icon={next_gen}
            title='Nextgen Facial Recognition'
            desc='With EartId’s informed AI working at the core, we offer antispoofing liveness checks as well as document ownership checks with selective data disclosures hence preserving user’s privacy. Our platform offers improved security irrespective of the limited capabilities of the user’s smartphone. EarthId’s Nextgen Facial Recognition system has been designed keeping accuracy and security in mind.'
          />
        </div>
      </OverlapBox>
      <Footer />
    </div>
  );
};

export const MediumCard = ({ icon, desc, title }) => {
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

const HeaderHalf = ({ title, uris }) => {
  return (
    <div className='headerHalf-main-use'>
      <div className='headerHalf-content'>
        <p className='headerHalf-title'>{title}</p>
        <p className='headerHalf-uris'>
          Solutions / <span className='uris-class'>{uris}</span>
        </p>
      </div>
    </div>
  );
};
