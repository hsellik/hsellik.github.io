import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  nodejs,
  java,
  postgresql,
  python,
  git,
  figma,
  docker,
  adyen,
  cgi,
  gscan,
  icefire,
  ringit,
  threejs,
  merchantmind,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Experience',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Backend Developer',
    icon: web,
  },
  {
    title: 'Frontend Developer',
    icon: mobile,
  },
  {
    title: 'Critical Thinker',
    icon: backend,
  },
  {
    title: 'Team Player',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'Java',
    icon: java,
  },
  {
    name: 'Python',
    icon: python,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'PostgreSQL',
    icon: postgresql,
  },
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Senior Software Engineer',
    company_name: 'GScan (Tallinn, Estonia)',
    icon: gscan,
    iconBg: 'white',
    date: 'November 2023 - present',
    points: [
      'Leading frontend development and using novel solution to display large 3D volumetric data through the web browser',
      'Actively contributing to Python backend system',
      'Helping product owners to shape their ideas into a working product',
    ],
  },
  {
    title: 'Senior Software Engineer',
    company_name: 'RingIT (Tallinn, Estonia)',
    icon: ringit,
    iconBg: 'white',
    date: 'Sep 2020 - Nov 2023',
    points: [
      'Worked on various fintech projects using industry standard technologies such as Java (Spring Boot), NodeJs (NestJS), Javascript (Vue/React) and PostgreSQL',
      'Collaborated with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Worked with small and agile startups, but also with bigger clients',
      'Mentored and helped other developers.',
    ],
  },
  {
    title: 'Master Thesis with AI',
    company_name: 'Adyen (Amsterdam, Netherlands)',
    icon: adyen,
    iconBg: 'white',
    date: 'Dec 2019 - Sept 2020',
    points: [
      'Worked on a 9 month Master Thesis project in order to enhance code review process at Adyen, Amsterdam',
      'Used novel artificial intelligence techniques in order to focus developers attention to code that is most likely containing bugs',
    ],
  },
  {
    title: 'Software Developer',
    company_name: 'CGI (Tallinn, Estonia)',
    icon: cgi,
    iconBg: 'white',
    date: 'Mar 2017 - Aug 2018',
    points: [
      'Part of a team developing a large enterprise solution for Norway’s new national electrical grid system',
      'Worked in an Estonian scrum team collaborating closely with Norwegian colleagues',
    ],
  },
  {
    title: 'Full Stack Developer Intern',
    company_name: 'Icefire (Tallinn, Estonia)',
    icon: icefire,
    iconBg: 'white',
    date: 'June 2016 - Aug 2016',
    points: [
      'Helped to build a custom tailored self-servicing website using latest technologies to the biggest Telecom company in Estonia.',
      'Worked on first real problems and learned how software teams work',
    ],
  },
];

const testimonials = [
  {
    testimonial: '',
    name: '',
    designation: '',
    company: '',
    image: 'image_url',
  },
];

const projects = [
  {
    name: 'MerchantMind',
    description:
      'Web-based platform that allows users to create a shopping cart after answering a questionnaire. A back-office for shop owners to manage products, questions and rules for questionnaires.',
    tags: [
      {
        name: 'Vue',
        color: 'green-text-gradient',
      },
      {
        name: 'Tailwind',
        color: 'pink-text-gradient',
      },
      {
        name: 'Java',
        color: 'orange-text-gradient',
      },
      {
        name: 'Spring',
        color: 'blue-text-gradient',
      },
    ],
    image: merchantmind,
    source_code_link: 'https://merchantmind.eu/',
  },
];

export { services, technologies, experiences, testimonials, projects };
