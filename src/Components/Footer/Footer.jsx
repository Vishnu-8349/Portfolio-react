import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="w-full bg-[#0B0F19] border-t border-white/5 py-12 px-6 md:px-8 relative z-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Animated Brand Logo */}
        <div className="flex items-center gap-2 select-none">
          <img src="/logo.jpg" alt="VP Logo" className="w-5 h-5 rounded-full border border-blue-500/20 object-cover animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-widest text-[#F8FAFC]">
            Vishnu Pandey<span className="text-blue-500">.</span>
          </span>
        </div>

        {/* Made with metrics */}
        <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-1">
          © {new Date().getFullYear()} Vishnu Pandey. Crafted with 
          <Heart size={10} className="text-red-500 fill-red-500/20 animate-pulse inline-block" />
        </p>

        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          className="p-2 rounded-full bg-white/[0.01] border border-white/10 hover:border-blue-500/35 hover:bg-blue-500/10 text-slate-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-1.5 group text-[8px] font-bold uppercase tracking-widest pr-4 shadow-[0_2px_8px_rgba(0,0,0,0.15)]"
          aria-label="Scroll to top"
        >
          <div className="p-1 bg-white/5 group-hover:bg-blue-500/20 rounded-full transition-colors">
            <ArrowUp size={10} className="group-hover:-translate-y-0.5 transition-transform" />
          </div>
          Back to Top
        </button>

      </div>
    </footer>
  );
};

export default Footer;
