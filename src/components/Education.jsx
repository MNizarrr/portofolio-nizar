import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const education = [
  {
    title: 'Computer Science Degree',
    institution: 'University of Technology',
    period: '2020 - 2024',
    description: 'Bachelor of Science in Computer Science with focus on Web Development and AI.',
    location: 'Tunis, Tunisia',
  },
  {
    title: 'Full-Stack Web Development Bootcamp',
    institution: 'Le Wagon',
    period: '2023',
    description: 'Intensive 9-week bootcamp covering React, Node.js, PostgreSQL, and deployment.',
    location: 'Remote',
  },
  {
    title: 'High School Diploma',
    institution: 'Lycée Technique',
    period: '2016 - 2020',
    description: 'Specialization in Mathematics and Computer Science.',
    location: 'Tunis, Tunisia',
  },
];

const Education = () => {
  return (
    <div className="container mx-auto px-4">
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-center mb-20 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
      >
        Education Journey
      </motion.h2>
      
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.2 }}
          className="space-y-8"
        >
          {education.map((edu, index) => (
            <motion.div
              key={edu.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="glass p-8 lg:p-12 rounded-3xl shadow-2xl hover:shadow-purple-500/25 border border-slate-700/50 group flex flex-col lg:flex-row gap-8 items-start lg:items-center"
            >
              <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold">
                {index + 1}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap className="w-6 h-6 text-purple-400" />
                  <h3 className="text-2xl font-bold text-slate-100 group-hover:text-purple-400">
                    {edu.title}
                  </h3>
                </div>
                <div className="flex items-center gap-6 text-sm text-slate-400 mb-4">
                  <div className="flex items-center gap-1">
                    <span className="font-semibold">{edu.institution}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{edu.location}</span>
                  </div>
                </div>
                <p className="text-slate-300 leading-relaxed">{edu.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Education;

