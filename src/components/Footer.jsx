import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="border-t border-purple-500/10 pt-16 pb-12"
      style={{
        background: 'linear-gradient(135deg, rgba(15,23,42,0.5) 0%, rgba(88,28,135,0.1) 100%)'
      }}
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 via-violet-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/50">
                <span className="text-xl font-bold text-white">N</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-300 to-violet-300 bg-clip-text text-transparent">
                  Nizar
                </h3>
                <p className="text-slate-400">Developer Fullstack</p>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed max-w-md">
              Membangun masa depan, satu baris kode dalam satu waktu.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold text-slate-100 mb-6">Tautan Cepat</h4>
            <ul className="space-y-3">
              {[
                { label: 'Beranda', to: 'hero' },
                { label: 'Keahlian', to: 'skills' },
                { label: 'Proyek', to: 'projects' },
                { label: 'Kontak', to: 'contact' },
              ].map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="text-slate-400 hover:text-purple-300 hover:underline transition-colors flex items-center gap-2 group cursor-pointer"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Social & Newsletter */}
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-bold text-slate-100 mb-4">Ikuti Saya</h4>
              <div className="flex gap-4">
                {[
                  { icon: FaGithub, href: 'https://github.com/nizar', label: 'Github' },
                  { icon: FaLinkedin, href: 'https://linkedin.com/in/nizar', label: 'LinkedIn' },
                  { icon: FaTwitter, href: 'https://twitter.com/nizar', label: 'Twitter' },
                  { icon: FaEnvelope, href: 'mailto:nizar@example.com', label: 'Email' },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-slate-800/50 hover:bg-purple-600/30 rounded-xl flex items-center justify-center text-slate-400 hover:text-purple-300 hover:shadow-lg hover:shadow-purple-500/30 transition-all border border-purple-500/30 group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-purple-500/10 pt-8 text-center text-sm text-slate-500">
          <p>
            © 2024 Nizar Portfolio. Dibangun dengan ❤️ menggunakan React, TailwindCSS & Framer Motion.
          </p>
          <p className="mt-2">
            Dirancang & Dikembangkan oleh <span className="text-slate-300 font-medium">Nizar</span>
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;

