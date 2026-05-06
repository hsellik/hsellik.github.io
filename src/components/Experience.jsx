import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';

import 'react-vertical-timeline-component/style.min.css';

import { styles } from '../styles';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: 'rgba(255, 255, 255, 0.04)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(212, 175, 55, 0.2)',
        boxShadow: '0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(212,175,55,0.08)',
        color: '#fff',
        borderRadius: '12px',
      }}
      contentArrowStyle={{ borderRight: '7px solid rgba(212, 175, 55, 0.3)' }}
      date={experience.date}
      iconStyle={{
        background: experience.iconBg,
        boxShadow: '0 0 0 3px rgba(212, 175, 55, 0.5), 0 0 20px rgba(212,175,55,0.2)',
      }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img src={experience.icon} alt={experience.company_name} className="w-[60%] h-[60%] object-contain" />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[22px] font-bold">{experience.title}</h3>
        <p className="text-[15px] font-semibold m-0 text-gold">
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li key={`experience-point-${index}`} className="text-white/70 text-[13px] pl-1 tracking-wide leading-relaxed">
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>What I have done so far</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Work Experience.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline lineColor="rgba(212, 175, 55, 0.4)">
          {experiences.map((experience, index) => (
            <ExperienceCard key={`experience-${index}`} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, 'work');
