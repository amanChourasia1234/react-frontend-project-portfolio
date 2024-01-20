import React, { useState, useEffect } from 'react';
import './About.scss';
import { AppWrap } from '../../wrapper';
import { motion } from 'framer-motion';
import { images } from '../../constants';
const abouts = [
  {
    title: 'Frontend Developer',
    description: 'I am a good Web Developer ',
    imgUrl: images.react,
  },
  {
    title: 'Backend Developer',
    description: 'I am a good Web Developer ',
    imgUrl: images.node,
  },
  {
    title: 'Full Stack web Developer',
    description: 'I am a good Web Developer ',
    imgUrl: images.javascript,
  },
  {
    title: 'UI/UX Designer',
    description: 'I am a good Web Developer ',
    imgUrl: images.xd,
  },
];

const About = () => {
  return (
    <>
      <h2 className="head-text" style={{ marginTop: 80 }}>
        <span> ABOUT </span>
        <br></br>

        <span> </span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(About, 'about');
