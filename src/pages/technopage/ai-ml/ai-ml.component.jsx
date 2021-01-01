import React from 'react';
import { NavBar } from '../../../components/essentials/navbar/navbar.component';
import { Footer } from '../../../components/essentials/footer/footer.component';
import { OverlapBoxTechno } from '../techno.component';
import phoneImg from '../../../assest/12 - Technology - Distributed Ledger/phoneImg.png';
import './ai-ml.styles.scss';

export const AiMl = () => (
  <div className='blogs-main'>
    <NavBar />
    <HeaderHalf title='AI/ML' uris='AI/ML' />
    <OverlapBoxTechno
      img={phoneImg}
      title='Scaling identity verification using Artificial Intelligence & 
      Machine Learning.'
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

//adsfua
const HeaderHalf = ({ title, uris }) => {
  return (
    <div className='headerHalf-main-ai'>
      <div className='headerHalf-content'>
        <p className='headerHalf-title'>{title}</p>
        <p className='headerHalf-uris'>
          Solutions / <span className='uris-class'>{uris}</span>
        </p>
      </div>
    </div>
  );
};
