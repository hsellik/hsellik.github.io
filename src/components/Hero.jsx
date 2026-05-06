import { motion } from 'framer-motion';

import { styles } from '../styles';
import { heroPhoto } from '../assets';

const heroMask = [
  'linear-gradient(to right, transparent 0%, black 28%, black 82%, transparent 100%)',
  'linear-gradient(to bottom, transparent 0%, black 10%, black 76%, transparent 100%)',
].join(', ');

const Hero = () => {
  return (
    <section className="relative w-full h-screen max-h-[900px] mx-auto overflow-hidden">

      <div
        className="absolute top-[68px] bottom-0 inset-x-0 3xl:max-w-[1920px] 3xl:mx-auto"
        style={{
          overflow: 'hidden',
          maskImage: heroMask,
          maskComposite: 'intersect',
          WebkitMaskImage: heroMask,
          WebkitMaskComposite: 'source-in',
        }}
      >
        <img
          src={heroPhoto}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-[45%_top] sm:object-[55%_top] xl:object-left-top [transform:scaleX(-1)_translateY(-5%)] sm:[transform:scaleX(-1)]"
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at 78% 32%, transparent 14%, rgba(0,0,0,0.40) 42%, rgba(0,0,0,0.72) 70%)',
          }}
        />
      </div>

      <div className="sm:hidden absolute inset-0 pointer-events-none bg-black/10" />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom right, rgba(5,5,5,0.92) 0%, rgba(5,5,5,0.65) 22%, rgba(5,5,5,0.2) 42%, transparent 62%)',
        }}
      />

      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div
            className="w-5 h-5 rounded-full glow-gold bg-[radial-gradient(circle,_#FFD700,_#D4AF37)]"
          />
          <div className="w-px sm:h-80 h-40 gold-gradient-line" />
        </div>

        <div className="pt-1">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className={`${styles.heroHeadText} text-white`}
          >
            Hi, I'm{' '}
            <span className="shimmer-gold text-glow-gold inline-block">
              Hendrig
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className={`${styles.heroSubText} mt-2`}
          >
            Senior Full Stack Software Engineer
            <span className="typing-cursor" />
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
            className="flex flex-wrap gap-2 mt-6"
          >
            {['Backend', 'Frontend', 'AI / ML', 'DevOps'].map((tag, i) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium rounded-full glass border-gold/30 text-gold/80 whitespace-nowrap"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about" aria-label="Scroll to About section">
          <div className="w-[32px] h-[58px] rounded-3xl border-2 border-gold/40 flex justify-center items-start p-2 hover:border-gold/80 transition-colors duration-300">
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
              className="w-2 h-2 rounded-full bg-gold shadow-[0_0_8px_rgba(212,175,55,0.8)]"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
