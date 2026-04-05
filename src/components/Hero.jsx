import { motion } from 'framer-motion';
import { User, Code, Briefcase } from 'lucide-react';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <div className="container mx-auto px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="inline-flex items-center gap-3 bg-slate-800/50 p-4 rounded-full mb-8 glass"
        >
          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
            <User className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent">
              Nizar Portfolio
            </h1>
            <p className="text-xl text-slate-400">Full-Stack Developer & Designer</p>
          </div>
        </motion.div>
        
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-slate-300 leading-relaxed">
          Passionate about crafting exceptional digital experiences with React, Tailwind, and modern web technologies.
          Let's build something amazing together!
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl shadow-2xl transition-all duration-300 flex items-center gap-3"
          >
            <Briefcase className="w-5 h-5" />
            View Projects
          </motion.button>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            <motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-slate-600 hover:border-slate-500 text-slate-300 hover:text-slate-100 font-semibold rounded-xl backdrop-blur-sm transition-all duration-300 inline-flex items-center gap-3"
            >
              <Code className="w-5 h-5" />
              Get In Touch
            </motion.span>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;

