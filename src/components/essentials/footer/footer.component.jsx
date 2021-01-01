import React from 'react';
import './footer.styles.scss';
import { Link } from 'react-router-dom';
import earthid_logo from '../../../assest/Home/earth-id_logo.png';
import twitter from '../../../assest/Home/013-twitter-1.svg';
import skype from '../../../assest/Home/006-skype.svg';
import instagram from '../../../assest/Home/011-instagram.svg';
import youtube from '../../../assest/Home/008-youtube.svg';

export const Footer = () => (
  <div className='footer-main'>
    <div className='footer-sec'>
      <p className='get-started'>Embark On A Transformational Journey With EarthId</p>
      <p className='earthid-footer-desc'>
        Don’t let complex regulations and futuristic fraudulent techniques stop your customers from
        having a swift onboarding experience. Let our experts show you how easy it is to integrate
        our end-to-end identity management solution to your existing mobile and web applications.
      </p>
      <button className='footer-btn_1'>
        <Link className='links'>
          <p className='btn-title'>REQUEST A DEMO</p>
        </Link>
      </button>
    </div>
    <div className='footer-content'>
      <p className='newsletter-subs'>subscribe to our newsletter</p>
      <div className='rest-footer-info'>
        <div className='content-footer-info'>
          <img src={earthid_logo} alt='earthId-logo' className='logo-earthId' />
          <p className='earthid-desc'>
            EarthId is an award-winning Decentralized Identity Management platform that allows
            secure and frictionless exchange and verification of identity information.
          </p>
        </div>
        <div className='content-footer-info'>
          <p className='info-title'>Useful links</p>
          <a href='#' className='info-links'>
            Home
          </a>
          <a href='#' className='info-links'>
            solutions
          </a>
          <a href='#' className='info-links'>
            Technology
          </a>
          <a href='#' className='info-links'>
            about
          </a>
          <a href='#' className='info-links'>
            SSI
          </a>
          <a href='#' className='info-links'>
            Resources
          </a>
        </div>
        <div className='content-footer-info'>
          <p className='info-title'>Useful links</p>
          <a href='#' className='info-links'>
            Home
          </a>
          <a href='#' className='info-links'>
            solutions
          </a>
        </div>
        <div className='social-media'>
          <p className='info-title'>Useful links</p>
          <div className='div-social'>
            <a href='#' className='link-media'>
              <img src={twitter} className='img-link-media' alt='an-img-link'></img>
            </a>
            <a href='#' className='link-media'>
              <img src={skype} className='img-link-media' alt='an-img-link'></img>
            </a>
            <a href='#' className='link-media'>
              <img src={youtube} className='img-link-media' alt='an-img-link'></img>
            </a>
            <a href='#' className='link-media'>
              <img src={instagram} className='img-link-media' alt='an-img-link'></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);
