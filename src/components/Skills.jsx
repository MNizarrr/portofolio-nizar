import { motion } from 'framer-motion';
import { BadgeCheck } from 'lucide-react';

const skills = [
  { name: 'React', level: 'Expert', icon: '⚛️' },
  { name: 'JavaScript', level: 'Expert', icon: '⚡' },
  { name: 'Tailwind CSS', level: 'Expert', icon: '🎨' },
  { name: 'Node.js', level: 'Advanced', icon: '🔥' },
  { name: 'MongoDB', level: 'Advanced', icon: '🐘' },
  { name: 'Next.js', level: 'Intermediate', icon: '🚀' },
  { name: 'TypeScript', level: 'Intermediate', icon: '🔤' },
  { name: 'Python', level: 'Basic', icon: '🐍' },
];

const softSkills = ['Problem Solving', 'Team Collaboration', 'Time Management', 'Communication'];

const Skills = () => {
  return (
    <div className="container mx-auto px-4">
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-center mb-20 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
      >
        Skills & Expertise
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
            className="glass p-8 rounded-2xl text-center shadow-2xl hover:shadow-blue-500/25 border border-slate-700/50 group"
          >
            <div className="text-4xl mb-4">{skill.icon}</div>
            <h3 className="text-2xl font-bold mb-2 text-slate-100 group-hover:text-blue-400">{skill.name}</h3>
            <p className="text-slate-400 text-sm capitalize">{skill.level}</p>
            <BadgeCheck className="w-8 h-8 text-green-400 mx-auto mt-4" />
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
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 bg-slate-800/50 backdrop-blur-sm rounded-full border border-slate-600 font-medium text-slate-300 hover:bg-slate-700/50 hover:border-blue-500/50 transition-all"
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

