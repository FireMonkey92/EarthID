import React from 'react';
import './brand-partner.styles.scss';
import monzo_logo from '../../../assest/Home/monzo-logo.png';
import united_logo from '../../../assest/Home/united-airlines-logo-vector-eps-ai-free-download.png';
import hsbc_logo from '../../../assest/Home/HSBC-logo.png';
import rappi_logo from '../../../assest/Home/rappi_logo.png';
import stock_brand from '../../../assest/Home/stock-brand-photo.png';

export const BrandPartners = () => (
  <div className='brand-content'>
    <p className='brand-content-text_1'>Trusted by</p>
    <p className='brand-content-text_2'>Innovators</p>
    <p className='brand-content-text_3'>Around The World.</p>
    <div className='line' />
    <div className='brand-img'>
      <img src={monzo_logo} alt='brandImgMonzo' className='brand-img-monzo' />
      <img src={rappi_logo} alt='brandImgMonzo' className='brand-img-rappi' />
      <img src={hsbc_logo} alt='brandImgMonzo' className='brand-img-hsbc' />
      <img src={united_logo} alt='brandImgMonzo' className='brand-img-united' />
    </div>
    <div className='brand-content-box'>
      <img src={stock_brand} className='brand-content-box-img' alt='brandContentImg' />
      <div className='brand-content-box_container'>
        <p className='brand-text'>
          &quot;As monzo continues to grow and pursue new markets, we know that earthId will scale
          withour business and continue to provide an essential service -- helping monzo create the
          best possible experience for our banking customers while fighting financial crimes.&quot;
        </p>
        <p className='brand-text_quote-auth'>Natasha vernier, head of financial crime</p>
        <p className='brand-name'>Monzo bank</p>
        <button className='brand-btn-card'>Read the full case study &#x2192;</button>
      </div>
    </div>
  </div>
);
