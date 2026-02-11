import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaInstagram, FaSpotify, FaYoutube } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const leftLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
  ];

  const rightLinks = [
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  const NavLink = ({ name, href }: { name: string; href: string }) => (
    <a
      href={href}
      className="text-text-muted hover:text-white transition-colors text-xs md:text-sm uppercase tracking-[0.2em] font-medium px-4"
    >
      {name}
    </a>
  );

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-primary/95 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-6">
        <div className="flex justify-between md:justify-center items-center relative">
          
          {/* Mobile Toggle (Left aligned on mobile) */}
          <button
            className="md:hidden text-white focus:outline-none absolute left-0"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>

          {/* Desktop Left Links */}
          <div className="hidden md:flex items-center">
            {leftLinks.map((link, index) => (
              <React.Fragment key={link.name}>
                <NavLink {...link} />
                {index !== leftLinks.length - 1 && <span className="text-text-muted/30 mx-2">•</span>}
              </React.Fragment>
            ))}
             <span className="hidden md:block text-text-muted/30 mx-2">•</span>
          </div>

          {/* Center Logo */}
          <a href="#" className="flex flex-col items-center mx-8 group">
            <span className="text-2xl md:text-3xl font-display font-bold text-white tracking-widest border-2 border-white px-4 py-1 group-hover:bg-white group-hover:text-black transition-all duration-500">
              FIRDO
            </span>
            {/* Optional subtitle or accent if needed, keeping it minimal as per ref */}
          </a>

          {/* Desktop Right Links */}
          <div className="hidden md:flex items-center">
            <span className="hidden md:block text-text-muted/30 mx-2">•</span>
            {rightLinks.map((link, index) => (
              <React.Fragment key={link.name}>
                <NavLink {...link} />
                {index !== rightLinks.length - 1 && <span className="text-text-muted/30 mx-2">•</span>}
              </React.Fragment>
            ))}
          </div>

          {/* Mobile Socials (Right aligned on mobile) */}
          <div className="md:hidden flex space-x-4 text-text-muted">
             <a href="#" className="hover:text-white"><FaInstagram size={20} /></a>
          </div>

        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden fixed inset-0 bg-primary z-40 pt-24 px-6"
          >
            <div className="flex flex-col items-center space-y-8">
              {[...leftLinks, ...rightLinks].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-white text-xl uppercase tracking-[0.2em] hover:text-accent-blue transition-colors"
                >
                  {link.name}
                </a>
              ))}
              
              <div className="flex space-x-8 mt-12 pt-12 border-t border-white/10 w-full justify-center">
                 <a href="#" className="text-text-muted hover:text-white"><FaInstagram size={24} /></a>
                 <a href="#" className="text-text-muted hover:text-green-500"><FaSpotify size={24} /></a>
                 <a href="#" className="text-text-muted hover:text-red-600"><FaYoutube size={24} /></a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
