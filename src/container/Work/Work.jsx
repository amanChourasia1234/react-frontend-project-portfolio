import React, { useState, useEffect } from 'react';
import './Work.scss';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import { AppWrap } from '../../wrapper';

const projects = [
  {
    title: 'RAY CRYPTO',
    projectLink: 'https://github.com/amanChourasia1234/Ray-Crypto',
    codeLink: 'https://github.com/amanChourasia1234/Ray-Crypto',
    imgUrl: images.crypto,
    description:
      'An android application which allows the user to encrypt and decrypt text and image using various cryptographic algorithm',
  },
  {
    title: 'Login and Authentication',
    projectLink: 'https://authentication-u15o.onrender.com',
    codeLink: 'https://github.com/amanChourasia1234/authentication-deploy',
    imgUrl: images.login,
    description:
      'A secure authentication web application which is created using mern stack',
  },
  {
    title: 'Blog Application',
    projectLink: 'https://blog-i58t.onrender.com',
    codeLink: 'https://github.com/amanChourasia1234/mern-blog-deploy',
    imgUrl: images.blog,
    description: 'A blog  web Application which is created using mern stack',
  },
  {
    title: 'Parkinson Disease Detection',
    projectLink:
      'https://github.com/amanChourasia1234/parkinson-disease-detection',
    codeLink:
      'https://github.com/amanChourasia1234/parkinson-disease-detection',
    imgUrl: images.parkinson,
    description: 'Parkinson disease detection using spiral and wave images ',
  },
  {
    title: 'Vaccination status using Face recognition',
    projectLink:
      'https://github.com/amanChourasia1234/vaccination-status-detection-web',
    codeLink:
      'https://github.com/amanChourasia1234/vaccination-status-detection-web',
    imgUrl: images.face,
    description: 'Vaccination status detection using face recognition',
  },
];

const Work = () => {
  return (
    <>
      <h2 className="head-text">Projects</h2>
      <motion.div
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-projects"
      >
        {projects.map((project, index) => (
          <div className="app__work-item app__flex">
            <div className="app__work-img app__flex">
              <img src={project.imgUrl} alt={project.title} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: 'easeInOut',
                  staggerChildren: 0.5,
                }}
                className="app__work-hover app__flex"
              >
                <a href={project.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>

                <a href={project.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>
            <div className="app__work-content app__flex">
              <h3 className="bold-text">{project.title}</h3>
              <p className="p-text" style={{ marginTop: 10 }}>
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(Work, 'work');
