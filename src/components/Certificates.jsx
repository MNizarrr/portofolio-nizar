import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const certificates = Array.from({ length: 12 }, (_, index) => {
  const id = String(index + 1).padStart(2, '0');

  return {
    id,
    title: `Sertifikat ${index + 1}`,
    issuer: 'Nama Penerbit / Platform',
    year: '2026',
    image: `/certificates/certificate-${id}.jpg`,
  };
});

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
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-amber-300">
          Certifications
        </p>
        <h2 className="mb-5 bg-gradient-to-r from-amber-200 via-sky-200 to-cyan-300 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
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
            className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-4 shadow-2xl backdrop-blur-xl"
          >
            <CertificatePreview certificate={certificate} />

            <div className="space-y-4 px-2 pb-2 pt-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-sky-300">
                    {certificate.issuer}
                  </p>
                  <h3 className="text-2xl font-semibold text-white">{certificate.title}</h3>
                </div>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300">
                  {certificate.year}
                </span>
              </div>

              <a
                href={certificate.image}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-2 text-sm font-semibold text-sky-100 transition hover:border-sky-300/50 hover:bg-sky-400/20"
              >
                <ExternalLink className="h-4 w-4" />
                Buka JPG
              </a>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </div>
  );
};

export default Certificates;
