import React from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';

const TechBadge = ({ name, icon, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: index * 0.05 }}
    viewport={{ once: true }}
    whileHover={{ y: -6, scale: 1.05 }}
    className="group flex flex-col items-center gap-3 cursor-default"
  >
    <div
      className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:border-gold/50 bg-white/4 border border-gold/[18%] backdrop-blur-md shadow-[inset_0_1px_0_rgba(212,175,55,0.08)]"
    >
      <div
        className="absolute w-12 h-12 rounded-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-lg bg-gold/50"
      />
      <img
        src={icon}
        alt={name}
        className="w-9 h-9 object-contain relative z-10 group-hover:scale-110 transition-transform duration-300"
      />
    </div>
    <span className="text-[11px] text-white/60 group-hover:text-gold/70 transition-colors duration-300 font-medium tracking-wide">
      {name}
    </span>
  </motion.div>
);

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-6 px-4">
      {technologies.map((technology, index) => (
        <TechBadge key={technology.name} index={index} {...technology} />
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, '');
