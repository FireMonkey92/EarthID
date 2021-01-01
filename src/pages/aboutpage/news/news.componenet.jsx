import React from 'react';
import { OverlapBox } from '../../../components/essentials/overlap-box/overlap-box.component';
import { Footer } from '../../../components/essentials/footer/footer.component';
import '../../resourcespage/blogs/blogs.styles.scss';
import '../../resourcespage/webinars/webinars.styles.scss';
import photo_on_phone from '../../../assest/2 - Solutions - Platforms/photo-on-phone.png';
import { NavBar } from '../../../components/essentials/navbar/navbar.component';
import './news.styles.scss';
import capture from '../../../assest/16 - About - Latest News/Capture.png';

export const LatestNews = () => (
  <div className='blogs-main'>
    <NavBar />
    <HeaderHalf title='Latest NEWS' uris='lates-news' />
    <OverlapBox title='press releases' className='overlap-box-news-1'>
      <div className='grid-for-news'>
        <NewsCard
          title='Earth ID Go wins Gold in the 
          2020 Golden Bridge Business 
          and Innovation Awards®'
          img={capture}
          date='december 19, 2020'
        />
        <NewsCard
          title='Earth ID Announces Video 
          Verification Solution to Reduce 
          Onboarding Time, Deter Financial 
          Crime and Streamline KYC 
          Compliance'
          img={photo_on_phone}
          date='december 19, 2020'
        />
        <NewsCard
          title='Earth ID Reports Largest Sales 
          Quarter in Company History'
          img={capture}
          date='december 19, 2020'
        />
      </div>
      <button className='btn-for-news'>view all press releases</button>
    </OverlapBox>
    <OverlapBoxRest title='Press Coverage'>
      <div className='grid-for-news-publishers'>
        <PressCard
          publisher='Dark Reading'
          title='Security Slipup Exposes Health 
          Records & Lab Results'
          img={photo_on_phone}
          date='december 19, 2020'
        />
        <PressCard
          publisher='Dark Reading'
          title='Security Slipup Exposes Health 
          Records & Lab Results'
          img={photo_on_phone}
          date='december 19, 2020'
        />
        <PressCard
          publisher='Dark Reading'
          title='Security Slipup Exposes Health 
          Records & Lab Results'
          img={photo_on_phone}
          date='december 19, 2020'
        />
      </div>
      <button className='btn-for-news'>view awards</button>
    </OverlapBoxRest>
    <Footer />
  </div>
);

const NewsCard = ({ img, title, date }) => {
  return (
    <div className='blog-div'>
      <img src={img} alt='anImg' className='img-for-blog' />
      <p className='title-for-news'>{title}</p>
      <p className='dateFieldNews'>{date}</p>
      <button className='btn-blog'>View News</button>
    </div>
  );
};
export const OverlapBoxRest = props => {
  return (
    <div className='overlap-box-for-news'>
      <p className='box-title-for-news'>{props.title}</p>
      {props.children}
    </div>
  );
};
const PressCard = ({ publisher, date, title }) => {
  return (
    <div className='press-div'>
      <p className='publisher'>{publisher}</p>
      <p className='dateFieldPublisher'>{date}</p>
      <a href='#' className='anchor-tag-publisher'>
        {title}
      </a>
    </div>
  );
};

//news
const HeaderHalf = ({ title, uris }) => {
  return (
    <div className='headerHalf-main-news'>
      <div className='headerHalf-content'>
        <p className='headerHalf-title'>{title}</p>
        <p className='headerHalf-uris'>
          Solutions / <span className='uris-class'>{uris}</span>
        </p>
      </div>
    </div>
  );
};
