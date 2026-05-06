import React from 'react';
import { motion } from 'framer-motion';
import { FaServer, FaCode, FaLightbulb, FaUsers } from 'react-icons/fa';

import { styles } from '../styles';
import { services } from '../constants';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';

const iconMap = {
  'Backend Developer': FaServer,
  'Frontend Developer': FaCode,
  'Critical Thinker': FaLightbulb,
  'Team Player': FaUsers,
};

const ServiceCard = ({ index, title }) => {
  const Icon = iconMap[title] || FaServer;

  return (
    <div className="xs:w-[240px] w-full">
      <motion.div
        variants={fadeIn('right', 'spring', index * 0.4, 0.75)}
        className="glass-card gradient-border rounded-[20px] shadow-card group cursor-default"
      >
        <div className="rounded-[20px] py-8 px-10 min-h-[240px] flex justify-evenly items-center flex-col">
          <div className="relative flex items-center justify-center">
            <div
              className="absolute w-20 h-20 rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-500 blur-xl bg-[radial-gradient(circle,_#D4AF37,_transparent)]"
            />
            <div
              className="p-5 rounded-2xl relative z-10 transition-all duration-300 group-hover:scale-110 bg-gold/8 border border-gold/20"
            >
              <Icon size="2.2rem" className="text-gold group-hover:text-gold-light transition-colors duration-300" />
            </div>
          </div>

          <h3 className="text-white text-[18px] font-bold text-center group-hover:text-gold transition-colors duration-300">
            {title}
          </h3>
        </div>
      </motion.div>
    </div>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-white/60 text-[17px] max-w-3xl leading-[32px]"
      >
        I'm a skilled software developer with experience in several different programming languages. I have written
        backend systems in{' '}
        <span className="text-gold font-medium">Python, Java and Node</span>. On the frontend side I have experience
        with Javascript and Typescript with frameworks like{' '}
        <span className="text-gold font-medium">React, Vue, and Three.js</span>. I'm a quick learner and collaborate
        closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems.
        I actively follow the latest trends in AI-assisted development, working daily within the{' '}
        <span className="text-gold font-medium">Claude Code ecosystem</span> and modern agentic coding workflows.
        Let's work together to bring your ideas to life!
      </motion.p>

      <div className="mt-16 flex-wrap gap-8 hidden md:flex">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');
