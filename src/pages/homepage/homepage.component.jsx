import React from 'react';
import { Header, HeaderOverlap } from '../../components/homepageComponents/header/header';
import { VedioContent } from '../../components/homepageComponents/vedio/vedio-content.component';
import { StaticCard } from '../../components/homepageComponents/card/static-card.component';
import './homepage.styles.scss';
import network_back_540 from '../../assest/Home/network-back_540.png';
import { FaceId } from '../../components/homepageComponents/face-id/face-id.component';
import { BodyContentCard } from '../../components/homepageComponents/body-content-card/body-content.component';
import { FaceScanTwo } from '../../components/homepageComponents/face-scan-two/face-scan-two.component';
import { BrandPartners } from '../../components/homepageComponents/brand-partner/brand-partner.component';
import { Footer } from '../../components/essentials/footer/footer.component';
import { NavBar } from '../../components/essentials/navbar/navbar.component';

const HomePage = () => (
  <div className='homepage'>
    <NavBar />
    <div className='header'>
      <Header />
      <div className='header-overlap'>
        <HeaderOverlap />
      </div>
    </div>
    <div className='vedio-content_space'>
      <VedioContent />
    </div>
    <div className='body-content_1'>
      <p className='body-content_1-text'>
        Experience Excellence With EarthId <br /> Your Trusted Identity Expert/Partner
      </p>
      <div className='body-content_1-card'>
        <StaticCard />
      </div>
      <img src={network_back_540} alt='bg-img-content-1' className='body-content-1_img' />
    </div>
    <div className='face-scan-adobe_1'>
      <FaceId />
    </div>
    <div className='body-content_2'>
      <BodyContentCard />
    </div>
    <div className='face-scan-adobe_2'>
      <FaceScanTwo />
    </div>
    <div className='brand-support'>
      <BrandPartners />
    </div>
    <div className='footer'>
      <Footer />
    </div>
  </div>
);

export default HomePage;
