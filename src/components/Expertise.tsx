import SectionWrapper from '../hoc/SectionWrapper';
import { styles } from '../styles';
import { Chip } from './';
import React from 'react';
import { motion } from 'framer-motion';
import { textVariant, fadeIn } from '../utils/motion';
import { FaPython, FaReact } from 'react-icons/fa';
import { SiKubernetes } from 'react-icons/si';
import { claude } from '../assets';

const labelsFirst = ['Python (FastAPI)', 'Java (Spring)', 'NodeJS (NestJS)', 'PostgreSQL', 'DuckDB', 'Redis'];

const labelsSecond = [
  'React',
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
  'Kubernetes',
  'Docker',
  'Google Cloud',
  'AWS',
  'GitHub Actions',
  'GitLab CI/CD',
  'Turborepo',
  'NGINX',
  'CI/CD Pipelines',
];

const labelsAI = ['Claude Code', 'Agentic Workflows', 'Claude Plugins', 'MCP', 'Prompt Engineering', 'AI Pipelines'];

const expertiseCards = [
  {
    icon: <img src={claude} alt="Claude" className="w-10 h-10 object-contain" style={{ filter: 'brightness(0) saturate(100%) invert(79%) sepia(44%) saturate(549%) hue-rotate(4deg) brightness(93%) contrast(91%)' }} />,
    title: 'AI-Era Engineering',
    description:
      'I work daily within the Claude Code ecosystem, building agentic workflows and integrating LLMs into production pipelines. I stay current with the rapidly evolving AI tooling landscape.',
    labels: labelsAI,
  },
  {
    icon: <FaPython size="2.5em" className="text-gold" />,
    title: 'Backend Development',
    description:
      'I have built a diverse array of web application backends from scratch using modern technologies such as Python, Java and NodeJS. I have strong proficiency in Python (FastAPI) and Java (Spring Framework).',
    labels: labelsFirst,
  },
  {
    icon: <FaReact size="2.5em" className="text-gold" />,
    title: 'Frontend Development',
    description:
      'I am fluent in Vue and React, having built several frontend applications, both big and small, for startups and larger fintech clients. I know the modern tooling required to maintain and bundle production code.',
    labels: labelsSecond,
  },
  {
    icon: <SiKubernetes size="2.5em" className="text-gold" />,
    title: 'DevOps & Automation',
    description:
      'Once the application is built, I help clients set up DevOps testing, CI/CD pipelines, and deployment automation to support the successful Go-Live.',
    labels: labelsThird,
  },
];

function Expertise() {
  return (
    <div className="mt-16 w-full flex flex-col items-center justify-center" id="expertise">
      <div className="flex flex-col text-left gap-8 w-full">
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText}`}>The tech stack I am familiar with</p>
          <h2 className={`${styles.sectionHeadText}`}>Expertise.</h2>
        </motion.div>

        <div className="flex flex-wrap md:flex-nowrap gap-6">
          {expertiseCards.map((card, index) => (
            <motion.div
              key={card.title}
              variants={fadeIn('up', 'spring', index * 0.2, 0.75)}
              className="glass-card gradient-border rounded-[20px] p-7 flex flex-col gap-5 flex-1 min-w-[260px]"
            >
              <div className="flex items-center gap-4">
                <div
                  className="p-3 rounded-xl bg-gold/8 border border-gold/20"
                >
                  {card.icon}
                </div>
                <h3 className="text-[18px] font-bold text-white">{card.title}</h3>
              </div>

              <p className="text-white/60 text-[14px] leading-relaxed">{card.description}</p>

              <div className="flex flex-wrap items-center gap-2">
                <span className="text-gold text-xs font-medium uppercase tracking-wider mr-1">Stack:</span>
                {card.labels.map((label, i) => (
                  <Chip key={i} label={label} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SectionWrapper(Expertise, 'expertise');
