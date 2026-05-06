import React from 'react';
import { motion } from 'framer-motion';

import { FaGlobe } from 'react-icons/fa';

import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
      <div className="glass-card gradient-border rounded-2xl overflow-hidden sm:w-[360px] w-full group cursor-pointer">
        <div className="relative w-full h-[230px] overflow-hidden bg-black">
          <div className="relative w-full h-full transition-transform duration-500 group-hover:scale-105">
            <img
              src={image}
              alt={`${name} project screenshot`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
          </div>

          <div className="absolute top-3 right-3 z-20">
            <button
              onClick={() => window.open(source_code_link, '_blank')}
              aria-label={`Visit ${name} website`}
              className="w-10 h-10 rounded-full flex justify-center items-center cursor-pointer transition-all duration-300 hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold bg-gold/15 border border-gold/40 backdrop-blur"
            >
              <FaGlobe className="w-5 h-5 text-gold" />
            </button>
          </div>
        </div>

        <div className="p-5">
          <h3 className="text-white font-bold text-[22px] group-hover:text-gold transition-colors duration-300">
            {name}
          </h3>
          <p className="mt-2 text-white/55 text-[13px] leading-relaxed">{description}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p key={`${name}-${tag.name}`} className={`text-[13px] font-medium ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Personal Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-3 text-white/55 text-[17px] max-w-3xl leading-[30px]"
        >
          Some of the projects I have been working on.
        </motion.p>
      </div>

      <div className="mt-16 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, '');
