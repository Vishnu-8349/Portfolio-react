import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ExternalLink, X, ShieldCheck } from 'lucide-react';

const Certificates = () => {
  const [activeCert, setActiveCert] = useState(null);

  const certificatesData = [
    {
      title: 'Advanced React Development',
      issuer: 'Meta / Coursera',
      date: '2024',
      id: 'META-ARC-2024',
      details: 'Deep dive into rendering lifecycles, custom hook architecture, performance optimizations, state management patterns (Redux/Zustand), and React Server Components (RSC).',
    },
    {
      title: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: '2025',
      id: 'AWS-CCP-83921',
      details: 'Validation of cloud architecture basics, global infrastructure components, AWS security principles, compliance frameworks, core services (EC2, S3, RDS, Lambda), and pricing structures.',
    },
    {
      title: 'UI/UX Design Masterclass',
      issuer: 'Interactive Design Foundation',
      date: '2023',
      id: 'IDF-UIUX-7382',
      details: 'Acquired foundational knowledge on interactive layouts, typography, micro-interactions, responsive frameworks, visual hierarchy rules, color theories, and Figma layout controls.',
    },
  ];

  return (
    <section id="certificates" className="relative w-full py-12 md:py-16 px-6 md:px-8 overflow-hidden z-10 flex items-center justify-center border-t border-white/5 bg-[#121826]/30">
      {/* Background glow shadow */}
      <div className="absolute left-[-10%] bottom-[10%] w-[380px] h-[380px] bg-blue-950/5 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="w-full max-w-5xl">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400 bg-blue-500/5 border border-blue-500/10 px-3 py-1 rounded-full">
            Credentials
          </span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white mt-4">
            System Licenses
          </h2>
          <p className="text-slate-400 text-xs max-w-xs mx-auto mt-4 font-semibold leading-relaxed">
            Professional qualifications and system certifications validating technical competencies.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificatesData.map((cert, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              onClick={() => setActiveCert(cert)}
              className="p-6 rounded-2xl glass-card flex flex-col justify-between h-[210px] border border-white/5 cursor-pointer relative group transition-all duration-300"
            >
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/10 to-transparent" />
              
              <div>
                {/* Visual header */}
                <div className="flex items-center justify-between text-white/40 mb-5">
                  <Award size={18} className="text-blue-500 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-[8px] font-mono tracking-widest uppercase">{cert.date}</span>
                </div>

                {/* Title */}
                <h3 className="text-sm font-bold uppercase tracking-tight text-[#F8FAFC] group-hover:text-blue-400 transition-colors duration-300">
                  {cert.title}
                </h3>
                
                {/* Issuer */}
                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1">
                  {cert.issuer}
                </p>
              </div>

              {/* Card Footer credentials */}
              <div className="flex items-center justify-between mt-6 pt-3 border-t border-white/5 text-[8px] font-bold text-slate-500 uppercase tracking-widest">
                <span className="flex items-center gap-1">
                  <ShieldCheck size={11} className="text-emerald-500" />
                  ID: {cert.id}
                </span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-blue-400 flex items-center gap-0.5">
                  Expand
                  <ExternalLink size={9} />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fullscreen Zoom Modal */}
      <AnimatePresence>
        {activeCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 w-full h-full bg-[#0B0F19]/90 backdrop-blur-md z-[99999] flex items-center justify-center p-6"
            onClick={() => setActiveCert(null)}
          >
            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.9, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 15 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="w-full max-w-md bg-[#121826]/95 glass border border-white/10 rounded-2xl p-6 relative shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setActiveCert(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors p-1 bg-white/5 rounded-full hover:bg-white/10"
              >
                <X size={15} />
              </button>

              <div className="flex items-center gap-3 text-blue-500 mb-6">
                <Award size={24} className="animate-pulse" />
                <div>
                  <span className="text-[8px] font-bold uppercase tracking-widest text-slate-500">Verified Credential</span>
                  <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{activeCert.date}</div>
                </div>
              </div>

              {/* Title & Issuer */}
              <h3 className="text-base sm:text-lg font-black uppercase tracking-tight text-white leading-snug">
                {activeCert.title}
              </h3>
              <p className="text-[10px] font-bold text-blue-400 uppercase tracking-widest mt-1">
                Issued by {activeCert.issuer}
              </p>

              {/* Details text */}
              <p className="text-slate-400 text-xs mt-4 leading-relaxed font-semibold">
                {activeCert.details}
              </p>

              {/* Verification Info */}
              <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/5 text-[9px] font-mono font-bold text-slate-500 uppercase tracking-widest">
                <span className="flex items-center gap-1.5 font-mono">
                  <ShieldCheck size={12} className="text-emerald-500" />
                  AUTH_ID: {activeCert.id}
                </span>
                <span className="text-emerald-500 font-bold bg-emerald-500/10 px-2 py-0.5 rounded font-mono">
                  VERIFIED ✔
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;
