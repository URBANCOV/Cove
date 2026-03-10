import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Real Project' | 'Exploration'>('All');

  const filteredProjects = PROJECTS.filter(project => 
    filter === 'All' ? true : project.type === filter
  );

  return (
    <SectionWrapper id="projects">
      <div className="max-w-[1400px] mx-auto relative">
        {/* Header Section */}
        <div className="relative mb-16 md:mb-24 text-center flex flex-col items-center justify-center">
          {/* Massive Background Text */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none z-0">
            <h2 className="text-[12vw] md:text-[10vw] font-bold text-white/5 leading-none tracking-widest uppercase">
              PORTFOLIO
            </h2>
          </div>
          
          {/* Foreground Title */}
          <motion.h3 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-2xl md:text-4xl font-bold text-white relative z-10 tracking-tight uppercase"
          >
            /SELECTED WORK
          </motion.h3>
        </div>

        {/* Filter Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6"
        >
          <div className="flex items-center gap-6">
            <button 
              onClick={() => setFilter('All')}
              className={`text-sm md:text-base font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded-md px-2 py-1 ${filter === 'All' ? 'text-white [text-shadow:0_0_10px_rgba(255,255,255,0.5)]' : 'text-gray-500 hover:text-gray-300 hover:[text-shadow:0_0_8px_rgba(255,255,255,0.3)]'}`}
            >
              All
            </button>
            <button 
              onClick={() => setFilter('Real Project')}
              className={`text-sm md:text-base font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded-md px-2 py-1 ${filter === 'Real Project' ? 'text-white [text-shadow:0_0_10px_rgba(255,255,255,0.5)]' : 'text-gray-500 hover:text-gray-300 hover:[text-shadow:0_0_8px_rgba(255,255,255,0.3)]'}`}
            >
              Real Project
            </button>
            <button 
              onClick={() => setFilter('Exploration')}
              className={`text-sm md:text-base font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded-md px-2 py-1 ${filter === 'Exploration' ? 'text-white [text-shadow:0_0_10px_rgba(255,255,255,0.5)]' : 'text-gray-500 hover:text-gray-300 hover:[text-shadow:0_0_8px_rgba(255,255,255,0.3)]'}`}
            >
              Exploration
            </button>
          </div>

          <motion.a 
            href="#" 
            className="flex items-center gap-2 text-sm md:text-base font-medium text-white bg-white/10 hover:bg-white/20 px-5 py-2.5 rounded-full transition-all duration-300 ease-out hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
          >
            View All Work <ArrowUpRight size={16} />
          </motion.a>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                key={project.id} 
                className="group cursor-pointer bg-transparent border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-white/5 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                tabIndex={0}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-black/50">
                  {/* Tag on Image */}
                  <div className="absolute top-4 left-4 z-20 bg-white text-black text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg">
                    {project.type}
                  </div>
                  
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <div className="p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-medium text-white mb-6 group-hover:text-gray-300 transition-colors line-clamp-2">
                    {project.title}
                  </h3>
                  
                  <div className="flex flex-wrap items-center gap-3">
                    {project.tags.map((tag, idx) => (
                      <span 
                        key={idx} 
                        className="text-xs font-medium px-4 py-1.5 border border-white/20 text-gray-400 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Projects;