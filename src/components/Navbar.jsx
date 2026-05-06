import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { navLinks } from '../constants';
import { menu, close, sellik } from '../assets';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaGoogleScholar } from 'react-icons/fa6';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-4 fixed top-0 z-20 transition-all duration-500 ${
        scrolled ? 'glass-nav' : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-3 group"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <div className="relative">
            <img
              src={sellik}
              alt="hendrig-photo"
              className="w-9 h-9 object-contain rounded-full ring-1 ring-gold/30 group-hover:ring-gold/70 transition-all duration-300"
            />
            <div className="absolute inset-0 rounded-full bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <p className="text-white text-[18px] font-bold cursor-pointer">
            Hendrig{' '}
            <span className="gold-text-gradient">Sellik</span>
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10 items-center">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`relative text-[16px] font-medium cursor-pointer transition-colors duration-300 ${
                active === nav.title ? 'text-gold' : 'text-white/60 hover:text-gold'
              }`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
              {active === nav.title && (
                <span className="absolute -bottom-1 left-0 right-0 h-px bg-gold glow-gold-sm" />
              )}
            </li>
          ))}

          <li className="flex items-center gap-4 ml-2 border-l border-white/10 pl-6">
            <a
              href="https://www.linkedin.com/in/hendrig-sellik-9ba423113"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="text-white/50 hover:text-gold transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold rounded"
            >
              <FaLinkedin size="1.4rem" />
            </a>
            <a
              href="https://github.com/hsellik"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="text-white/50 hover:text-gold transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold rounded"
            >
              <FaGithub size="1.4rem" />
            </a>
            <a
              href="https://scholar.google.com/citations?user=YGJ29eUAAAAJ&hl=en&oi=ao"
              target="_blank"
              rel="noreferrer"
              aria-label="Google Scholar profile"
              className="text-white/50 hover:text-gold transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold rounded"
            >
              <FaGoogleScholar size="1.4rem" />
            </a>
          </li>
        </ul>

        {/* Mobile menu */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <button
            onClick={() => setToggle(!toggle)}
            aria-label="Toggle navigation menu"
            aria-expanded={toggle}
            className="w-8 h-8 flex flex-col justify-center gap-1.5 group focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold rounded"
          >
            <span
              className={`block h-0.5 w-full bg-gold transition-all duration-300 ${toggle ? 'rotate-45 translate-y-2' : ''}`}
            />
            <span
              className={`block h-0.5 w-full bg-gold transition-all duration-300 ${toggle ? 'opacity-0' : ''}`}
            />
            <span
              className={`block h-0.5 w-full bg-gold transition-all duration-300 ${toggle ? '-rotate-45 -translate-y-2' : ''}`}
            />
          </button>

          <div
            className={`${
              !toggle ? 'hidden' : 'flex'
            } glass p-6 absolute top-16 right-4 min-w-[180px] z-30 rounded-xl`}
          >
            <ul className="list-none flex flex-col gap-4 w-full">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-medium cursor-pointer text-[15px] transition-colors duration-300 ${
                    active === nav.title ? 'text-gold' : 'text-white/70 hover:text-gold'
                  }`}
                  onClick={() => {
                    setToggle(false);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
              <li className="flex gap-4 pt-2 border-t border-white/10">
                <a href="https://www.linkedin.com/in/hendrig-sellik-9ba423113" target="_blank" rel="noreferrer" aria-label="LinkedIn profile" className="text-white/50 hover:text-gold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold rounded">
                  <FaLinkedin size="1.3rem" />
                </a>
                <a href="https://github.com/hsellik" target="_blank" rel="noreferrer" aria-label="GitHub profile" className="text-white/50 hover:text-gold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold rounded">
                  <FaGithub size="1.3rem" />
                </a>
                <a href="https://scholar.google.com/citations?user=YGJ29eUAAAAJ&hl=en&oi=ao" target="_blank" rel="noreferrer" aria-label="Google Scholar profile" className="text-white/50 hover:text-gold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold rounded">
                  <FaGoogleScholar size="1.3rem" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
