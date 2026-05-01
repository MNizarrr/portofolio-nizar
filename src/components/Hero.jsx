import { motion } from 'framer-motion';
import { Code, ArrowRight } from 'lucide-react';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <div className="container mx-auto px-4 text-center pt-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto"
      >
        {/* Profile Photo */}
        {/* <motion.div
          animate={{ 
            boxShadow: [
              '0 0 20px rgba(168,85,247,0.3)',
              '0 0 40px rgba(168,85,247,0.6)',
              '0 0 20px rgba(168,85,247,0.3)'
            ]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="relative w-40 h-40 mx-auto mb-12 group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-all duration-500" />
          <div className="relative w-full h-full rounded-3xl border-2 border-purple-500/30 overflow-hidden shadow-2xl bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
            <div className="w-full h-full bg-gradient-to-br from-purple-400/20 to-violet-600/20 flex items-center justify-center">
              <span className="text-6xl">N</span>
            </div>
          </div>
        </motion.div> */}
        
        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-200 via-violet-200 to-indigo-200 bg-clip-text text-transparent leading-tight"
        >
          Muhammad Nizar
        </motion.h1>
        
        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-sm mb-8 hover:border-purple-500/60 transition-all duration-300"
        >
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
          <p className="text-lg text-purple-300 font-semibold">Developer Fullstack & Designer</p>
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
      </motion.div>
    </div>
  );
};

export default Hero;

