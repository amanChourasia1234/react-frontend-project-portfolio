import React from 'react';
import './Footer.scss';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
const menus = ['home', 'about', 'skills', 'work', 'contact'];
const Footer = () => {
  return (
    <>
      <div className="app__footer">
        <div className="app__footer-menu">
          {menus.map((menu, index) => (
            <li>
              <a href={`#${menu}`}>{menu}</a>
            </li>
          ))}
        </div>
        <div className="app__footer-social">
          <div>
            <a href="https://github.com/amanChourasia1234" target="blank">
              <FaGithub></FaGithub>
            </a>
          </div>
          <div>
            <a
              href="https://www.instagram.com/aman__chourasia_/"
              target="blank"
            >
              <BsInstagram></BsInstagram>
            </a>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/amanchourasia2002/"
              target="blank"
            >
              <FaLinkedin></FaLinkedin>
            </a>
          </div>
        </div>
        <div className="app__footer-copyright">
          <p className="p-text">@2022</p>
          <p className="p-text">All Right Reserves</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
