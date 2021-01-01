import React from 'react';
import { OverlapWithFilter } from '../../../components/essentials/overlap-box/overlap-with-filters/overlap-with-filters.component';
import { Footer } from '../../../components/essentials/footer/footer.component';
import '../blogs/blogs.styles.scss';
import './webinars.styles.scss';
import { NavBar } from '../../../components/essentials/navbar/navbar.component';
import { Pagination } from '@material-ui/lab';
import { Popup } from '../../../components/resources/pop.component';

export const Webinars = props => {
  const { webinars, updatePage, loading, ...otherProps } = props;
  const handleChange = (e, newPage) => {
    updatePage(newPage);
  };
  return (
    <div className='blogs-main'>
      <NavBar />
      <HeaderHalf title='Webinars' uris='webinars' />
      <OverlapWithFilter>
        <div className='filter-pagination'>
          <p></p>
          <Pagination
            onChange={handleChange}
            count={10}
            variant='outlined'
            shape='rounded'
            size='small'
          />
        </div>
        <div className='grid-for-blogs'>
          {loading === true ? (
            <h1>Loading the content</h1>
          ) : (
            webinars.map(webinar => (
              <WebinarCard
                key={webinar.id}
                title={webinar.title}
                img={webinar.coverImage}
                url={webinar.url}
                {...otherProps}
              />
            ))
          )}
        </div>
      </OverlapWithFilter>
      <Popup popup={otherProps.popup} setPopup={otherProps.setPopup}></Popup>
      <Footer />
    </div>
  );
};
const WebinarCard = ({ img, title, url, ...otherProps }) => {
  const { setPopup } = otherProps;
  const urlWeb = 'http://127.0.0.1:3001/img/webinar/';

  const openPopup = e => {
    console.log('I am open pop up!:', otherProps.popup, 'I am a url', console.log(url));
    setPopup({ show: true, url });
  };

  return (
    <div className='blog-div-card'>
      <img src={`${urlWeb}${img}`} alt='webImg' className='img-for-webinar' />
      <p className='top-banner'>on-demand webinar</p>
      <p className='title-for-webinar'>{title}</p>
      <button className='btn-webinar' onClick={openPopup}>
        Watch Now
      </button>
    </div>
  );
};

//webinar
const HeaderHalf = ({ title, uris }) => {
  return (
    <div className='headerHalf-main-webinar'>
      <div className='headerHalf-content'>
        <p className='headerHalf-title'>{title}</p>
        <p className='headerHalf-uris'>
          Solutions / <span className='uris-class'>{uris}</span>
        </p>
      </div>
    </div>
  );
};
