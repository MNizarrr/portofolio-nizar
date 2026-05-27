import { createElement, useState } from 'react';
import { Monitor, Smartphone } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const projectGroups = {
  web: [
    {
      title: 'Platform E-Commerce',
      description: 'Aplikasi e-commerce dengan katalog produk, keranjang, dan alur transaksi.',
      tech: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
      github: '#',
      image: '/project-picture/ukel.png',
    },
    {
      title: 'Website Waktu Shalat',
      description: 'Website untuk melihat jadwal waktu shalat berdasarkan kota di Indonesia.',
      tech: ['React.js', 'JavaScript', 'Tailwind', 'API'],
      github: 'https://github.com/MNizarrr/Prayer-Schedule-App',
      image: '/project-picture/fetch-api.png',
    },
    {
      title: 'Website Gizi',
      description: 'Website untuk menghitung kebutuhan gizi dan mengatur jadwal olahraga.',
      tech: ['Laravel', 'PHP', 'Chart.js', 'SQL'],
      github: 'https://github.com/MNizarrr/Nutrition-Project',
      image: '/project-picture/gizi-fit.png',
    },
    {
      title: 'Website Portfolio',
      description: 'Website portfolio personal dengan React, Tailwind, dan animasi halus.',
      tech: ['React', 'TailwindCSS', 'Framer Motion'],
      github: '#',
      image: '',
    },
  ],
  mobile: [
    {
      title: 'Mobile Project 1',
      description: 'Tempat untuk proyek mobile. Ganti data dan gambar saat screenshot sudah siap.',
      tech: ['Flutter', 'Dart'],
      github: '#',
      image: '',
    },
    {
      title: 'Mobile Project 2',
      description: 'Layout kartu ini disiapkan untuk screenshot portrait aplikasi mobile.',
      tech: ['Flutter', 'Firebase'],
      github: '#',
      image: '',
    },
  ],
};

const tabs = [
  { id: 'web', label: 'Web Projects', icon: Monitor },
  { id: 'mobile', label: 'Mobile Projects', icon: Smartphone },
];

const ProjectImage = ({ project, type }) => {
  const isMobile = type === 'mobile';

  return (
    <div
      className={`flex items-center justify-center overflow-hidden border border-white/10 bg-slate-950/70 ${
        isMobile
          ? 'mx-auto aspect-[9/16] w-full max-w-[210px] rounded-lg'
          : 'aspect-[16/10] w-full rounded-lg'
      }`}
    >
      {project.image ? (
        <img
          src={project.image}
          alt={`Screenshot ${project.title}`}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-slate-900 text-center text-xs font-medium uppercase tracking-[0.25em] text-slate-500">
          Screenshot
        </div>
      )}
    </div>
  );
};

const ProjectCard = ({ project, type }) => (
  <article
    className="group flex h-full flex-col rounded-lg border border-white/10 bg-slate-900/70 p-4 shadow-[0_18px_45px_-35px_rgba(148,163,184,0.7)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-purple-300/40 hover:bg-slate-900/90"
  >
    <ProjectImage project={project} type={type} />

    <div className="flex flex-1 flex-col pt-5">
      <h3 className="text-lg font-bold text-slate-100">{project.title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-400">{project.description}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tech.map((tag) => (
          <span
            key={tag}
            className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-slate-300"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-auto pt-6">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/10 bg-slate-950/60 px-4 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-purple-300/40 hover:text-purple-200"
        >
          <FaGithub className="h-4 w-4" />
          Kode
        </a>
      </div>
    </div>
  </article>
);

const Projects = () => {
  const [activeTab, setActiveTab] = useState('web');
  const activeProjects = projectGroups[activeTab];
  const isMobileTab = activeTab === 'mobile';

  return (
    <div className="container mx-auto px-4">
      <div className="mx-auto mb-10 max-w-3xl text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-fuchsia-300">
          Projects
        </p>
        <h2 className="bg-gradient-to-r from-purple-400 via-violet-300 to-sky-300 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
          Proyek Unggulan
        </h2>
      </div>

      <div className="mx-auto mb-10 flex w-fit rounded-lg border border-white/10 bg-slate-950/50 p-1">
        {tabs.map(({ id, label, icon }) => {
          const isActive = activeTab === id;

          return (
            <button
              key={id}
              type="button"
              onClick={() => setActiveTab(id)}
              className={`inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-semibold transition ${
                isActive
                  ? 'bg-white text-slate-950'
                  : 'text-slate-400 hover:bg-white/5 hover:text-slate-100'
              }`}
            >
              {createElement(icon, { className: 'h-4 w-4' })}
              {label}
            </button>
          );
        })}
      </div>

      <div
        key={activeTab}
        className={`mx-auto grid gap-6 ${
          isMobileTab
            ? 'max-w-5xl sm:grid-cols-2 lg:grid-cols-3'
            : 'max-w-6xl md:grid-cols-2'
        }`}
      >
        {activeProjects.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
            type={activeTab}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
