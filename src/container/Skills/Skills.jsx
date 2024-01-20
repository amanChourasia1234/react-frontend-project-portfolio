import React from 'react';
import './Skills.scss';
import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import { motion } from 'framer-motion';
const skills = [
  {
    imgUrl: images.react,
    name: 'React',
  },
  {
    imgUrl: images.node,
    name: 'NodeJs',
  },
  {
    imgUrl: images.html,
    name: 'HTML5',
  },
  {
    imgUrl: images.css,
    name: 'CSS3',
  },
  {
    imgUrl: images.javascript,
    name: 'Javascript',
  },
  {
    imgUrl: images.android,
    name: 'Android',
  },
  {
    imgUrl: images.xd,
    name: 'Adobe XD',
  },
  {
    imgUrl: images.github,
    name: 'GitHub',
  },

  {
    imgUrl: images.tailwind,
    name: 'Tailwind',
  },
];
const experiences = [
  {
    year: 2021,
    title: 'Web Developer',
    description:
      'It was a two month online internship in a jewellery company named RC Diamonds and i had Learn about wordpress , custom wordpress and php in this internship',
    companyName: 'RC Diamonds',
  },
  {
    year: 2023,
    title: 'Web Developer',
    description:
      'It was a one month virtual internship and i have Created four project in this internship in june 2023',
    companyName: 'LetsGrowMore',
  },
];
const Skills = () => {
  return (
    <>
      <h2 className="head-text">Skills and Experience</h2>
      <div className="app__skill app__flex">
        <motion.div className="app__skill-list">
          {skills.map((skill, index) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 1 }}
              className="app__skill-item app__flex"
            >
              <div className="app__skill-img app__flex">
                <img src={skill.imgUrl} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skill-experience">
          {experiences.map((experience, index) => (
            <div className="app__skill-exp-item">
              <div className="app__skill-exp-title">
                <h3>{experience.year}</h3>
              </div>
              <div className="app__skill-exp-desc">
                <h4>{experience.title}</h4>
                <p className="p-tex">{experience.companyName}</p>
                <p className="p-text">{experience.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(Skills, 'skills');
