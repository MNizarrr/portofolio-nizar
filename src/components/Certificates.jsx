import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const certificates = [
  {
    id: '01',
    title: 'Belajar Dasar Pemrograman Web',
    issuer: 'Dicoding',
    year: '2024',
    image: '/certificates/certificate-01.jpg',
    credentialUrl: '/certificates/certificate-01.jpg',
    buttonLabel: 'Buka Sertifikat',
  },
  {
    id: '02',
    title: 'Belajar Dasar Pemrograman JavaScript',
    issuer: 'Dicoding',
    year: '2025',
    image: '/certificates/certificate-02.jpg',
    credentialUrl: '/certificates/certificate-02.jpg',
    buttonLabel: 'Buka Sertifikat',
  },
  {
    id: '03',
    title: 'Belajar Dasar AI',
    issuer: 'Dicoding',
    year: '2025',
    image: '/certificates/certificate-03.jpg',
    credentialUrl: '/certificates/certificate-03.jpg',
    buttonLabel: 'Buka Sertifikat',
  },
  {
    id: '04',
    title: 'Memulai Pemrograman Dengan C',
    issuer: 'Dicoding',
    year: '2025',
    image: '/certificates/certificate-04.jpg',
    credentialUrl: '/certificates/certificate-04.jpg',
    buttonLabel: 'Buka Sertifikat',
  },
  {
    id: '05',
    title: 'Belajar Dasar Cloud dan Gen AI di AWS',
    issuer: 'Dicoding',
    year: '2025',
    image: '/certificates/certificate-05.jpg',
    credentialUrl: '/certificates/certificate-05.jpg',
    buttonLabel: 'Buka Sertifikat',
  },
  {
    id: '06',
    title: 'Keselamatan dan Kesehatan Kerja',
    issuer: 'International Labour Organization',
    year: '2024',
    image: '/certificates/certificate-06.jpg',
    credentialUrl: '/certificates/certificate-06.jpg',
    buttonLabel: 'Buka Sertifikat',
  },
  {
    id: '07',
    title: 'Rahasia Prompt Engineering',
    issuer: 'ElevAIte with Dicoding',
    year: '2026',
    image: '/certificates/certificate-07.jpg',
    credentialUrl: '/certificates/certificate-07.jpg',
    buttonLabel: 'Buka Sertifikat',
  },
  {
    id: '08',
    title: 'Konsep Pemrograman Micro Skill',
    issuer: 'Komdigi',
    year: '2025',
    image: '/certificates/certificate-08.jpg',
    credentialUrl: '/certificates/certificate-08.jpg',
    buttonLabel: 'Buka Sertifikat',
  },
  {
    id: '09',
    title: 'Designing Using Canva',
    issuer: 'My Skill',
    year: '2025',
    image: '/certificates/certificate-09.jpg',
    credentialUrl: '/certificates/certificate-09.jpg',
    buttonLabel: 'Buka Sertifikat',
  },
  {
    id: '10',
    title: 'UX Writing Introduction',
    issuer: 'My Skill',
    year: '2025',
    image: '/certificates/certificate-10.jpg',
    credentialUrl: '/certificates/certificate-10.jpg',
    buttonLabel: 'Buka Sertifikat',
  },
  {
    id: '11',
    title: 'WordPress Introduction',
    issuer: 'My Skill',
    year: '2025',
    image: '/certificates/certificate-11.jpg',
    credentialUrl: '/certificates/certificate-11.jpg',
    buttonLabel: 'Buka Sertifikat',
  },
  {
    id: '12',
    title: 'Data Analysis Fundamental',
    issuer: 'My Skill',
    year: '2025',
    image: '/certificates/certificate-12.jpg',
    credentialUrl: '/certificates/certificate-12.jpg',
    buttonLabel: 'Buka Sertifikat',
  },
];

const CertificatePreview = ({ certificate }) => {
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.95)]">
      <img
        src={certificate.image}
        alt={certificate.title}
        className="h-full w-full object-cover"
        loading="lazy"
      />
    </div>
  );
};

const Certificates = () => {
  return (
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto mb-16 max-w-3xl text-center"
      >
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-purple-300">
          Sertifikasi
        </p>
        <h2 className="mb-5 bg-gradient-to-r from-purple-300 via-violet-300 to-indigo-300 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
          Sertifikat Saya
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.08 }}
        className="grid gap-7 md:grid-cols-2 xl:grid-cols-3"
      >
        {certificates.map((certificate, index) => (
          <motion.article
            key={certificate.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.35, delay: index * 0.02 }}
            className="overflow-hidden rounded-[2rem] border border-purple-500/30 bg-slate-900/50 p-4 shadow-2xl hover:shadow-purple-500/25 backdrop-blur-xl transition-all duration-300 group"
          >
            <CertificatePreview certificate={certificate} />

            <div className="space-y-4 px-2 pb-2 pt-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-purple-300">
                    {certificate.issuer}
                  </p>
                  <h3 className="text-2xl font-semibold text-white group-hover:text-purple-200 transition-colors">{certificate.title}</h3>
                </div>
                <span className="rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-xs font-medium text-slate-300">
                  {certificate.year}
                </span>
              </div>

              <a
                href={certificate.credentialUrl || certificate.image}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-400/10 px-4 py-2 text-sm font-semibold text-purple-100 transition hover:border-purple-300/50 hover:bg-purple-400/20"
              >
                <ExternalLink className="h-4 w-4" />
                {certificate.buttonLabel || 'Buka Sertifikat'}
              </a>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </div>
  );
};

export default Certificates;
