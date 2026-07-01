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
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.lenis?.stop();
    } else {
      document.body.style.overflow = '';
      window.lenis?.start();
    }
    return () => {
      document.body.style.overflow = '';
      window.lenis?.start();
    };
  }, [isOpen]);

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
          isOpen ? 'blur-sm opacity-20 pointer-events-none' : ''
        } ${
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
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-xs z-40 md:hidden"
            />

            {/* Drawer side panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 26, stiffness: 220 }}
              className="fixed top-0 right-0 h-screen w-[280px] bg-[#0B0F19]/95 backdrop-blur-xl border-l border-white/5 z-50 flex flex-col justify-between py-6 px-6 md:hidden shadow-2xl"
            >
              <div>
                {/* Header inside drawer */}
                <div className="flex items-center justify-between pb-6 border-b border-white/5">
                  <div className="text-base font-bold tracking-widest text-[#F8FAFC] flex items-center gap-2">
                    <span className="w-2.5 h-2.5 bg-blue-500 rounded-full animate-pulse shadow-[0_0_8px_#3b82f6]" />
                    SECTIONS<span className="text-blue-500">.</span>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-slate-400 hover:text-white p-1"
                    aria-label="Close menu"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Vertical links list */}
                <nav className="flex flex-col space-y-5 mt-8">
                  {navItems.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={(e) => handleNavClick(e, item.id)}
                      className={`text-xs font-bold uppercase tracking-widest py-2 border-b border-transparent hover:border-blue-500/30 transition-all ${
                        activeSection === item.id 
                          ? 'text-blue-400 pl-2 border-l-2 border-blue-500' 
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Bottom drawer footer button */}
              <div className="pt-6 border-t border-white/5">
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, 'contact')}
                  className="w-full block text-center py-3 text-xs font-bold uppercase tracking-widest text-[#F8FAFC] border border-blue-500/30 bg-blue-500/10 rounded-full hover:bg-blue-500/25 transition-all duration-300"
                >
                  Ping Me
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
