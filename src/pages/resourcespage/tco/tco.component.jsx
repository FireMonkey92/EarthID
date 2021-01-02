import React from 'react';
import { NavBar } from '../../../components/essentials/navbar/navbar.component';
import { Footer } from '../../../components/essentials/footer/footer.component';
import './tco.styles.scss';
import calc from '../../../assest/18 - Resources - TCO Calculaters/calc-photo.png';

export const TcoPage = () => (
  <div className='blog-main'>
    <NavBar />
    <HeaderHalf title='TCO Calculator' uris='TCO Calculator' />
    <div className='tco-main1'>
      <div className='tco-content'>
        <p className='tco-content__title'>Total Cost of Ownership Calculator</p>
        <p className='tco-content__desc'>
          Use this calculator to find out how much your online identity verification solution is
          REALLY costing you.
        </p>
      </div>
    </div>
    <div className='tco-main'>
      <div className='tco-content'>
        <p className='tco-content__title tco-content__title-1'>What&apos;s Behind the Numbers?</p>
        <p className='tco-content__desc'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer
          took a galley of type and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
          Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
        </p>
        <p className='tco-content__desc'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer
          took a galley of type and scrambled it to make a type specimen book. It has survived not
          only five centuries,
        </p>
        <img src={calc} alt='tco' className='tco-content__img' />
      </div>
      <div className='calc'>
        <p className='calc-title'>TCO Calculator</p>
        <form className='calc-flex'>
          <div className='calc-blackBox'>
            <p className='calc-blackBox__para'>planning assumptions</p>
          </div>
          <div className='calc-flex_div'>
            <label className='calc-flex__para'>
              Current number of online identity verifications performed each day
            </label>
            <input type='number' className='calc-flex__input' />
          </div>
          <div className='calc-flex_div'>
            <label className='calc-flex__para'>
              Percent of manual reviews as a result of verification &quot;maybes&quot;
            </label>
            <input type='number' className='calc-flex__input' />
          </div>
          <div className='calc-flex_div'>
            <label className='calc-flex__para'>
              incremental number of daily manual reviews caused by &quot;maybe&quot;
            </label>
            <input type='number' className='calc-flex__input' />
          </div>
          <div className='calc-flex_div'>
            <label className='calc-flex__para'>
              Average time spent on each manual review (in minutes)
            </label>
            <input type='number' className='calc-flex__input' />
          </div>
          <div className='calc-flex_div'>
            <label className='calc-flex__para'>
              Total time required for incremental reviews (in hours per day)
            </label>
            <input type='number' className='calc-flex__input' />
          </div>

          <div className='calc-blackBox'>
            <p className='calc-blackBox__para'>planning assumptions</p>
          </div>
          <div className='calc-flex_div'>
            <label className='calc-flex__para'>
              Current number of online identity verifications performed each day
            </label>
            <input type='number' className='calc-flex__input' />
          </div>
          <div className='calc-flex_div'>
            <label className='calc-flex__para'>
              Percent of manual reviews as a result of verification &quot;maybes&quot;
            </label>
            <input type='number' className='calc-flex__input' />
          </div>

          <div className='calc-blackBox'>
            <p className='calc-blackBox__para'>
              Estimated Opportunity Costs (from customer abandonment):
            </p>
          </div>
          <div className='calc-flex_div'>
            <label className='calc-flex__para'>
              incremental number of daily manual reviews caused by &quot;maybe&quot;
            </label>
            <input type='number' className='calc-flex__input' />
          </div>
          <div className='calc-flex_div'>
            <label className='calc-flex__para'>
              Average time spent on each manual review (in minutes)
            </label>
            <input type='number' className='calc-flex__input' />
          </div>
          <div className='calc-flex_div'>
            <label className='calc-flex__para'>
              Total time required for incremental reviews (in hours per day)
            </label>
            <input type='number' className='calc-flex__input' />
          </div>
          <button className='footer-btn_1'>SUBMIT TOTAL COST $</button>
        </form>
      </div>
    </div>
    <Footer />
  </div>
);

//tco
const HeaderHalf = ({ title, uris }) => {
  return (
    <div className='headerHalf-main-tco'>
      <div className='headerHalf-content'>
        <p className='headerHalf-title'>{title}</p>
        <p className='headerHalf-uris'>
          Solutions / <span className='uris-class'>{uris}</span>
        </p>
      </div>
    </div>
  );
};
