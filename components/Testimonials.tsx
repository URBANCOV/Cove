import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Star, Quote } from 'lucide-react';
import SectionWrapper from './SectionWrapper';

const TESTIMONIALS = [
  {
    id: 1,
    headline: "Really loved the logo design. Great work!",
    body: "UrbanCove was super enthusiastic and easy to work with. They took feedback well and delivered a design that perfectly fit my vision for my side project.",
    rating: 5.0,
    author: "Smooth K",
    avatar: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=100&auto=format&fit=crop"
  },
  {
    id: 2,
    headline: "A great collaborator with a keen eye for design.",
    body: "I worked with UrbanCove on a small web project. They were very communicative, eager to learn our requirements, and provided some really fresh design ideas.",
    rating: 5.0,
    author: "Sarah Jenkins",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop"
  },
  {
    id: 3,
    headline: "Delivered exactly what we asked for.",
    body: "UrbanCove helped us redesign our landing page. They were very receptive to our ideas and worked hard to make sure the final prototype looked clean and modern.",
    rating: 4.9,
    author: "Marcus Chen",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop"
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <SectionWrapper id="testimonials">
      <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
        {/* Left Column */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 flex flex-col justify-center"
        >
          <p className="text-sm text-gray-400 mb-4 tracking-wide">Testimonials</p>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
            Trusted by<br />many.
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed max-w-sm">
            Here's what people have to say about working together. Real moments, real experiences, real feedback.
          </p>
        </motion.div>

        {/* Right Column */}
        <div className="lg:col-span-7 flex flex-col justify-center relative">
          <div className="min-h-[300px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="w-full"
              >
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-6 leading-tight tracking-tight">
                  {current.headline}
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-2xl">
                  {current.body}
                </p>

                <div className="flex items-center justify-between relative">
                  <div className="flex items-center gap-6">
                    <span className="text-gray-500 text-sm font-mono">[{currentIndex + 1}]</span>
                    <img 
                      src={current.avatar} 
                      alt={current.author} 
                      className="w-14 h-14 rounded-full object-cover border border-white/10"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span className="font-medium text-white text-sm">{current.rating.toFixed(1)} / 5</span>
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              size={14} 
                              className={i < Math.floor(current.rating) ? "fill-white text-white" : "fill-transparent text-gray-600"} 
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-400 text-sm">{current.author}</p>
                    </div>
                  </div>
                  
                  {/* Large Quote Icon */}
                  <Quote className="w-20 h-20 text-white/5 absolute right-0 top-1/2 -translate-y-1/2 rotate-180" />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Divider */}
          <div className="w-full h-[1px] bg-white/10 my-10" />

          {/* Navigation */}
          <div className="flex items-center gap-8">
            <button 
              onClick={prev} 
              className="flex items-center gap-3 text-gray-400 hover:text-white transition-all duration-300 ease-out hover:scale-105 active:scale-95 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded-full pr-4 cursor-pointer"
            >
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-all shadow-[0_0_10px_rgba(255,255,255,0.05)] group-hover:shadow-[0_0_15px_rgba(255,255,255,0.15)]">
                <ArrowLeft size={18} />
              </div>
              <span className="text-sm font-medium">Previous</span>
            </button>
            <button 
              onClick={next} 
              className="flex items-center gap-3 text-white hover:text-gray-300 transition-all duration-300 ease-out hover:scale-105 active:scale-95 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded-full pl-4 cursor-pointer"
            >
              <span className="text-sm font-medium">Next</span>
              <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center group-hover:bg-gray-200 transition-all shadow-[0_0_15px_rgba(255,255,255,0.3)] group-hover:shadow-[0_0_25px_rgba(255,255,255,0.5)]">
                <ArrowRight size={18} />
              </div>
            </button>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Testimonials;
