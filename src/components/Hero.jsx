import { motion } from 'framer-motion';
import { Code, ArrowRight } from 'lucide-react';
import { Link } from 'react-scroll';
import heroImage from '../assets/hero.png';

const Hero = () => {
  return (
    <div className="container mx-auto px-4 pt-8 md:pt-14">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16 lg:gap-24">
          {/* Profile Photo */}
          <motion.div
            animate={{ 
              boxShadow: [
                '0 0 25px rgba(168,85,247,0.28)',
                '0 0 60px rgba(168,85,247,0.55)',
                '0 0 25px rgba(168,85,247,0.28)'
              ]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="relative w-60 h-60 sm:w-[17rem] sm:h-[17rem] lg:w-[22rem] lg:h-[22rem] shrink-0 group"
          >
            <div className="absolute -inset-5 bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 rounded-[2rem] blur-3xl opacity-40 group-hover:opacity-65 transition-all duration-500" />
            <img
              src={heroImage}
              alt="Muhammad Nizar"
              className="relative w-full h-full object-contain rounded-[1.75rem] drop-shadow-[0_28px_45px_rgba(168,85,247,0.35)] group-hover:scale-105 transition-transform duration-500"
            />
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-center md:text-right text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-[0.92] tracking-normal"
          >
            <span className="block font-serif italic text-slate-50 drop-shadow-[0_12px_35px_rgba(168,85,247,0.35)]">
              Muhammad
            </span>
            <span className="block bg-gradient-to-r from-purple-200 via-fuchsia-200 to-indigo-200 bg-clip-text text-transparent drop-shadow-[0_20px_50px_rgba(139,92,246,0.45)]">
              Nizar
            </span>
          </motion.h1>
        </div>

        <div className="mt-12 md:mt-16 text-center">
          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-sm mb-8 hover:border-purple-500/60 transition-all duration-300"
          >
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
            <p className="text-base sm:text-lg text-purple-300 font-semibold">Developer Fullstack & Designer</p>
          </motion.div>
          
          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-slate-300 leading-relaxed"
          >
            Saya bersemangat dalam menciptakan pengalaman digital yang luar biasa dengan teknologi modern. 
            Terampil dalam React, Tailwind CSS, dan berbagai framework terkini.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              to="projects"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer w-full sm:w-auto"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(168,85,247,0.6)' }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-10 py-4 bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 hover:from-purple-700 hover:via-violet-700 hover:to-indigo-700 text-white font-bold rounded-xl shadow-lg hover:shadow-purple-500/50 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                Lihat Proyek
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer w-full sm:w-auto"
            >
              <motion.button
                whileHover={{ scale: 1.05, borderColor: 'rgb(168,85,247)' }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-10 py-4 border-2 border-purple-500/50 hover:border-purple-400 text-purple-300 hover:text-purple-100 font-bold rounded-xl backdrop-blur-sm transition-all duration-300 flex items-center justify-center gap-2 group bg-slate-900/30 hover:bg-purple-500/10"
              >
                <Code className="w-5 h-5" />
                Hubungi Saya
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
