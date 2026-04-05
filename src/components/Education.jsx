import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Sparkles } from 'lucide-react';

const education = [
  {
    title: 'SDN Cisarua 05',
    institution: 'SD Negeri',
    period: '2015 - 2021',
    description: 'Membangun fondasi belajar, kedisiplinan, dan kemampuan dasar di bidang akademik umum.',
    location: 'Indonesia',
    accent: 'from-emerald-500/25 via-teal-500/10 to-transparent',
  },
  {
    title: 'SPMPN 1 Cisarua',
    institution: 'SMP Negeri',
    period: '2021 - 2024',
    description: 'Memperluas wawasan akademik serta mulai terbiasa dengan pembelajaran yang lebih terstruktur dan mandiri.',
    location: 'Indonesia',
    accent: 'from-sky-500/25 via-cyan-500/10 to-transparent',
  },
  {
    title: 'SMKS Wikrama Bogor',
    institution: 'SMK Swasta',
    period: '2024 - Now',
    description: 'Berfokus pada keterampilan yang lebih aplikatif, kesiapan kerja, dan penguatan minat pada bidang teknologi.',
    location: 'Indonesia',
    accent: 'from-amber-500/25 via-orange-500/10 to-transparent',
  },
];

const Education = () => {
  return (
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto mb-16 max-w-3xl text-center"
      >
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-fuchsia-300">
          Education
        </p>
        <h2 className="mb-5 bg-gradient-to-r from-fuchsia-300 via-purple-200 to-sky-300 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
          Education Journey
        </h2>
        <p className="text-base leading-7 text-slate-300 md:text-lg">
          Perjalanan pendidikan saya dimulai dari sekolah dasar, berlanjut ke SMP, lalu ke SMK
          dengan fokus yang makin terarah dan lebih siap ke dunia kerja.
        </p>
      </motion.div>

      <div className="relative mx-auto max-w-6xl">
        <div className="pointer-events-none absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-fuchsia-400/10 via-fuchsia-300/60 to-sky-400/10 lg:block" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.14 }}
          className="space-y-8 lg:space-y-10"
        >
          {education.map((edu, index) => (
            <motion.article
              key={edu.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.35 }}
              className="relative grid gap-5 lg:grid-cols-[90px_minmax(0,1fr)] lg:gap-8"
            >
              <div className="relative hidden lg:flex">
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-slate-900 shadow-[0_20px_50px_-30px_rgba(217,70,239,0.95)]">
                  <span className="text-sm font-semibold text-white">{index + 1}</span>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/70 shadow-[0_35px_80px_-45px_rgba(15,23,42,0.95)] backdrop-blur-xl">
                <div className={`absolute inset-0 bg-gradient-to-br ${edu.accent}`} />
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

                <div className="relative grid gap-6 p-6 sm:p-8 lg:grid-cols-[220px_minmax(0,1fr)] lg:p-10">
                  <div className="space-y-5">
                    <div className="inline-flex items-center gap-2 rounded-full border border-fuchsia-400/20 bg-fuchsia-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-fuchsia-200">
                      <Sparkles className="h-4 w-4" />
                      Learning Phase
                    </div>

                    <div className="space-y-3 rounded-[1.75rem] border border-white/10 bg-slate-950/50 p-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
                        Timeline
                      </p>
                      <div className="flex items-center gap-3 text-slate-100">
                        <Calendar className="h-4 w-4 text-fuchsia-300" />
                        <span className="text-lg font-semibold">{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-3 text-slate-300">
                        <MapPin className="h-4 w-4 text-sky-300" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-5">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div className="space-y-3">
                        <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                          <GraduationCap className="h-5 w-5 text-fuchsia-300" />
                          <span className="text-sm font-medium text-slate-200">{edu.institution}</span>
                        </div>
                        <h3 className="max-w-2xl text-2xl font-bold leading-tight text-white md:text-3xl">
                          {edu.title}
                        </h3>
                      </div>

                      <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-right">
                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                          Stage
                        </p>
                        <p className="mt-1 text-lg font-semibold text-slate-100">0{index + 1}</p>
                      </div>
                    </div>

                    <p className="max-w-2xl text-base leading-8 text-slate-300">
                      {edu.description}
                    </p>

                    <div className="grid gap-3 sm:grid-cols-2">
                      <div className="rounded-2xl border border-white/10 bg-slate-950/45 p-4">
                        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                          Institution
                        </p>
                        <p className="text-sm font-medium text-slate-200">{edu.institution}</p>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-slate-950/45 p-4">
                        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                          Focus
                        </p>
                        <p className="text-sm font-medium text-slate-200">
                          Perkembangan karakter, akademik, dan kesiapan menuju tahap pendidikan berikutnya.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Education;
