import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const skills = [
  { name: 'React', level: 'Ahli', icon: '⚛️' },
  { name: 'JavaScript', level: 'Ahli', icon: '⚡' },
  { name: 'Tailwind CSS', level: 'Ahli', icon: '🎨' },
  { name: 'Node.js', level: 'Lanjut', icon: '🔥' },
  { name: 'MongoDB', level: 'Lanjut', icon: '🐘' },
  { name: 'Next.js', level: 'Menengah', icon: '🚀' },
  { name: 'TypeScript', level: 'Menengah', icon: '🔤' },
  { name: 'Python', level: 'Dasar', icon: '🐍' },
];

const softSkills = ['Problem Solving', 'Kolaborasi Tim', 'Manajemen Waktu', 'Komunikasi'];

const Skills = () => {
  return (
    <div className="container mx-auto px-4">
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-center mb-20 bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent"
      >
        Keahlian & Expertise
      </motion.h2>
      
      {/* Hard Skills */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ staggerChildren: 0.1 }}
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10, scale: 1.05 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-violet-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300" />
            <div className="relative p-8 rounded-2xl border border-purple-500/30 bg-slate-900/50 hover:bg-slate-900/80 shadow-2xl hover:shadow-purple-500/25 backdrop-blur-sm text-center transition-all duration-300 group">
              <div className="text-4xl mb-4">{skill.icon}</div>
              <h3 className="text-2xl font-bold mb-2 text-slate-100 group-hover:text-purple-300 transition-colors">{skill.name}</h3>
              <p className="text-slate-400 text-sm capitalize">{skill.level}</p>
              <Sparkles className="w-6 h-6 text-purple-400 mx-auto mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300" />
            </div>
          </motion.div>
        ))}
      </motion.div>
      
      {/* Soft Skills */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto"
      >
        <h3 className="text-3xl font-bold text-center mb-10 text-slate-200">Soft Skills</h3>
        <div className="flex flex-wrap gap-4 justify-center">
          {softSkills.map((skill) => (
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(168,85,247,0.4)' }}
              className="px-6 py-3 bg-gradient-to-r from-slate-800/50 to-slate-800/30 backdrop-blur-sm rounded-full border border-purple-500/30 font-medium text-slate-300 hover:text-purple-300 hover:border-purple-400 transition-all duration-300"
              key={skill}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;

