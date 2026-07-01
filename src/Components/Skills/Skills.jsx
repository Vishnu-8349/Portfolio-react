import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, Cpu, Globe, Database, Terminal, GitBranch, Layers, Layout, Server, Cloud
} from 'lucide-react';

const Skills = () => {
  const skillsList = [
    { name: 'React', icon: <Code2 className="text-cyan-400" size={15} />, color: 'shadow-cyan-500/5' },
    { name: 'JavaScript', icon: <Cpu className="text-yellow-400" size={15} />, color: 'shadow-yellow-500/5' },
    { name: 'TypeScript', icon: <Code2 className="text-blue-500" size={15} />, color: 'shadow-blue-500/5' },
    { name: 'HTML', icon: <Layout className="text-orange-500" size={15} />, color: 'shadow-orange-500/5' },
    { name: 'CSS', icon: <Layout className="text-indigo-400" size={15} />, color: 'shadow-indigo-500/5' },
    { name: 'Tailwind CSS', icon: <Layout className="text-cyan-400" size={15} />, color: 'shadow-cyan-400/5' },
    { name: 'Framer Motion', icon: <Layers className="text-purple-400" size={15} />, color: 'shadow-purple-500/5' },
    { name: 'GSAP', icon: <Layers className="text-emerald-400" size={15} />, color: 'shadow-emerald-500/5' },
    { name: 'Redux', icon: <Cpu className="text-purple-500" size={15} />, color: 'shadow-purple-600/5' },
    { name: 'Node.js', icon: <Server className="text-green-500" size={15} />, color: 'shadow-green-500/5' },
    { name: 'Express', icon: <Server className="text-slate-400" size={15} />, color: 'shadow-slate-500/5' },
    { name: 'MongoDB', icon: <Database className="text-emerald-500" size={15} />, color: 'shadow-emerald-600/5' },
    { name: 'Git', icon: <GitBranch className="text-red-500" size={15} />, color: 'shadow-red-500/5' },
    { name: 'GitHub', icon: <GitBranch className="text-slate-300" size={15} />, color: 'shadow-slate-400/5' },
    { name: 'AWS', icon: <Cloud className="text-orange-400" size={15} />, color: 'shadow-orange-400/5' },
    { name: 'Vite', icon: <Terminal className="text-purple-400" size={15} />, color: 'shadow-purple-400/5' },
    { name: 'Responsive Design', icon: <Globe className="text-pink-400" size={15} />, color: 'shadow-pink-500/5' },
    { name: 'REST APIs', icon: <Globe className="text-blue-400" size={15} />, color: 'shadow-blue-400/5' },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.04,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 90,
        damping: 14,
      },
    },
  };

  return (
    <section id="skills" className="relative w-full py-10 md:py-14 px-6 md:px-8 overflow-hidden z-10 flex items-center justify-center border-t border-white/5">
      {/* Background glow shadow */}
      <div className="absolute left-[-15%] bottom-[-10%] w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="w-full max-w-5xl">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400 bg-blue-500/5 border border-blue-500/10 px-3 py-1 rounded-full">
            Tech Stack
          </span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white mt-4">
            Floating Skillscape
          </h2>
          <p className="text-slate-400 text-xs max-w-xs mx-auto mt-4 font-semibold leading-relaxed">
            An interactive layout of languages, systems, and tools I use to write performant software.
          </p>
        </div>

        {/* Interactive Staggered Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-8%' }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5"
        >
          {skillsList.map((skill, index) => {
            const floatDuration = 3.5 + (index % 3) * 0.8;
            const floatDelay = (index % 4) * 0.35;

            return (
              <motion.div
                key={index}
                variants={cardVariants}
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  y: {
                    duration: floatDuration,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    ease: 'easeInOut',
                    delay: floatDelay,
                  },
                }}
                whileHover={{
                  scale: 1.04,
                  y: -8,
                  borderColor: 'rgba(59, 130, 246, 0.25)',
                  transition: { type: 'spring', stiffness: 350, damping: 11 },
                }}
                className={`p-4 rounded-xl glass-card flex flex-col items-center justify-center text-center gap-3 select-none ${skill.color} border border-white/[0.05] shadow-[0_4px_15px_rgba(0,0,0,0.15)]`}
              >
                {/* Skill Icon */}
                <div className="w-9 h-9 rounded-lg bg-white/[0.015] border border-white/[0.03] flex items-center justify-center transition-all duration-300">
                  {skill.icon}
                </div>

                {/* Skill Title */}
                <span className="text-[10px] font-bold text-slate-300 tracking-widest uppercase">
                  {skill.name}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
