import { Navbar as FlowbiteNavbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from 'flowbite-react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Navbar = () => {
  const menuItems = [
    { id: 'hero', label: 'Beranda' },
    { id: 'skills', label: 'Keahlian' },
    { id: 'education', label: 'Pendidikan' },
    { id: 'certificates', label: 'Sertifikat' },
    { id: 'projects', label: 'Proyek' },
    { id: 'contact', label: 'Kontak' },
  ];

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full z-50 shadow-2xl backdrop-blur-md"
      style={{
        background: 'linear-gradient(135deg, rgba(15,23,42,0.8) 0%, rgba(88,28,135,0.15) 100%)',
        borderBottom: '1px solid rgba(167,139,250,0.2)'
      }}
    >
      <FlowbiteNavbar fluid rounded={false} className="bg-transparent">
        <NavbarBrand href="#hero">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 via-violet-500 to-indigo-600 rounded-lg flex items-center justify-center shadow-lg shadow-purple-500/50">
              <span className="text-xl font-bold text-white">N</span>
            </div>
            <span className="self-center whitespace-nowrap text-xl font-bold bg-gradient-to-r from-purple-300 via-violet-300 to-indigo-300 bg-clip-text text-transparent">
              Portofolio Nizar
            </span>
          </div>
        </NavbarBrand>
        <div className="flex md:order-2">
          <NavbarToggle />
        </div>
        <NavbarCollapse>
          {menuItems.map((item) => (
            <NavbarLink
              key={item.id}
              as={Link}
              to={item.id}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer text-slate-300 hover:text-purple-400 hover:px-3 transition-all duration-300"
            >
              {item.label}
            </NavbarLink>
          ))}
        </NavbarCollapse>
      </FlowbiteNavbar>
    </motion.div>
  );
};

export default Navbar;

