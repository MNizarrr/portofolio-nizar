import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-gradient-to-r from-slate-900 to-slate-800/50 border-t border-slate-700/50 pt-16 pb-12"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-xl font-bold text-white">N</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-slate-100 to-slate-200 bg-clip-text text-transparent">
                  Nizar
                </h3>
                <p className="text-slate-500">Full-Stack Developer</p>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed max-w-md">
              Building the future, one line of code at a time.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold text-slate-100 mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', to: 'hero' },
                { label: 'Skills', to: 'skills' },
                { label: 'Projects', to: 'projects' },
                { label: 'Contact', to: 'contact' },
              ].map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="text-slate-400 hover:text-slate-200 hover:underline transition-colors flex items-center gap-2 group"
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
              <h4 className="text-xl font-bold text-slate-100 mb-4">Follow Me</h4>
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
                    className="w-12 h-12 bg-slate-800/50 hover:bg-slate-700 rounded-xl flex items-center justify-center text-slate-400 hover:text-white hover:shadow-lg transition-all border border-slate-700/50 group"
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
        <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          <p>
            © 2024 Nizar Portfolio. Built with ❤️ using React, TailwindCSS & Framer Motion.
          </p>
          <p className="mt-2">
            Designed & Developed by <span className="text-slate-400 font-medium">Nizar</span>
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;

