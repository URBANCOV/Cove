import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      
      {/* Spotlight Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120vw] md:w-[70vw] h-[80vh] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/20 via-white/5 to-transparent pointer-events-none z-0 blur-2xl" />

      {/* Massive Background Text */}
      <div className="absolute top-24 md:top-32 left-0 w-full flex flex-col items-center justify-center z-0 pointer-events-none select-none px-4">
        <motion.h1 
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.08 } }
          }}
          className="text-[18vw] md:text-[15vw] font-bold text-white leading-[0.8] tracking-tighter whitespace-nowrap flex overflow-hidden"
        >
          {"URBAN COVE".split('').map((char, i) => (
            <motion.span 
              key={i} 
              variants={{
                hidden: { opacity: 0, y: "100%" },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
              }}
              className="inline-block"
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </motion.h1>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-between w-full max-w-[95vw] md:max-w-[85vw] mt-4 md:mt-8"
        >
          <span className="font-display text-[6vw] md:text-[4vw] font-light text-gray-300 tracking-[0.1em] md:tracking-[0.2em] uppercase">Frontend</span>
          <span className="font-display text-[6vw] md:text-[4vw] font-light text-gray-300 tracking-[0.1em] md:tracking-[0.2em] uppercase">Engineer</span>
        </motion.div>
      </div>

      {/* Foreground Content (Left aligned) */}
      <div className="w-full mx-auto max-w-[95vw] md:max-w-[85vw] relative z-20 min-h-screen flex items-end pb-32 md:pb-48">
        <div className="max-w-xs md:max-w-sm">
          <motion.p
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-sm md:text-base text-gray-300 mb-8 leading-relaxed drop-shadow-lg"
          >
            Hey there! I'm a Frontend Engineer & UI/UX Designer working in the global marketplace, focused on building intuitive, minimalist interfaces.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-bold text-black bg-white rounded-full hover:bg-gray-200 transition-all duration-300 ease-out hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              Schedule Call
            </a>
          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default Hero;