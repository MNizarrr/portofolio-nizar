import { motion } from 'framer-motion';

const technicalSkills = [
  { name: 'HTML', icon: '/icon/html.png' },
  { name: 'CSS', icon: '/icon/css.png' },
  { name: 'JavaScript', icon: '/icon/javascript.png' },
  { name: 'Python', icon: '/icon/python.png' },
  { name: 'PHP', icon: '/icon/php.png' },
  { name: 'Laravel', icon: '/icon/laravel.png' },
  { name: 'React', icon: '/icon/react.png' },
  { name: 'Express', icon: '/icon/express.png' },
  { name: 'Oracle', icon: '/icon/oracle.png' },
  { name: 'MongoDB', icon: '/icon/mongodb.png' },
  { name: 'PostgreSQL', icon: '/icon/postgresql.png' },
  { name: 'Flutter', icon: '/icon/flutter.png' },
];


const softSkills = [
  { name: 'Problem Solving' },
  { name: 'Kolaborasi Tim' },
  { name: 'Komunikasi' },
  { name: 'Manajemen Waktu' },
  { name: 'Adaptabilitas' },
  { name: 'Critical Thinking' },
  { name: 'Kreativitas' },
  { name: 'Tanggung Jawab' },
  { name: 'Detail Oriented' },
  { name: 'Public Speaking' },
  { name: 'Kepemimpinan' },
  { name: 'Empati' },
];

const SkillCard = ({ skill, showIcon = true }) => (
  <li
    className={`group flex min-h-[72px] flex-none items-center rounded-2xl border border-white/10 bg-slate-900/65 px-4 py-3 shadow-[0_18px_45px_-35px_rgba(168,85,247,0.9)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/50 hover:bg-slate-900/90 ${
      showIcon ? 'w-[170px] gap-3' : 'w-[190px] justify-center text-center'
    }`}
  >
    {showIcon && (
      <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white/5">
        <img
          src={skill.icon}
          alt={`${skill.name} icon`}
          className="h-7 w-7 object-contain"
          loading="lazy"
        />
      </span>
    )}
    <span className="text-sm font-semibold text-slate-200 transition-colors duration-300 group-hover:text-purple-200 sm:text-base">
      {skill.name}
    </span>
  </li>
);

const SkillList = ({ title, items, reverse = false, showIcon = true }) => (
  <motion.section
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="space-y-5"
  >
    <div className="mx-auto max-w-6xl px-4">
      <h3 className="text-xl font-bold text-slate-100 md:text-2xl">{title}</h3>
    </div>

    <div className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden">
      <ul
        className={`flex w-max flex-nowrap gap-4 px-4 ${
          reverse ? 'animate-skill-marquee-reverse' : 'animate-skill-marquee'
        }`}
      >
        {[...items, ...items].map((skill, index) => (
          <SkillCard key={`${skill.name}-${index}`} skill={skill} showIcon={showIcon} />
        ))}
      </ul>
    </div>
  </motion.section>
);

const Skills = () => {
  return (
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto mb-14 max-w-3xl text-center"
      >
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-fuchsia-300">
          Skills
        </p>
        <h2 className="bg-gradient-to-r from-purple-400 via-violet-300 to-sky-300 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
          Keahlian
        </h2>
      </motion.div>

      <div className="space-y-12">
        <SkillList title="Technical Skills" items={technicalSkills} />
        <SkillList title="Soft Skills" items={softSkills} reverse showIcon={false} />
      </div>
    </div>
  );
};

export default Skills;
