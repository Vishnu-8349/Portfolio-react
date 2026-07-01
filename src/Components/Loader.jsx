import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loader = ({ onComplete }) => {
  const [logs, setLogs] = useState([]);
  const [completed, setCompleted] = useState(false);

  const logSequence = [
    { text: 'Initializing Vishnu.exe...', delay: 300 },
    { text: 'Loading core modules...', delay: 800 },
    { text: 'React', delay: 1300, success: true },
    { text: 'JavaScript', delay: 1700, success: true },
    { text: 'TypeScript', delay: 2100, success: true },
    { text: 'Frontend Engineering', delay: 2500, success: true },
    { text: 'VISHNU_OS version 1.0.4 loaded successfully.', delay: 3000 },
  ];

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    logSequence.forEach((item, index) => {
      setTimeout(() => {
        setLogs((prev) => [...prev, item]);

        if (index === logSequence.length - 1) {
          setTimeout(() => {
            setCompleted(true);
            setTimeout(() => {
              document.body.style.overflow = 'unset';
              onComplete();
            }, 800); 
          }, 800);
        }
      }, item.delay);
    });
  }, []);

  return (
    <AnimatePresence>
      {!completed && (
        <motion.div
          className="fixed inset-0 w-full h-full bg-[#0B0F19] z-[99999] flex flex-col items-center justify-center font-mono px-6 select-none"
          exit={{ 
            y: '-100vh',
            opacity: 0,
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
        >
          {/* CRT scanline filters */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(18,24,38,0)_50%,rgba(0,0,0,0.15)_50%)] bg-[length:100%_4px] pointer-events-none opacity-20" />
          
          <div className="w-full max-w-md bg-[#121826]/80 glass border border-white/5 rounded-lg p-6 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-500" />
            
            {/* Header window chrome */}
            <div className="flex items-center space-x-1.5 mb-6 text-white/40">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/25" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/25" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/25" />
              <span className="text-[10px] tracking-widest pl-2 font-mono">VISHNU_BOOT.SH</span>
            </div>

            {/* Log streams */}
            <div className="space-y-3.5 min-h-[220px] text-xs font-mono">
              {logs.map((log, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25 }}
                  className="flex items-center justify-between"
                >
                  <span className={log.success ? "text-blue-400 font-medium" : "text-[#94A3B8]"}>
                    {log.success ? `> Loading module: ${log.text}...` : `> ${log.text}`}
                  </span>
                  {log.success && (
                    <span className="text-emerald-500 font-bold pl-2 bg-emerald-500/10 px-1.5 py-0.5 rounded text-[10px]">
                      ✔
                    </span>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Progress status indicators */}
            <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] text-white/30">
              <span>INITIALIZING MODULES</span>
              <div className="flex items-center space-x-2">
                <div className="w-24 h-0.5 bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-blue-500"
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 3.0, ease: 'easeInOut' }}
                  />
                </div>
                <motion.span 
                  animate={{ opacity: [1, 0.4, 1] }} 
                  transition={{ duration: 1, repeat: Infinity }}
                  className="font-bold text-blue-400"
                >
                  RUNNING
                </motion.span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
