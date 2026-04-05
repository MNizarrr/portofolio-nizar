import { Navbar as FlowbiteNavbar, NavbarBrand, DarkThemeToggle, NavbarCollapse, NavbarLink, NavbarToggle } from 'flowbite-react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Navbar = () => {
  const menuItems = [
    { id: 'hero', label: 'Home' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full z-50 glass shadow-2xl backdrop-blur-md"
    >
      <FlowbiteNavbar fluid rounded className="border-b border-slate-700/50 bg-slate-900/80">
        <NavbarBrand href="#hero">
          <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
            Nizar Portfolio
          </span>
        </NavbarBrand>
        <div className="flex md:order-2 gap-2">
          <DarkThemeToggle />
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
              className="cursor-pointer hover:text-blue-400 transition-colors"
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

