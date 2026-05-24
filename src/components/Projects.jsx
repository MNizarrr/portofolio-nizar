import { motion } from 'framer-motion';
import { Eye } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: 'Platform E-Commerce',
    description: 'Aplikasi e-commerce lengkap dengan React, Node.js, MongoDB, dan integrasi pembayaran Stripe.',
    tech: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
    github: '#',
    live: '#',
    image: '/public/project-picture/ukel.png',
  },
  {
    title: 'Website Waktu Shalat',
    description: 'Website untuk melihat waktu shalat setiap kota di Indonesia.',
    tech: ['React.js', 'JavaScript', 'Tailwind', 'API'],
    github: 'https://github.com/MNizarrr/Prayer-Schedule-App',
    live: '#',
    image: '/public/project-picture/fetch-api.png',
  },
  {
    title: 'Website Gizi',
    description: 'Website untuk menghitung gizi dan penjadwalan olahraga',
    tech: ['Laravel', 'PHP', 'Chart.js', 'SQL'],
    github: 'https://github.com/MNizarrr/Nutrition-Project',
    live: '#',
    image: '/public/project-picture/gizi-fit.png',
  },
  {
    title: 'Website Portfolio',
    description: 'Website portfolio ini! Dibangun dengan React, Tailwind, Flowbite, dan animasi smooth.',
    tech: ['React', 'TailwindCSS', 'Flowbite', 'Framer Motion'],
    github: '#',
    live: '#',
    image: '/src/assets/react.svg',
  },
  {
    title: 'Dashboard',
    description: 'Aplikasi cuaca real-time dengan grafik animasi dan prakiraan berbasis lokasi.',
    tech: ['React', 'Chart.js', 'OpenWeather API', 'Framer Motion'],
    github: '#',
    live: '#',
    image: '/src/assets/vite.svg',
  },
  {
    title: 'Website Portfolio',
    description: 'Website portfolio ini! Dibangun dengan React, Tailwind, Flowbite, dan animasi smooth.',
    tech: ['React', 'TailwindCSS', 'Flowbite', 'Framer Motion'],
    github: '#',
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
        className="text-4xl md:text-5xl font-bold text-center mb-20 bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent"
      >
        Proyek Unggulan
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
            className="relative group overflow-hidden rounded-3xl border border-purple-500/30 bg-gradient-to-br from-slate-800/40 to-slate-900/40 shadow-2xl hover:shadow-purple-500/30 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-violet-600/10 opacity-0 group-hover:opacity-100 transition-all duration-300" />
            
            <div className="relative h-48 bg-gradient-to-r from-slate-700 to-slate-800 group-hover:scale-105 transition-transform duration-500 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-slate-300 text-sm line-clamp-2">{project.description}</p>
              </div>
            </div>
            
            <div className="relative p-8">
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-purple-600/20 hover:bg-purple-600/40 text-xs rounded-full text-purple-300 border border-purple-500/30 transition-all duration-300">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-slate-800/70 hover:bg-slate-700/70 rounded-xl border border-purple-500/30 hover:border-purple-500/60 transition-all text-slate-300 hover:text-purple-300 font-medium">
                  <FaGithub className="w-4 h-4" />
                  Kode
                </a>
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 rounded-xl shadow-lg hover:shadow-purple-500/50 transition-all text-white font-medium">
                  <Eye className="w-4 h-4" />
                  Demo
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

