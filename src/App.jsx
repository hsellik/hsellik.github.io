import { BrowserRouter } from 'react-router-dom';

import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas, Expertise } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
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
        {/*<Feedbacks />*/}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
