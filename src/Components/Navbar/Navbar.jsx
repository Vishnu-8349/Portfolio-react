import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -50% 0px',
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(id);
      setIsOpen(false);
    }
  };

  return (
    <motion.header
      className={`fixed left-0 w-full z-50 transition-all duration-500 flex justify-center px-4 md:px-8 ${
        scrolled ? 'top-3' : 'top-0'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 1.2 }}
    >
      <div
        className={`w-full max-w-6xl flex items-center justify-between transition-all duration-500 rounded-full px-6 md:px-8 ${
          scrolled
            ? 'glass py-3 shadow-xl shadow-black/35 border-white/10'
            : 'bg-transparent py-6 border-transparent'
        }`}
      >
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, 'home')}
          className="text-base font-bold tracking-widest text-[#F8FAFC] relative z-50 flex items-center gap-2"
        >
          <span className="w-2.5 h-2.5 bg-blue-500 rounded-full animate-pulse shadow-[0_0_8px_#3b82f6]" />
          VISHNU<span className="text-blue-500">.</span>
        </a>

        {/* Desktop Links Capsule */}
        <nav className="hidden md:flex items-center space-x-1.5 bg-[#121826]/30 border border-white/[0.04] p-1 rounded-full">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className={`relative px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wider rounded-full transition-colors duration-300 ${
                activeSection === item.id ? 'text-[#F8FAFC]' : 'text-slate-400 hover:text-[#F8FAFC]'
              }`}
            >
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeUnderline"
                  className="absolute inset-0 bg-blue-500/10 border border-blue-500/25 rounded-full -z-10"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              {item.label}
            </a>
          ))}
        </nav>

        {/* Action button */}
        <div className="hidden md:block">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, 'contact')}
            className="px-5 py-2.5 text-[11px] font-bold uppercase tracking-wider text-[#F8FAFC] border border-white/10 hover:border-blue-500/50 rounded-full overflow-hidden transition-all duration-300 bg-white/[0.02] shadow-[0_0_12px_rgba(0,0,0,0.2)] hover:shadow-[0_0_15px_rgba(59,130,246,0.15)]"
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-300 hover:text-white transition-colors p-2 z-50"
          aria-label="Toggle Navigation Drawer"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-20 left-4 right-4 py-8 px-6 glass rounded-2xl flex flex-col items-center space-y-4 md:hidden border border-white/10 shadow-2xl"
          >
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`text-xs font-bold uppercase tracking-widest py-2 transition-colors ${
                  activeSection === item.id ? 'text-blue-500' : 'text-slate-400 hover:text-white'
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="w-full text-center py-3 text-xs font-bold uppercase tracking-widest text-[#F8FAFC] border border-blue-500/30 bg-blue-500/10 rounded-full mt-4"
            >
              Ping Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
