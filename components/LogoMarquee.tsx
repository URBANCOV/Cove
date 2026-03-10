import React from 'react';
import { motion } from 'framer-motion';
import { Figma, Framer, Code2, Cloud, Heart, Zap } from 'lucide-react';

const LOGOS = [
  { name: 'Anti Gravity', icon: Zap },
  { name: 'Framer', icon: Framer },
  { name: 'Figma', icon: Figma },
  { name: 'Replit', icon: Code2 },
  { name: 'Cloud Codes', icon: Cloud },
  { name: 'Lovable', icon: Heart },
];

const LogoMarquee: React.FC = () => {
  // Duplicate the logos array to create a seamless loop
  const duplicatedLogos = [...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS];

  return (
    <section className="w-full py-16 md:py-24 overflow-hidden flex flex-col items-center relative z-10">
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="text-xs md:text-sm text-gray-500 tracking-[0.2em] uppercase mb-12 font-mono"
      >
        Trusted in production by:
      </motion.p>
      
      <div 
        className="relative w-full flex overflow-x-hidden"
        style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
      >
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 30
          }}
          className="flex gap-8 md:gap-16 items-center w-max pr-8 md:pr-16"
        >
          {duplicatedLogos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center group cursor-default px-4">
              <logo.icon size={48} className="text-white opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LogoMarquee;
