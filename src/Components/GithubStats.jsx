import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { GitFork, Star, Code, Terminal } from 'lucide-react';

const AnimatedCounter = ({ value, duration = 2 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(value.replace(/[^0-9]/g, ''));
    if (start === end) return;

    const totalMiliseconds = duration * 1000;
    const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 15);
    
    const timer = setInterval(() => {
      start += Math.ceil(end / 45); 
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value, duration]);

  const hasPlus = value.includes('+');
  const hasHrs = value.includes('hrs');

  return (
    <span>
      {count.toLocaleString()}
      {hasPlus && '+'}
      {hasHrs && ' hrs'}
    </span>
  );
};

const GithubStats = () => {
  const commitGrid = Array.from({ length: 44 }, () => 
    Array.from({ length: 7 }, () => Math.floor(Math.random() * 5))
  );

  const stats = [
    { label: 'Total Commits', value: '1420+', desc: 'Across all workspaces' },
    { label: 'Hours Engaged', value: '1850 hrs', desc: 'Active IDE session runtime' },
    { label: 'PRs Completed', value: '78', desc: 'Continuous integration' },
    { label: 'Stars Gained', value: '34', desc: 'Open source validation' },
  ];

  const repos = [
    {
      name: 'endoveda-fe',
      desc: 'Advanced healthcare clinic portal frontend built with React, modular dashboards, and high speed caching.',
      lang: 'JavaScript',
      langColor: 'bg-yellow-400',
      stars: 12,
      forks: 4,
    },
    {
      name: 'luxury-gym-landing',
      desc: 'Brand marketing showcase integrating GSAP canvas interactions, scroll animations, and CSS variables.',
      lang: 'React / GSAP',
      langColor: 'bg-blue-400',
      stars: 8,
      forks: 2,
    },
    {
      name: 'airbnb-clone-ux',
      desc: 'High fidelity interface recreation focusing on date metrics, maps layout, and Redux data binding.',
      lang: 'TypeScript',
      langColor: 'bg-blue-600',
      stars: 14,
      forks: 3,
    },
  ];

  const getIntensityColor = (level) => {
    switch (level) {
      case 0: return 'bg-white/[0.015] border-white/[0.03]';
      case 1: return 'bg-blue-950/20 border-blue-900/10';
      case 2: return 'bg-blue-900/35 border-blue-800/15';
      case 3: return 'bg-blue-700/50 border-blue-600/25';
      case 4: return 'bg-blue-500/75 border-blue-500/35 shadow-[0_0_8px_rgba(59,130,246,0.25)]';
      default: return 'bg-white/[0.015]';
    }
  };

  return (
    <section id="github" className="relative w-full py-16 md:py-20 px-6 md:px-8 overflow-hidden z-10 flex items-center justify-center border-t border-white/5">
      <div className="absolute left-[-10%] top-[20%] w-[380px] h-[380px] bg-blue-950/5 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="w-full max-w-5xl">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400 bg-blue-500/5 border border-blue-500/10 px-3 py-1 rounded-full">
            Coding Pulse
          </span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white mt-4">
            GitHub Metrics
          </h2>
        </div>

        {/* Counter cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {stats.map((stat, idx) => (
            <div key={idx} className="p-5 rounded-xl glass border border-white/5 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/10 to-transparent" />
              <div className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">{stat.label}</div>
              <div className="text-xl sm:text-2xl font-black text-white mt-2 select-none tracking-tight">
                <AnimatedCounter value={stat.value} />
              </div>
              <div className="text-[8px] font-bold text-slate-400 mt-1 uppercase tracking-widest">{stat.desc}</div>
            </div>
          ))}
        </div>

        {/* Grid split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Commit contribution card */}
          <div className="lg:col-span-7 p-6 rounded-2xl glass border border-white/5 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/15 to-transparent" />
            
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-white flex items-center gap-2">
                <Terminal size={13} className="text-blue-500" />
                Commit Grid
              </h3>
              <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mt-1">
                Visualizing active workspace contributions.
              </p>
            </div>

            {/* Commits Graph cells container */}
            <div className="my-8 overflow-x-auto select-none no-scrollbar">
              <div className="flex gap-[3px] min-w-max">
                {commitGrid.map((week, wIdx) => (
                  <div key={wIdx} className="flex flex-col gap-[3px]">
                    {week.map((level, dIdx) => (
                      <div
                        key={dIdx}
                        className={`w-[9px] h-[9px] rounded-[1.5px] border transition-all duration-300 hover:scale-125 hover:z-20 ${getIntensityColor(level)}`}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-between items-center text-[8px] font-bold text-slate-500 uppercase tracking-widest">
              <span>Less</span>
              <div className="flex gap-[3px] items-center">
                <div className="w-[7px] h-[7px] rounded-[1px] bg-white/[0.015] border border-white/[0.03]" />
                <div className="w-[7px] h-[7px] rounded-[1px] bg-blue-950/20 border border-blue-900/10" />
                <div className="w-[7px] h-[7px] rounded-[1px] bg-blue-900/35 border border-blue-800/15" />
                <div className="w-[7px] h-[7px] rounded-[1px] bg-blue-700/50 border border-blue-600/25" />
                <div className="w-[7px] h-[7px] rounded-[1px] bg-blue-500/75 border border-blue-500/35" />
              </div>
              <span>More</span>
            </div>
          </div>

          {/* Repos list */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {repos.map((repo, idx) => (
              <a
                key={idx}
                href="https://github.com/Vishnu-8349"
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl glass border border-white/5 hover:border-blue-500/20 bg-gradient-to-r hover:from-blue-500/[0.01] hover:to-transparent transition-all duration-300 flex flex-col justify-between group relative"
              >
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/10 to-transparent" />
                
                <div>
                  <div className="flex items-center justify-between text-xs font-bold uppercase tracking-widest text-[#F8FAFC] group-hover:text-blue-400 transition-colors">
                    <span className="flex items-center gap-1.5">
                      <Code size={13} className="text-slate-400" />
                      {repo.name}
                    </span>
                    <Star size={11} className="opacity-0 group-hover:opacity-100 transition-all text-yellow-500" />
                  </div>
                  <p className="text-[10px] font-bold text-slate-400 mt-2 line-clamp-2 leading-relaxed uppercase tracking-tight">
                    {repo.desc}
                  </p>
                </div>

                <div className="flex items-center gap-4 mt-4 text-[8px] font-bold text-slate-500 tracking-widest uppercase">
                  <div className="flex items-center gap-1">
                    <span className={`w-1.5 h-1.5 rounded-full ${repo.langColor}`} />
                    <span>{repo.lang}</span>
                  </div>
                  <div className="flex items-center gap-0.5">
                    <Star size={10} />
                    <span>{repo.stars}</span>
                  </div>
                  <div className="flex items-center gap-0.5">
                    <GitFork size={10} />
                    <span>{repo.forks}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default GithubStats;
