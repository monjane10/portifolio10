import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, User, Briefcase, Code, 
  Cpu, Mail, Menu, X, Github, 
  Linkedin, ChevronLeft, ChevronRight ,GraduationCap,
  Instagram,
  MessageCircle
} from 'lucide-react';

const Sidebar = ({ isOpen, setIsOpen }) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { icon: Home, label: 'Home', href: '#home' },
    { icon: User, label: 'Sobre', href: '#about' },
    { icon: Briefcase, label: 'Experiência', href: '#experience' },
    { icon: Code, label: 'Projectos', href: '#projects' },
    { icon: GraduationCap, label: 'Educação', href: '#education' },
    { icon: Cpu, label: 'Habilidades', href: '#skills' },
    // { icon: User, label: 'Reviews', href: '#reviews' },
    { icon: Mail, label: 'Contacto', href: '#contact' },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/monjane10', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/louren%C3%A7o-monjane-159b27295?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://instagram.com/lulumonjane', label: 'Instagram' },
    { icon: MessageCircle, href: 'https://instagram.com/lulumonjane', label: 'WhatsApp' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Mobile Menu Button */}
      <motion.button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed top-4 right-4 z-50 p-2 bg-gradient-to-r from-blue-600/80 to-purple-600/80 rounded-full md:hidden backdrop-blur-sm shadow-lg hover:from-blue-700/80 hover:to-purple-700/80 transition-all duration-300"
      >
        {isMobileOpen ? (
          <X className="text-white w-6 h-6" />
        ) : (
          <Menu className="text-white w-6 h-6" />
        )}
      </motion.button>

      {/* Desktop Sidebar */}
      <motion.aside
        initial={false}
        animate={{ 
          width: isOpen ? '16rem' : '5rem',
        }}
        className="fixed left-0 top-0 h-full bg-gray-900/80 backdrop-blur-md text-white z-40 hidden md:block border-r border-gray-700/50 shadow-lg"
      >
        <div className="flex flex-col h-full relative">
          {/* Toggle Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="absolute -right-5 top-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full p-1.5 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg"
          >
            {isOpen ? (
              <ChevronLeft className="w-4 h-4 text-white" />
            ) : (
              <ChevronRight className="w-4 h-4 text-white" />
            )}
          </motion.button>

          {/* Logo */}
          <div className="p-4 text-center border-b border-gray-800/50 backdrop-blur-sm">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-12 h-12 mx-auto bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center cursor-pointer shadow-lg"
            >
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">OI</span>
            </motion.div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-2 py-4 overflow-y-auto">
            <ul className="space-y-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <li key={item.href}>
                    <motion.a
                      href={item.href}
                      whileHover={{ scale: 1.02 }}
                      className={`flex items-center px-4 py-3 rounded-lg transition-all duration-200 group backdrop-blur-sm ${
                        isActive 
                          ? 'bg-gradient-to-r from-blue-600/40 to-purple-600/40 text-white' 
                          : 'text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-blue-600/20 hover:to-purple-600/20'
                      }`}
                    >
                      <item.icon className={`w-5 h-5 min-w-[1.25rem] transition-colors ${
                        isActive ? 'text-blue-400' : 'group-hover:text-blue-400'
                      }`} />
                      <motion.span
                        initial={false}
                        animate={{ 
                          opacity: isOpen ? 1 : 0,
                          width: isOpen ? 'auto' : 0
                        }}
                        className="ml-4 whitespace-nowrap overflow-hidden"
                      >
                        {item.label}
                      </motion.span>
                    </motion.a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Social Links */}
          <div className="p-4 border-t border-gray-800/50 backdrop-blur-sm">
            <div className="flex justify-center space-x-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="p-2 text-gray-300 hover:text-white transition-colors duration-200 hover:bg-gradient-to-r hover:from-blue-600/20 hover:to-purple-600/20 rounded-full backdrop-blur-sm"
                >
                  <link.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </motion.aside>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.aside
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed left-0 top-0 h-full w-64 bg-gray-900/90 backdrop-blur-md text-white z-40 md:hidden border-r border-gray-700/50"
            >
              <div className="flex flex-col h-full">
                {/* Logo */}
                <div className="p-4 text-center border-b border-gray-800/50">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 mx-auto bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center cursor-pointer shadow-lg"
                  >
                    <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">OI</span>
                  </motion.div>
                </div>

                {/* Navigation */}
                <nav className="flex-1 px-2 py-4 overflow-y-auto">
                  <ul className="space-y-2">
                    {navItems.map((item) => {
                      const isActive = activeSection === item.href.substring(1);
                      return (
                        <motion.li key={item.href} whileHover={{ scale: 1.02 }}>
                          <a
                            href={item.href}
                            onClick={() => setIsMobileOpen(false)}
                            className={`flex items-center px-4 py-3 rounded-lg transition-all duration-200 group backdrop-blur-sm ${
                              isActive 
                                ? 'bg-gradient-to-r from-blue-600/40 to-purple-600/40 text-white' 
                                : 'text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-blue-600/20 hover:to-purple-600/20'
                            }`}
                          >
                            <item.icon className={`w-5 h-5 min-w-[1.25rem] transition-colors ${
                              isActive ? 'text-blue-400' : 'group-hover:text-blue-400'
                            }`} />
                            <span className="ml-4 whitespace-nowrap">{item.label}</span>
                          </a>
                        </motion.li>
                      );
                    })}
                  </ul>
                </nav>

                {/* Social Links */}
                <div className="p-4 border-t border-gray-800/50">
                  <div className="flex justify-center space-x-4">
                    {socialLinks.map((link) => (
                      <motion.a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        className="p-2 text-gray-300 hover:text-white transition-colors duration-200 hover:bg-gradient-to-r hover:from-blue-600/20 hover:to-purple-600/20 rounded-full backdrop-blur-sm"
                      >
                        <link.icon className="w-5 h-5" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.aside>

            {/* Mobile Overlay */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 md:hidden"
              onClick={() => setIsMobileOpen(false)}
            />
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;