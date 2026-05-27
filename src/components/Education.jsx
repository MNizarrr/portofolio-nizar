import { motion } from 'framer-motion';
import { Calendar, GraduationCap, MapPin } from 'lucide-react';

const education = [
  {
    title: 'SDN Cisarua 05',
    institution: 'SD Negeri',
    period: '2015 - 2021',
    location: 'Kabupaten Bogor',
  },
  {
    title: 'SMPN 01 Cisarua',
    institution: 'SMP Negeri',
    period: '2021 - 2024',
    location: 'Kabupaten Bogor',
  },
  {
    title: 'SMKS Wikrama Bogor',
    institution: 'SMK Swasta',
    period: '2024 - Now',
    location: 'Kota Bogor',
  },
];

const Education = () => {
  return (
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto mb-10 max-w-3xl text-center"
      >
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-fuchsia-300">
          Education
        </p>
        <h2 className="bg-gradient-to-r from-fuchsia-300 via-purple-200 to-sky-300 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
          Riwayat Sekolah
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.1 }}
        className="mx-auto grid max-w-5xl gap-5 md:grid-cols-3"
      >
        {education.map((edu) => (
          <motion.article
            key={edu.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className="rounded-2xl border border-white/10 bg-slate-900/55 p-5 shadow-[0_24px_60px_-42px_rgba(168,85,247,0.85)] backdrop-blur-sm transition-all duration-300 hover:border-fuchsia-400/40 hover:bg-slate-900/75"
          >
            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-fuchsia-400/20 bg-fuchsia-400/10 text-fuchsia-200">
              <GraduationCap className="h-5 w-5" />
            </div>

            <div className="space-y-2">
              <p className="text-sm font-semibold text-fuchsia-200">{edu.institution}</p>
              <h3 className="text-xl font-bold leading-tight text-white">{edu.title}</h3>
            </div>

            <div className="mt-5 space-y-3 text-sm text-slate-300">
              <div className="flex items-center gap-3">
                <Calendar className="h-4 w-4 flex-none text-fuchsia-300" />
                <span>{edu.period}</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 flex-none text-sky-300" />
                <span>{edu.location}</span>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </div>
  );
};

export default Education;
