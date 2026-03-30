import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';

const About: React.FC = () => {
  return (
    <SectionWrapper id="about">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Left Column */}
        <div className="flex flex-col justify-between h-full py-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-sm text-gray-400 mb-4 tracking-wide">Introduction</p>
            <h2 className="text-5xl md:text-6xl lg:text-8xl font-bold text-white mb-16 tracking-tight">
              About Me
            </h2>
            
            <div className="flex items-center gap-4 mb-6">
              <span className="text-gray-400 text-lg">Meet</span>
              <div className="w-16 h-[1px] bg-gray-600"></div>
              <span className="text-gray-400 text-lg italic font-serif">UrbanCove</span>
            </div>
            
            <p className="text-gray-400 text-lg leading-relaxed max-w-md mb-12">
              I'm a passionate UI/UX designer at the beginning of my journey, eager to turn creative ideas into clean, user-friendly designs. I love learning new tools, exploring design trends, and collaborating with others to build intuitive digital experiences.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <a href="#contact" className="inline-flex items-center gap-4 group transition-all duration-300 ease-out hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded-full pr-4 cursor-pointer">
              <span className="text-white text-lg font-medium underline underline-offset-4 decoration-white/30 group-hover:decoration-white transition-colors italic font-serif">Contact Me</span>
              <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center group-hover:bg-gray-200 transition-all shadow-[0_0_15px_rgba(255,255,255,0.3)] group-hover:shadow-[0_0_25px_rgba(255,255,255,0.5)]">
                <ArrowRight size={18} />
              </div>
            </a>
          </motion.div>
        </div>

        {/* Right Column - Stats Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
          }}
          className="grid grid-cols-2 gap-x-8 gap-y-16 mt-8 lg:mt-0"
        >
          {/* Stat 1 */}
          <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } } }}>
            <div className="flex items-start mb-4">
              <h3 className="text-6xl md:text-7xl lg:text-[7rem] font-medium text-white tracking-tighter leading-none">10</h3>
              <span className="text-3xl md:text-4xl lg:text-5xl text-white font-light ml-1">+</span>
            </div>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-[200px]">
              Personal projects & design explorations completed
            </p>
          </motion.div>

          {/* Stat 2 */}
          <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } } }}>
            <div className="flex items-start mb-4">
              <h3 className="text-6xl md:text-7xl lg:text-[7rem] font-medium text-white tracking-tighter leading-none">500</h3>
              <span className="text-3xl md:text-4xl lg:text-5xl text-white font-light ml-1">+</span>
            </div>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-[200px]">
              Hours dedicated to learning UI/UX principles
            </p>
          </motion.div>

          {/* Stat 3 */}
          <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } } }}>
            <div className="flex items-start mb-4">
              <h3 className="text-6xl md:text-7xl lg:text-[7rem] font-medium text-white tracking-tighter leading-none">3</h3>
              <span className="text-3xl md:text-4xl lg:text-5xl text-white font-light ml-1">+</span>
            </div>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-[200px]">
              Design tools mastered, including Figma & Framer
            </p>
          </motion.div>

          {/* Stat 4 */}
          <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } } }}>
            <div className="flex items-start mb-4">
              <h3 className="text-6xl md:text-7xl lg:text-[7rem] font-medium text-white tracking-tighter leading-none">100</h3>
              <span className="text-3xl md:text-4xl lg:text-5xl text-white font-light ml-1">%</span>
            </div>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-[200px]">
              Dedication to growing, iterating, and improving
            </p>
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default About;