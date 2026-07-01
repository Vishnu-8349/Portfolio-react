import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import profileImg from '../../assets/vishnu-2.JPG';
import { Compass, Calendar, Briefcase, Target, Trophy, Dumbbell, Code2 } from 'lucide-react';

const About = () => {
  const [activeTab, setActiveTab] = useState('who');

  const profileBullets = [
    { text: 'Software Developer', icon: <Code2 size={13} className="text-blue-400" /> },
    { text: 'React & Frontend Focus', icon: <Code2 size={13} className="text-cyan-400" /> },
    { text: 'Analytics & Biz Apps', icon: <Briefcase size={13} className="text-emerald-400" /> },
    { text: 'System & Architecture', icon: <Compass size={13} className="text-indigo-400" /> },
    { text: 'Backend & DevOps Path', icon: <Target size={13} className="text-purple-400" /> },
    { text: 'Gym Enthusiast', icon: <Dumbbell size={13} className="text-orange-400" /> },
  ];

  const storyTabs = {
    who: {
      title: 'Who I Am',
      icon: <Compass size={15} />,
      content:
        'I am Vishnu Pandey, a Software Developer focused on engineering responsive, modular frontend systems while actively expanding my skill set into database design, backend services, and cloud integrations.',
    },
    journey: {
      title: 'Journey',
      icon: <Calendar size={15} />,
      content:
        'My journey started with C++ programming and core data structures/algorithms. I later specialized in React.js frontend structures and am now scaling into complete systems engineering, databases, and DevOps.',
    },
    current: {
      title: 'Current Position',
      icon: <Briefcase size={15} />,
      content:
        'Currently contributing to the Endoveda healthcare platform by building responsive React applications, implementing custom CMS features, integrating REST APIs, and maintaining production-ready frontend solutions.',
    },
    goals: {
      title: 'Goals',
      icon: <Target size={15} />,
      content:
        'My focus is to evolve into a versatile Full-Stack Systems Engineer. I am actively working with cloud architectures (AWS), backend technologies (Node/Express/MongoDB), containerization, and continuous deployment workflows.',
    },
  };

  const timelineMilestones = [
    { year: '2023', title: 'DSA & Problem Solving', desc: 'Focused on C++, DSA and algorithmic thinking.' },
    { year: '2024', title: 'Frontend Development', desc: 'Learned HTML, CSS, JavaScript, React and Git.' },
    { year: '2025', title: 'Projects & Practice', desc: 'Built React projects while consistently practicing DSA.' },
    { year: '2026', title: 'Professional Journey', desc: 'Started internship, worked on real-world production projects.' },
  ];

  return (
    <section id="about" className="relative w-full py-12 md:py-16 px-6 md:px-8 overflow-hidden z-10 flex items-center justify-center border-t border-white/5">
      {/* Glow decorative light */}
      <div className="absolute right-[-10%] top-[20%] w-[350px] h-[350px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="w-full max-w-6xl flex flex-col items-center">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400 bg-blue-500/5 border border-blue-500/10 px-3 py-1 rounded-full">
            Profile & Timeline
          </span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white mt-4">
            Interactive Story
          </h2>
        </div>

        {/* Layout grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch w-full">
          
          {/* Profile Card left */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 rounded-2xl glass border border-white/5 relative">
            <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-blue-500/15 to-transparent" />
            
            <div className="flex flex-col items-center text-center">
              {/* Profile Image Frame */}
              <div className="w-36 h-36 rounded-2xl overflow-hidden border border-white/10 relative group mb-6 shadow-2xl">
                <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-300" />
                <img 
                  src={profileImg} 
                  alt="Vishnu Pandey" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Identity */}
              <h3 className="text-lg font-bold uppercase tracking-tight text-white">Vishnu Pandey</h3>
              <p className="text-[11px] font-bold text-blue-500 uppercase tracking-widest mt-1">Software Developer</p>
            </div>

            {/* Profile traits */}
            <div className="grid grid-cols-2 gap-2 mt-8">
              {profileBullets.map((bullet, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center gap-2 p-2.5 rounded-lg bg-white/[0.01] border border-white/[0.04] text-[10px] font-semibold text-slate-300 hover:border-white/10 hover:bg-white/[0.02] transition-all duration-300"
                >
                  {bullet.icon}
                  <span className="truncate">{bullet.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive tabs right */}
          <div className="lg:col-span-7 flex flex-col justify-between p-6 md:p-8 rounded-2xl glass border border-white/5 relative">
            <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-blue-500/15 to-transparent" />
            
            <div>
              {/* Tab Navigation header */}
              <div className="flex flex-wrap gap-2 border-b border-white/5 pb-4 mb-6">
                {Object.keys(storyTabs).map((key) => (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 transition-all duration-350 ${
                      activeTab === key 
                        ? 'bg-blue-500/10 text-blue-400 border border-blue-500/15' 
                        : 'text-slate-400 hover:text-white border border-transparent'
                    }`}
                  >
                    {storyTabs[key].icon}
                    {storyTabs[key].title}
                  </button>
                ))}
              </div>

              {/* Story Content Area */}
              <div className="min-h-[120px] flex items-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className="space-y-3"
                  >
                    <h4 className="text-base font-bold text-white uppercase tracking-tight">
                      {storyTabs[activeTab].title}
                    </h4>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-semibold">
                      {storyTabs[activeTab].content}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Achievement Timeline */}
            <div className="mt-10 pt-6 border-t border-white/5">
              <h5 className="text-[9px] font-bold uppercase tracking-widest text-slate-500 mb-5 flex items-center gap-1.5">
                <Trophy size={11} className="text-yellow-500" />
                Evolution Milestones
              </h5>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {timelineMilestones.map((item, idx) => (
                  <div key={idx} className="relative group">
                    <div className="text-[11px] font-black text-blue-500 group-hover:text-blue-400 transition-colors">
                      {item.year}
                    </div>
                    <div className="text-[10px] font-bold text-white mt-1 uppercase tracking-tight leading-tight">
                      {item.title}
                    </div>
                    <div className="text-[9px] text-slate-500 mt-1 leading-normal font-semibold">
                      {item.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
