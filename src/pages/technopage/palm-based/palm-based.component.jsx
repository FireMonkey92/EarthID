import React from 'react';
import { NavBar } from '../../../components/essentials/navbar/navbar.component';
import { Footer } from '../../../components/essentials/footer/footer.component';
import { OverlapBoxTechno } from '../techno.component';
import phoneImg from '../../../assest/9 - Technology - Palm Based/phone-with-id.png';
import './palm-based.styles.scss';

export const PalmBased = () => (
  <div className='blogs-main'>
    <NavBar />
    <HeaderHalf title='Palm Based BioMetrics' uris='Palm Based BioMetrics' />
    <OverlapBoxTechno
      img={phoneImg}
      title='Providing a personalized, advanced, and 
      more secure touch to the traditional 
      authentication system.'
    >
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar
        facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque
        sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, in pretium orci vestibulum eget.
      </p>
      <p>
        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        Duis pharetra luctus lacus ut vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut,
        pulvinar vitae dolor.
      </p>
      <p>
        Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat faucibus libero, at
        maximus nisl suscipit posuere. Morbi nec enim nunc. Phasellus bibendum turpis ut ipsum
        egestas, sed sollicitudin elit convallis. Cras pharetra mi tristique sapien vestibulum
        lobortis.
      </p>
    </OverlapBoxTechno>
    <Footer />
  </div>
);

//dafh
const HeaderHalf = ({ title, uris }) => {
  return (
    <div className='headerHalf-main-palm'>
      <div className='headerHalf-content'>
        <p className='headerHalf-title'>{title}</p>
        <p className='headerHalf-uris'>
          Solutions / <span className='uris-class'>{uris}</span>
        </p>
      </div>
    </div>
  );
};
