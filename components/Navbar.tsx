import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine if we've scrolled past the top
      setScrolled(currentScrollY > 20);

      // Hide navbar if scrolling down and past the hero section (e.g., 500px)
      // Show navbar if scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 500) {
        setHidden(true);
        setIsOpen(false); // Close mobile menu if open when scrolling down
      } else {
        setHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 md:p-6 pointer-events-none">
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ 
          y: hidden ? -150 : 0, 
          opacity: hidden ? 0 : 1 
        }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className={`
          w-full max-w-[1600px] rounded-2xl md:rounded-full px-6 py-3 
          flex items-center justify-between pointer-events-auto
          transition-colors duration-300
          border border-white/10
          ${scrolled || isOpen ? 'bg-black/60 backdrop-blur-xl shadow-2xl shadow-black/50' : 'bg-white/5 backdrop-blur-sm shadow-lg'}
        `}
      >
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, '#home')}
          className="font-display text-xl font-bold tracking-tight text-white z-50 cursor-pointer"
        >
          UrbanCove<span className="text-gray-400">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="px-4 py-2 text-sm font-medium text-gray-300 rounded-full hover:text-white hover:bg-white/10 transition-all duration-300 ease-out cursor-pointer"
            >
              {link.label}
            </a>
          ))}
          <div className="pl-4">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="px-6 py-2.5 text-sm font-semibold text-black bg-white rounded-full transition-all duration-300 ease-out transform-gpu hover:scale-105 shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.5)] active:scale-95 cursor-pointer inline-block"
            >
              Let's Talk
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none z-50 p-2 rounded-full hover:bg-white/10 transition-colors shadow-[0_0_10px_rgba(255,255,255,0.1)] hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, margin: 0 }}
              animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
              exit={{ opacity: 0, height: 0, margin: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute top-full left-0 right-0 bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden md:hidden flex flex-col items-center shadow-2xl"
            >
              <div className="flex flex-col items-center py-6 space-y-2 w-full px-4">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-base font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-xl transition-all w-full text-center py-3 cursor-pointer"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="w-full pt-4 pb-2">
                  <a
                    href="#contact"
                    onClick={(e) => handleNavClick(e, '#contact')}
                    className="block w-full text-center px-6 py-3 text-base font-semibold text-black bg-white rounded-xl transition-all duration-300 ease-out transform-gpu hover:scale-105 shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.5)] active:scale-95 cursor-pointer"
                  >
                    Let's Talk
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </nav>
  );
};

export default Navbar;