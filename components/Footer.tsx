import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10 pt-20 pb-10">
      <div className="w-full mx-auto px-6 md:px-12 lg:px-24 max-w-[1600px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          
          {/* Brand & Description (Takes up 2 columns on large screens) */}
          <div className="lg:col-span-2">
            <a href="#home" className="text-5xl md:text-6xl font-bold text-white tracking-tighter mb-6 block">
              UrbanCove<span className="text-blue-500">.</span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Crafting exceptional digital experiences through minimalist design and robust frontend architecture.
            </p>
          </div>

          {/* Column 1: Services */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-sm tracking-wide">Services</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Frontend Dev</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">UI/UX Design</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Web Apps</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Consulting</a></li>
            </ul>
          </div>

          {/* Column 2: Pages */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-sm tracking-wide">Pages</h3>
            <ul className="space-y-4">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors text-sm">Home</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-white transition-colors text-sm">Projects</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors text-sm">About</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors text-sm">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-sm tracking-wide">Quick Links</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">GitHub</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">LinkedIn</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Twitter</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Resume</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-500 text-sm flex gap-2">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>.</span>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <span>.</span>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} UrbanCove. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;