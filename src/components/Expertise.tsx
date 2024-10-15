import SectionWrapper from '../hoc/SectionWrapper';
import { styles } from '../styles';
import { Chip } from './';
import React from 'react';
import { motion } from 'framer-motion';
import { textVariant } from '../utils/motion';
import { FaJava, FaJenkins, FaReact } from 'react-icons/fa';

const labelsFirst = ['Java (Spring)', 'Python (FastAPI)', 'NodeJS (NestJS)', 'PostgreSQL'];

const labelsSecond = [
  'React',
  'Vue',
  'Vue',
  'Javascript',
  'Typescript',
  'CSS',
  'HTML',
  'Vite',
  'ThreeJS',
  'ESLint',
  'Prettier',
];

const labelsThird = [
  'Google Cloud',
  'AWS',
  'Docker',
  'Kubernetes',
  'Turborepo',
  'NGINX',
  'CI/CD Pipelines',
  'Bitbucket Pipelines',
  'GitLab CI/CD ',
  'GitHub Actions',
];

function Expertise() {
  return (
    <div className="mt-16 w-full flex flex-col items-center justify-center " id="expertise">
      <div className="flex flex-col text-left gap-5">
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText}`}>The tech stack I am familiar with</p>
          <h2 className={`${styles.sectionHeadText}`}>Expertise.</h2>
        </motion.div>
        <div className={'flex flex-wrap md:flex-nowrap gap-5'}>
          <div className="flex flex-col gap-5">
            <FaJava size={'3em'} />
            <h3 className="text-[20px] font-bold">Backend Development</h3>
            <p>
              I have built a diverse array of web application backends from scratch using modern technologies such as
              Java, Python and NodeJS. I have the strongest proficiency in Java and Spring Framework.
            </p>
            <div className="flex-chips">
              <div className="flex flex-wrap gap-2">
                <span className="chip-title">Tech stack:</span>
                {labelsFirst.map((label, index) => (
                  <Chip key={index} label={label} />
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <FaReact size={'3em'} />
            <h3 className="text-[20px] font-bold">Frontend Development</h3>
            <p>
              I am fluent in Vue and React, having built several frontend applications, both big and small, for startups
              and larger fintech clients. In addition to writing application code, I have the know-how of the modern
              tooling required to maintain and bundle the production code.
            </p>
            <div className="flex-chips">
              <div className="flex flex-wrap gap-2">
                <span className="chip-title">Tech stack:</span>
                {labelsSecond.map((label, index) => (
                  <Chip key={index} label={label} />
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <FaJenkins size={'3em'} />
            <h3 className="text-[20px] font-bold">DevOps & Automation</h3>
            <p>
              Once the application is built, I help clients set up DevOps testing, CI/CD pipelines, and deployment
              automation to support the successful Go-Live.
            </p>
            <div className="flex-chips">
              <div className="flex flex-wrap gap-2">
                <span className="chip-title">Tech stack:</span>
                {labelsThird.map((label, index) => (
                  <Chip key={index} label={label} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionWrapper(Expertise, 'expertise');
