import React from 'react';
import './Contact.scss';
import { images } from '../../constants';

import { AppWrap } from '../../wrapper';
const Contact = () => {
  return (
    <>
      <h2 className="head-text">Contact Me</h2>
      <div className="app__contact">
        <div className="app__contact-cards">
          <div className="app__contact-card">
            <img src={images.email} alt="Email" />
            <a
              href="mailto:amanchourasia2002@gmail.com"
              className="p-text app__flex"
            >
              amanchourasia2002@gmail.com
            </a>
          </div>
          <div className="app__contact-card">
            <img src={images.mobile} alt="Mobile" />
            <a href="tel:+91 8104441272" className="p-text app__flex">
              +91 8104441272
            </a>
          </div>
        </div>
        <div className="app__contact-form app__flex">
          <form className="app__contact-form" action="">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="Your Message" />
            <button type="button">Send Message</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AppWrap(Contact, 'contact');
