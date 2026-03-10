import React, { useState } from 'react';
import { Send, Check, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate network request
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);

    // Reset success message after 5 seconds
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <SectionWrapper id="contact">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side - Text */}
        <div className="flex flex-col justify-between h-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-20 lg:mb-0 lg:mt-10"
          >
            <h2 className="text-2xl md:text-3xl font-medium text-gray-400 mb-4">Got a project in mind?</h2>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-2 tracking-tight leading-[1.1]">Let's Talk</h1>
            <h2 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500 leading-[1.1]">and Build Together.</h2>
          </motion.div>
        </div>

        {/* Right Side - Form */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-10 shadow-2xl w-full relative overflow-hidden">
          {isSuccess ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-zinc-900/90 backdrop-blur-sm z-10 p-6 animate-in fade-in duration-300">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4 text-green-500">
                <Check size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
              <p className="text-gray-400">Thanks for reaching out. I'll get back to you shortly.</p>
              <button 
                onClick={() => setIsSuccess(false)}
                className="mt-6 px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-full text-sm font-medium transition-all duration-300 ease-out hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.25)]"
              >
                Send another
              </button>
            </div>
          ) : null}

          <motion.form 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
            }}
            onSubmit={handleSubmit} 
            className="space-y-5"
          >
            {/* Name Group */}
            <motion.div variants={{ hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } } }} className="border border-white/10 bg-black/20 rounded-xl p-5 flex flex-col sm:flex-row gap-8">
              <input type="text" required placeholder="First Name" className="w-full bg-transparent border-b border-white/10 pb-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-white/50 transition-colors" />
              <input type="text" required placeholder="Last Name" className="w-full bg-transparent border-b border-white/10 pb-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-white/50 transition-colors" />
            </motion.div>

            {/* Email Group */}
            <motion.div variants={{ hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } } }} className="border border-white/10 bg-black/20 rounded-xl p-5">
              <input type="email" required placeholder="Email Address" className="w-full bg-transparent border-b border-white/10 pb-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-white/50 transition-colors" />
            </motion.div>

            {/* Message Group */}
            <motion.div variants={{ hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } } }} className="border border-white/10 bg-black/20 rounded-xl p-5">
              <textarea required rows={4} placeholder="Tell me about your project..." className="w-full bg-transparent border-b border-white/10 pb-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-white/50 transition-colors resize-none"></textarea>
            </motion.div>

            <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } } }} className="pt-4">
              <button type="submit" disabled={isSubmitting} className="relative overflow-hidden group bg-white hover:bg-gray-200 text-black px-8 py-4 rounded-full flex items-center justify-center gap-3 transition-all duration-300 ease-out hover:scale-105 active:scale-95 disabled:opacity-90 disabled:cursor-not-allowed disabled:hover:scale-100 w-full sm:w-auto min-w-[200px] shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.5)]">
                <span className="flex items-center gap-2">
                  {isSubmitting && <Loader2 className="animate-spin" size={18} />}
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </span>
                <motion.div
                  animate={isSubmitting ? { x: 60, y: -60, opacity: 0, scale: 0.5 } : { x: 0, y: 0, opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: "easeIn" }}
                  className={isSubmitting ? "absolute right-6" : "relative"}
                >
                  <Send size={18} className={!isSubmitting ? "group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" : ""} />
                </motion.div>
              </button>
            </motion.div>
          </motion.form>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;