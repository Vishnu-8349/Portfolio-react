import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: 'Software Developer Intern (Frontend Developer – React)',
      company: "Let's Konstruct (MITR)",
      period: '7 Jan 2026 – 6 Apr 2026',
      description: 'Worked as a Software Developer Intern, focusing on frontend development using React.js. Built responsive, user-friendly interfaces, collaborated with designers and backend developers, and contributed to production-ready web applications.',
      achievements: [
        'Developed responsive React.js user interfaces with reusable components.',
        'Integrated REST APIs for dynamic data rendering.',
        'Optimized application performance and accessibility.',
        'Fixed UI bugs and improved user experience across devices.',
        'Followed Git-based version control and Agile development practices.',
        'Collaborated with cross-functional teams to deliver production-ready features.',
      ],
    },
    {
      role: 'Software Developer (Probation) – Frontend Developer (React)',
      company: 'Endoveda',
      period: '7 Apr 2026 – Present',
      description: 'Working as a Software Developer (Probation), responsible for frontend development of the Endoveda analytics dashboard and business modules using React.js. Developing scalable website modules, custom CMS configurations, and optimizing the application for production deployment.',
      achievements: [
        'Developed responsive business application modules and analytics panels using React.',
        'Built and maintained custom CMS modules for dynamic content management.',
        'Integrated backend APIs for dynamic content rendering.',
        'Implemented mobile-first responsive layouts.',
        'Optimized loading speed, accessibility, and Lighthouse performance.',
        'Created QA and production builds for deployment.',
        'Collaborated closely with backend developers for seamless integration.',
      ],
    },
    {
      role: 'Software Developer (Frontend Developer – React)',
      company: 'Future Project',
      period: 'Coming Soon',
      description: 'This card can be replaced with your next project whenever you start working on it.',
      achievements: [],
    },
  ];

  return (
    <section id="experience" className="relative w-full py-10 md:py-14 px-6 md:px-8 overflow-hidden z-10 flex items-center justify-center border-t border-white/5 bg-[#121826]/30">
      {/* Background glow shape */}
      <div className="absolute right-[-10%] bottom-[-10%] w-[380px] h-[380px] bg-blue-950/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="w-full max-w-4xl">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400 bg-blue-500/5 border border-blue-500/10 px-3 py-1 rounded-full">
            History
          </span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white mt-4">
            Professional Path
          </h2>
          <p className="text-slate-400 text-xs max-w-xs mx-auto mt-4 font-semibold leading-relaxed">
            Key professional milestones and engineering achievements in frontend development.
          </p>
        </div>

        {/* Timeline container */}
        <div className="relative border-l border-white/5 pl-6 md:pl-10 space-y-12 ml-4 md:ml-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              {/* Pulsing indicator dot */}
              <div className="absolute left-[-31px] md:left-[-51px] top-1.5 w-4.5 h-4.5 rounded-full bg-[#0B0F19] border-2 border-blue-500 flex items-center justify-center">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse shadow-[0_0_8px_#3b82f6]" />
              </div>

              {/* Experience Card */}
              <div className="p-6 md:p-8 rounded-2xl glass border border-white/5 relative">
                <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-blue-500/15 to-transparent" />
                
                {/* Header row */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/5 pb-4 mb-6">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold uppercase tracking-tight text-white flex items-center gap-2">
                      <Briefcase size={15} className="text-blue-500" />
                      {exp.role}
                    </h3>
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mt-1">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 text-[9px] font-bold text-blue-400 bg-blue-500/10 border border-blue-500/15 px-3 py-1 rounded-full w-max">
                    <Calendar size={11} />
                    {exp.period}
                  </div>
                </div>

                {/* Subtext description */}
                <p className="text-slate-400 text-xs sm:text-sm font-semibold mb-6 leading-relaxed">
                  {exp.description}
                </p>

                {/* Achievements List */}
                {exp.achievements && exp.achievements.length > 0 && (
                  <div className="space-y-3">
                    <h4 className="text-[9px] font-bold uppercase tracking-widest text-slate-500">
                      Key Achievements
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {exp.achievements.map((ach, idx) => (
                        <motion.li
                          key={idx}
                          whileHover={{ x: 3 }}
                          className="flex items-start gap-2.5 p-3 rounded-lg bg-white/[0.015] border border-white/[0.03] hover:border-white/10 hover:bg-white/[0.03] transition-all duration-300"
                        >
                          <CheckCircle2 size={12} className="text-emerald-500 mt-0.5 shrink-0" />
                          <span className="text-[10px] font-bold text-slate-300 uppercase tracking-tight leading-tight">
                            {ach}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                )}

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
