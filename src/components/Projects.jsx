import { motion } from 'framer-motion';
import { Eye } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce app with React, Node.js, MongoDB, Stripe payments.',
    tech: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
    github: '#',
    live: '#',
    image: '/src/assets/hero.png',
  },
  {
    title: 'Task Management App',
    description: 'Modern task manager with drag & drop, real-time collaboration using Socket.io.',
    tech: ['Next.js', 'TypeScript', 'Prisma', 'Tailwind'],
    github: '#',
    live: '#',
    image: '/src/assets/react.svg',
  },
  {
    title: 'Weather Dashboard',
    description: 'Real-time weather app with animated charts and location-based forecasts.',
    tech: ['React', 'Chart.js', 'OpenWeather API', 'Framer Motion'],
    github: '#',
    live: '#',
    image: '/src/assets/vite.svg',
  },
  {
    title: 'Portfolio Website',
    description: 'This very website! Built with React, Tailwind, Flowbite, and smooth animations.',
    tech: ['React', 'TailwindCSS', 'Flowbite', 'Framer Motion'],
    github: 'https://github.com/username/portfolio-nizar',
    live: '#',
    image: '/src/assets/react.svg',
  },
];

const Projects = () => {
  return (
    <div className="container mx-auto px-4">
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-center mb-20 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent"
      >
        Featured Projects
      </motion.h2>
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ staggerChildren: 0.15 }}
        className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto"
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -20 }}
            className="glass rounded-3xl overflow-hidden shadow-2xl group hover:shadow-green-500/25 border border-slate-700/50 bg-gradient-to-br from-slate-800/30 to-slate-900/30"
          >
            <div className="relative h-48 bg-gradient-to-r from-slate-700 to-slate-800 group-hover:scale-105 transition-transform duration-500 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-slate-300 text-sm line-clamp-2">{project.description}</p>
              </div>
            </div>
            
            <div className="p-8">
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-slate-700/50 text-xs rounded-full text-slate-300 border border-slate-600">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center gap-2 px-4 py-2 bg-slate-800/50 hover:bg-slate-700/50 rounded-xl border border-slate-600 transition-all text-slate-300 hover:text-white">
                  <FaGithub className="w-4 h-4" />
                  Code
                </a>
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 rounded-xl shadow-lg hover:shadow-green-500/50 transition-all text-white font-medium">
                  <Eye className="w-4 h-4" />
                  Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;

