import React from 'react';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import { FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div variants={slideIn('left', 'tween', 0.2, 1)} className="flex-[0.75] bg-black-100 p-6 rounded-2xl">
        <p className={styles.sectionSubText}>Get in touch</p>
        <span className="flex gap-5 items-center">
          <a href="https://www.linkedin.com/in/hendrig-sellik-9ba423113" target="_blank" rel="noreferrer">
            <h3 className={`${styles.sectionHeadText} hover:text-gold transition-colors duration-300`}>Contact</h3>
          </a>

          <a href="https://www.linkedin.com/in/hendrig-sellik-9ba423113" target="_blank" rel="noreferrer" className="text-white hover:text-gold transition-colors duration-300">
            <FaLinkedin size={'3em'}/>
          </a>
        </span>

        <a
          href="https://www.linkedin.com/in/hendrig-sellik-9ba423113"
          target="_blank"
          rel="noreferrer"
          className="hover:text-gold transition-colors duration-300"
        >
          Contact me on Linkedin
        </a>
      </motion.div>

      <motion.div variants={slideIn('right', 'tween', 0.2, 1)} className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
