import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { ExternalLink, Sparkles } from 'lucide-react';

import endovedaImg from '../../assets/endoveda_preview.png';
import stockTradingImg from '../../assets/stock_trading_preview.png';
import letsKonstructImg from '../../assets/lets_konstruct_preview.png';
import cryptoPlaceImg from '../../assets/crypto_place_preview.png';
import airbnbImg from '../../assets/airbnb_preview.jpg';
import cryptoTrackerImg from '../../assets/crypto_tracker_preview.png';

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-200, 200], [8, -8]);
  const rotateY = useTransform(x, [-200, 200], [-8, 8]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const isEven = index % 2 === 0;
  const isLiveAvailable = !!project.liveLink;
  const isGithubAvailable = !!project.githubLink;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-8%' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`flex flex-col lg:flex-row gap-10 items-center justify-between py-12 ${
        isEven ? '' : 'lg:flex-row-reverse'
      }`}
    >
      {/* Visual Canvas Block */}
      <div className="w-full lg:w-1/2 flex justify-center">
        {isLiveAvailable ? (
          <motion.a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
            className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden glass border border-white/5 group cursor-none select-none block shadow-[0_15px_40px_rgba(0,0,0,0.4)]"
            data-cursor="view"
          >
            <div className="absolute inset-0 bg-[#0B0F19]/40 z-10 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
            <div className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-blue-500/25 rounded-2xl pointer-events-none" />

            {/* Parallax Image */}
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover scale-102 group-hover:scale-105 transition-transform duration-700 ease-out"
              style={{ transformStyle: 'preserve-3d', translateZ: '20px' }}
            />

            {/* Number Tag */}
            <div 
              className="absolute top-4 left-4 z-30 px-3 py-1 bg-[#0B0F19]/80 backdrop-blur-md rounded-full text-[9px] font-bold uppercase tracking-widest text-slate-300 border border-white/5"
              style={{ translateZ: '40px' }}
            >
              Project 0{index + 1}
            </div>
          </motion.a>
        ) : (
          <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
            className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden glass border border-white/5 group select-none block shadow-[0_15px_40px_rgba(0,0,0,0.4)]"
          >
            <div className="absolute inset-0 bg-[#0B0F19]/40 z-10 pointer-events-none" />
            <div className="absolute inset-0 z-20 border border-white/5 rounded-2xl pointer-events-none" />

            {/* Parallax Image */}
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover scale-102 transition-transform duration-700 ease-out"
              style={{ transformStyle: 'preserve-3d', translateZ: '20px' }}
            />

            {/* Number Tag */}
            <div 
              className="absolute top-4 left-4 z-30 px-3 py-1 bg-[#0B0F19]/80 backdrop-blur-md rounded-full text-[9px] font-bold uppercase tracking-widest text-slate-400 border border-white/5"
              style={{ translateZ: '40px' }}
            >
              Project 0{index + 1}
            </div>
          </motion.div>
        )}
      </div>

      {/* Details Block */}
      <div className="w-full lg:w-5/12 space-y-5">
        <div className="space-y-2">
          {/* Tech Tags */}
          <div className="flex flex-wrap gap-1.5">
            {project.stack.map((tech, idx) => (
              <span 
                key={idx} 
                className="px-2 py-0.5 rounded-full text-[8px] font-bold uppercase tracking-wider text-blue-400 bg-blue-500/5 border border-blue-500/10"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#F8FAFC]">
            {project.title}
          </h3>
        </div>

        <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-semibold">
          {project.description}
        </p>

        {/* Features lists */}
        <div className="space-y-2">
          <h4 className="text-[9px] font-bold uppercase tracking-widest text-slate-500 flex items-center gap-1.5">
            <Sparkles size={11} className="text-blue-500" />
            Key Architecture
          </h4>
          <ul className="grid grid-cols-2 gap-2 text-[9px] font-bold text-slate-300 uppercase tracking-tight">
            {project.features.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-2 bg-white/[0.015] border border-white/[0.03] p-2.5 rounded-lg">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                <span className="truncate">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* External links */}
        <div className="flex flex-wrap gap-3.5 pt-2">
          {isLiveAvailable ? (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full text-[9px] font-bold uppercase tracking-widest text-[#0B0F19] bg-[#F8FAFC] hover:bg-white transition-all duration-300 flex items-center gap-2"
            >
              Live Demo
              <ExternalLink size={11} />
            </a>
          ) : (
            <span className="px-5 py-2.5 rounded-full text-[9px] font-bold uppercase tracking-widest text-slate-500 border border-white/5 bg-[#0B0F19]/50 backdrop-blur-sm cursor-not-allowed flex items-center gap-2 select-none">
              Private Project
            </span>
          )}

          {isGithubAvailable ? (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full text-[9px] font-bold uppercase tracking-widest text-slate-300 hover:text-white border border-white/10 hover:border-white/20 bg-white/[0.01] hover:bg-white/[0.04] transition-all duration-300 flex items-center gap-2"
            >
              GitHub
              <svg className="w-[11px] h-[11px] fill-current" viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
            </a>
          ) : (
            <span className="px-5 py-2.5 rounded-full text-[9px] font-bold uppercase tracking-widest text-slate-500 border border-white/5 bg-[#0B0F19]/50 backdrop-blur-sm cursor-not-allowed flex items-center gap-2 select-none">
              Private Codebase
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const MyWork = () => {
  const projectsData = [
    {
      title: "Let's Konstruct",
      description: "An enterprise-grade marketplace and dashboard for construction procurement, tracking orders, invoices, and payments in one unified and highly transparent interface.",
      stack: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite', 'REST APIs'],
      features: ['Procurement Engine', 'Invoice Tracking', 'Interactive KPI Cards', 'Dynamic Dashboard'],
      image: letsKonstructImg,
      liveLink: 'https://letskonstruct.com/',
      githubLink: null,
    },
    {
      title: 'Endoveda',
      description: 'A modern IVF analytics portal and business admin panel featuring customized CMS configurations, highly optimized dynamic rendering, and data visualization tools.',
      stack: ['React', 'Tailwind CSS', 'Framer Motion', 'REST APIs', 'Vite'],
      features: ['Custom CMS Config', 'Responsive Grid Layout', 'SEO & Performance Opt', 'Interactive Booking'],
      image: endovedaImg,
      liveLink: null,
      githubLink: null,
    },
    {
      title: 'Stock Trading Platform',
      description: 'A comprehensive simulated stock trading dashboard mimicking real-world exchange interfaces. Implements portfolio ledger calculations, real-time interactive charts, and holdings analysis.',
      stack: ['React', 'Redux Toolkit', 'Tailwind CSS', 'Framer Motion', 'REST APIs'],
      features: ['Interactive Holdings', 'Real-time Charting', 'Portfolio Ledger', 'Zerodha Clone UI'],
      image: stockTradingImg,
      liveLink: 'https://stock-trading-platform-1-vs3h.onrender.com/',
      githubLink: 'https://github.com/Vishnu-8349/Stock-Trading-Platform',
    },
    {
      title: 'CryptoPlace',
      description: 'A global cryptocurrency marketplace featuring real-time coin rank tables, interactive coin listings, instant currency select details, and custom price search filters.',
      stack: ['React', 'Tailwind CSS', 'Vite', 'REST APIs', 'Framer Motion'],
      features: ['Marketplace Listings', 'Instant Currency Swaps', 'Coin Search Filter', 'Responsive Interface'],
      image: cryptoPlaceImg,
      liveLink: 'https://cryptoplace-aug.netlify.app/',
      githubLink: 'https://github.com/Vishnu-8349/CryptoPlace',
    },
    {
      title: 'Airbnb Clone',
      description: 'A full-fidelity replication of Airbnb\'s booking core interfaces. Standardizes dynamic date calendars, geolocation search filters, interactive list cards, and responsive state tracking.',
      stack: ['React', 'Redux Toolkit', 'Tailwind CSS', 'REST APIs'],
      features: ['Dynamic Filter', 'Booking State', 'Modular Form UI', 'Mock Databases'],
      image: airbnbImg,
      liveLink: 'https://wanderlust-575w.onrender.com/listings',
      githubLink: 'https://github.com/Vishnu-8349',
    },
    {
      title: 'CryptoTracker',
      description: 'A real-time cryptocurrency tracking platform featuring dynamic comparison dashboards, interactive market performance history charts, and responsive coin analysis.',
      stack: ['React', 'Tailwind CSS', 'Vite', 'REST APIs', 'Framer Motion'],
      features: ['Compare Crypto metrics', 'Real-time Charting', 'Market Cap & Volume tracker', 'Responsive Dashboard'],
      image: cryptoTrackerImg,
      liveLink: 'https://crypto-dashboard-aug.netlify.app/',
      githubLink: 'https://github.com/Vishnu-8349/crypto-dashboard-aug',
    },
  ];

  return (
    <section id="projects" className="relative w-full py-10 md:py-14 px-6 md:px-8 overflow-hidden z-10 flex items-center justify-center border-t border-white/5 bg-[#121826]/30">
      <div className="absolute right-[50%] top-[30%] -translate-x-1/2 w-[500px] h-[500px] bg-blue-950/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="w-full max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400 bg-blue-500/5 border border-blue-500/10 px-3 py-1 rounded-full">
            Showcase
          </span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white mt-4">
            Product Launch
          </h2>
          <p className="text-slate-400 text-xs max-w-xs mx-auto mt-4 font-semibold leading-relaxed">
            A curated grid of platforms, tools, and interfaces engineered with premium animation.
          </p>
        </div>

        {/* Project List */}
        <div className="divide-y divide-white/5 space-y-12">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyWork;

