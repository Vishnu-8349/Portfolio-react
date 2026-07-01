import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { ArrowDownRight, FileText } from 'lucide-react';

const Hero = () => {
  const containerRef = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const textX = useTransform(mouseX, [-300, 300], [-8, 8]);
  const textY = useTransform(mouseY, [-300, 300], [-8, 8]);
  const bgGlowX = useTransform(mouseX, [-300, 300], [-25, 25]);
  const bgGlowY = useTransform(mouseY, [-300, 300], [-25, 25]);

  const handleExploreScroll = (e) => {
    e.preventDefault();
    const target = document.getElementById('projects');
    if (target) {
      const navbarHeight = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const openResume = () => {
    window.open('/Vishnu_resume.pdf', '_blank');
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30, filter: 'blur(8px)' },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 1.0,
        ease: [0.16, 1, 0.3, 1],
        delay: 1.4 + custom * 0.12,
      },
    }),
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      id="home"
      className="relative w-full flex flex-col justify-center items-center px-6 md:px-8 overflow-hidden z-10 pt-28 pb-12 md:pt-36 md:pb-16"
    >
      {/* Background glow mapped to mouse parallax */}
      <motion.div
        style={{ x: bgGlowX, y: bgGlowY }}
        className="absolute w-[450px] h-[450px] bg-blue-500/5 rounded-full blur-[130px] pointer-events-none -z-10"
      />

      <motion.div
        style={{ x: textX, y: textY }}
        className="w-full max-w-4xl flex flex-col items-center text-center relative"
      >
        {/* Availability Badge */}
        <motion.div
          variants={fadeUp}
          custom={0}
          initial="hidden"
          animate="visible"
          className="px-3.5 py-1.5 glass rounded-full text-[10px] font-bold uppercase tracking-widest text-blue-400 mb-6 flex items-center gap-2 border border-blue-500/10"
        >
          <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse shadow-[0_0_6px_#3b82f6]" />
          Available for Opportunities
        </motion.div>

        {/* Title */}
        <motion.h1
          variants={fadeUp}
          custom={1}
          initial="hidden"
          animate="visible"
          className="text-5xl sm:text-7xl md:text-8xl font-black uppercase tracking-tighter leading-[0.95] text-[#F8FAFC] select-none"
        >
          Vishnu Pandey
        </motion.h1>

        {/* Subtitle Accent */}
        <motion.h2
          variants={fadeUp}
          custom={2}
          initial="hidden"
          animate="visible"
          className="text-base sm:text-lg md:text-xl font-extrabold text-blue-500 tracking-widest uppercase mt-4"
        >
          Software Developer
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={fadeUp}
          custom={3}
          initial="hidden"
          animate="visible"
          className="text-slate-400 text-xs sm:text-sm md:text-base max-w-xl mt-6 leading-relaxed font-medium"
        >
          Building high-performance web applications with clean architecture. Specializing in frontend React ecosystems while scaling into backend system design and DevOps pipelines.
        </motion.p>

        {/* Action Button cluster */}
        <motion.div
          variants={fadeUp}
          custom={4}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row gap-3.5 mt-9 w-full sm:w-auto px-4 sm:px-0"
        >
          <a
            href="#projects"
            onClick={handleExploreScroll}
            className="group px-7 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest text-[#0B0F19] bg-[#F8FAFC] hover:bg-white transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_4px_15px_rgba(255,255,255,0.1)] hover:-translate-y-0.5"
          >
            Explore Work
            <ArrowDownRight size={13} className="group-hover:rotate-45 transition-transform duration-300" />
          </a>
          <button
            onClick={openResume}
            className="px-7 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest text-slate-300 hover:text-white border border-white/10 hover:border-white/20 bg-white/[0.01] hover:bg-white/[0.04] transition-all duration-300 flex items-center justify-center gap-2"
          >
            Download Resume
            <FileText size={13} />
          </button>
        </motion.div>
      </motion.div>


    </div>
  );
};

export default Hero;
