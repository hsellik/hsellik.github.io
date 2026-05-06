import { BrowserRouter } from 'react-router-dom';

import { About, Contact, Experience, Hero, Navbar, Tech, Works, Expertise } from './components';
import ParticleBackground from './components/ParticleBackground';

const App = () => {
  return (
    <BrowserRouter>
      <div className="fixed inset-0 bg-primary z-[-2]" />
      <ParticleBackground />
      <div className="ambient-orb orb-1" />
      <div className="ambient-orb orb-2" />

      <div className="relative z-[2]">
        <div className="hero-bg">
          <div className="hero-grid-overlay" />
          <Navbar />
          <Hero />
        </div>

        <About />
        <Experience />
        <Expertise />

        <div className="hidden md:block">
          <Tech />
        </div>

        <Works />

        <div className="relative z-0">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
