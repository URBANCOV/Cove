import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  const [activeId, setActiveId] = useState<number | null>(1); // Default to first one open

  return (
    <SectionWrapper id="services">
      <div className="max-w-[1400px] mx-auto">
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-base md:text-lg text-gray-400 mb-16 tracking-widest uppercase"
        >
          /Service
        </motion.p>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
          }}
          className="flex flex-col"
        >
          {SERVICES.map((service, index) => {
            const isActive = activeId === service.id;
            const isLast = index === SERVICES.length - 1;

            return (
              <motion.div 
                key={service.id} 
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } } }}
                className="flex flex-col"
              >
                {/* Top Border for all except first (or all, let's just use border-t) */}
                <div className="w-full h-[1px] bg-white/10" />

                <div 
                  className={`relative cursor-pointer overflow-hidden transition-all duration-500 ${isActive ? 'bg-white/5 py-10 md:py-16 px-6 md:px-12' : 'py-8 md:py-12 px-4 hover:bg-white/[0.02]'}`}
                  onClick={() => setActiveId(isActive ? null : service.id)}
                >
                  <div className="flex justify-between items-start md:items-center relative z-10 w-full">
                    <div className={`flex flex-col ${isActive ? 'w-full md:max-w-[calc(100%-320px)] lg:max-w-[calc(100%-520px)]' : 'max-w-3xl'}`}>
                      <h3 className={`font-medium tracking-tight transition-all duration-500 ${isActive ? 'text-3xl md:text-5xl lg:text-6xl text-white mb-6' : 'text-2xl md:text-4xl lg:text-5xl text-gray-300'}`}>
                        {service.title}
                      </h3>
                      
                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <p className="text-gray-400 text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl">
                              {service.description}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    <div className="flex-shrink-0 ml-6">
                      {isActive ? (
                        <button 
                          className="text-gray-400 hover:text-white transition-colors p-2"
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveId(null);
                          }}
                        >
                          <X size={32} />
                        </button>
                      ) : (
                        <ArrowUpRight size={32} className="text-gray-500" />
                      )}
                    </div>
                  </div>

                  {/* Floating Image for Active State */}
                  <AnimatePresence>
                    {isActive && service.imageUrl && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95, rotate: -2, x: 20 }}
                        animate={{ opacity: 1, scale: 1, rotate: 5, x: 0 }}
                        exit={{ opacity: 0, scale: 0.95, rotate: -2, x: 20 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="hidden md:block absolute right-12 lg:right-24 top-1/2 -translate-y-1/2 w-64 h-40 lg:w-[400px] lg:h-[260px] rounded-xl overflow-hidden shadow-2xl border border-white/10 z-0"
                      >
                        <img 
                          src={service.imageUrl} 
                          alt={service.title} 
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                
                {/* Bottom Border for the last item */}
                {isLast && <div className="w-full h-[1px] bg-white/10" />}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Services;