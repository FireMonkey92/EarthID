import React from 'react';
import './features-page.styles.scss';
import { Footer } from '../../../components/essentials/footer/footer.component';

export const FeaturesPage = () => {
  return (
    <div className='solution-platform'>
      <HeaderHalf title='Features' uris='Features' />
      <h1>Page is under construction!</h1>
      <Footer />
    </div>
  );
};

//asdh
const HeaderHalf = ({ title, uris }) => {
  return (
    <div className='headerHalf-main-features'>
      <div className='headerHalf-content'>
        <p className='headerHalf-title'>{title}</p>
        <p className='headerHalf-uris'>
          Solutions / <span className='uris-class'>{uris}</span>
        </p>
      </div>
    </div>
  );
};
