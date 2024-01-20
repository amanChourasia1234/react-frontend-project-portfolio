import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://github.com/amanChourasia1234" target="blank">
          <FaGithub></FaGithub>
        </a>
      </div>
      <div>
        <a href="https://www.instagram.com/aman__chourasia_/" target="blank">
          <BsInstagram></BsInstagram>
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/amanchourasia2002/" target="blank">
          <FaLinkedin></FaLinkedin>
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
