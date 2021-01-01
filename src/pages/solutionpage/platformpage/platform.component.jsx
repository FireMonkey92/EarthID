import React from 'react';
import './platform.styles.scss';
import { Footer } from '../../../components/essentials/footer/footer.component';
import { OverlapBox } from '../../../components/essentials/overlap-box/overlap-box.component';
import { NavBar } from '../../../components/essentials/navbar/navbar.component';

export const Platform = () => {
  return (
    <div className='solution-platform'>
      <NavBar />
      <HeaderHalf title='Platform' uris='Platform' />
      <OverlapBox title='yes i am a title'>
        <div>
          <h1>Page is under construcion</h1>
        </div>
      </OverlapBox>
      <Footer />
    </div>
  );
};

const HeaderHalf = ({ title, uris }) => {
  return (
    <div className='headerHalf-main-platform'>
      <div className='headerHalf-content'>
        <p className='headerHalf-title'>{title}</p>
        <p className='headerHalf-uris'>
          Solutions / <span className='uris-class'>{uris}</span>
        </p>
      </div>
    </div>
  );
};
