import React from 'react';
import { motion } from 'framer-motion';

const FigmaLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 38 57" className={className} overflow="visible" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" fill="#1abcfe"/>
    <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" fill="#0acf83"/>
    <path d="M19 0h9.5a9.5 9.5 0 1 1 0 19H19V0z" fill="#ff7262"/>
    <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="#f24e1e"/>
    <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="#a259ff"/>
  </svg>
);

const FramerLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 38 57" className={className} overflow="visible" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 0h38v19H19z" fill="#00AAFF"/>
    <path d="M0 19h19l19 19H0z" fill="#0055FF"/>
    <path d="M0 38h19v19z" fill="#0055FF"/>
  </svg>
);

const ReplitLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} overflow="visible" xmlns="http://www.w3.org/2000/svg">
    <rect x="15" y="15" width="30" height="30" rx="6" fill="#F26207" />
    <rect x="15" y="55" width="30" height="30" rx="6" fill="#F26207" />
    <rect x="55" y="35" width="30" height="30" rx="6" fill="#F26207" />
  </svg>
);

const LovableLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} overflow="visible" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="loveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FF7A00" />
        <stop offset="50%" stopColor="#FF004D" />
        <stop offset="100%" stopColor="#5E5CE6" />
      </linearGradient>
    </defs>
    <path d="M 20 80 L 60 80 A 20 20 0 0 0 60 40 A 20 20 0 0 0 20 40 Z" fill="url(#loveGrad)"/>
  </svg>
);

const AntiGravityLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} overflow="visible" xmlns="http://www.w3.org/2000/svg">
    <path d="M 50 10 L 55 40 L 85 20 L 65 45 L 90 50 L 65 55 L 85 80 L 55 60 L 50 90 L 45 60 L 15 80 L 35 55 L 10 50 L 35 45 L 15 20 L 45 40 Z" fill="#E06A4E" strokeLinejoin="round" />
  </svg>
);

const CloudCodesLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} overflow="visible" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="cloudGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#4ADE80" />
        <stop offset="50%" stopColor="#3B82F6" />
        <stop offset="100%" stopColor="#EF4444" />
      </linearGradient>
    </defs>
    <path d="M 20 80 A 30 30 0 0 1 80 80" fill="none" stroke="url(#cloudGrad)" strokeWidth="16" strokeLinecap="round" />
  </svg>
);

const LOGOS = [
  { name: 'Anti Gravity', Icon: AntiGravityLogo },
  { name: 'Framer', Icon: FramerLogo },
  { name: 'Figma', Icon: FigmaLogo },
  { name: 'Replit', Icon: ReplitLogo },
  { name: 'Cloud Codes', Icon: CloudCodesLogo },
  { name: 'Lovable', Icon: LovableLogo },
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
        className="relative w-full flex overflow-hidden"
        style={{ maskImage: 'linear-gradient(to right, transparent, black min(100px, 15vw), black calc(100% - min(100px, 15vw)), transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black min(100px, 15vw), black calc(100% - min(100px, 15vw)), transparent)' }}
      >
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 30
          }}
          className="flex gap-8 sm:gap-12 md:gap-16 lg:gap-24 items-center w-max pr-8 sm:pr-12 md:pr-16 lg:pr-24 py-4 md:py-8"
        >
          {duplicatedLogos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center group cursor-default px-2 sm:px-4">
              <logo.Icon className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto brightness-0 invert opacity-60 group-hover:brightness-100 group-hover:invert-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-[0.22,1,0.36,1]" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LogoMarquee;
