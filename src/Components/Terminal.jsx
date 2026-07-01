import React, { useEffect, useRef, useState } from 'react';
import { Terminal as TermIcon, CornerDownLeft } from 'lucide-react';

const Terminal = () => {
  const [history, setHistory] = useState([
    { type: 'output', text: 'Welcome to VISHNU_OS Interactive Shell. Type "help" to list commands.' }
  ]);
  const [input, setInput] = useState('');
  const terminalEndRef = useRef(null);
  const inputRef = useRef(null);

  const focusInput = () => {
    if (inputRef.current) inputRef.current.focus();
  };

  useEffect(() => {
    if (history.length > 1 && terminalEndRef.current) {
      terminalEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [history]);

  const handleCommand = (cmdText) => {
    const cleanCmd = cmdText.trim().toLowerCase();
    const newHistory = [...history, { type: 'input', text: cmdText }];

    if (cleanCmd === 'clear') {
      setHistory([]);
      return;
    }

    let outputText = '';
    
    switch (cleanCmd) {
      case 'help':
        outputText = (
          <div className="space-y-1 text-[#94A3B8]">
            <p>Available system instructions:</p>
            <p className="text-blue-400">  about    <span className="text-slate-500">- Learn more about Vishnu</span></p>
            <p className="text-blue-400">  projects <span className="text-slate-500">- View core frontend projects</span></p>
            <p className="text-blue-400">  skills   <span className="text-slate-500">- Display tech stack breakdown</span></p>
            <p className="text-blue-400">  resume   <span className="text-slate-500">- View resume document</span></p>
            <p className="text-blue-400">  contact  <span className="text-slate-500">- Get contact details</span></p>
            <p className="text-blue-400">  clear    <span className="text-slate-500">- Clear terminal logs</span></p>
            <p className="text-blue-400">  help     <span className="text-slate-500">- List command helper guide</span></p>
          </div>
        );
        break;
      case 'about':
        outputText = (
          <div className="space-y-1 text-[#94A3B8]">
            <p className="text-white font-bold uppercase tracking-wider">Vishnu Pandey - Software Developer</p>
            <p className="leading-relaxed">Specializing in React ecosystems and frontend systems while scaling into backend architecture, database design, and cloud deployments. Passionate about algorithmic problem solving, clean systems, and lifting weights in the gym.</p>
          </div>
        );
        break;
      case 'projects':
        outputText = (
          <div className="space-y-2 text-[#94A3B8]">
            <p className="font-bold text-white uppercase tracking-wider">Featured Projects:</p>
            <p><span className="text-blue-400 font-bold">1. Let's Konstruct</span> - Construction procurement marketplace.</p>
            <p><span className="text-blue-400 font-bold">2. Endoveda</span> - IVF analytics dashboard and CMS.</p>
            <p><span className="text-blue-400 font-bold">3. Stock Trading Platform</span> - Simulated portfolio ledger & charts.</p>
            <p><span className="text-blue-400 font-bold">4. CryptoPlace</span> - Global cryptocurrency price tracker and listings.</p>
            <p><span className="text-blue-400 font-bold">5. Airbnb Clone</span> - React booking flow UI.</p>
            <p><span className="text-blue-400 font-bold">6. CryptoTracker</span> - Real-time cryptocurrency price comparison dashboard.</p>
          </div>
        );
        break;
      case 'skills':
        outputText = 'React, JavaScript, TypeScript, HTML, CSS, Tailwind CSS, Framer Motion, GSAP ScrollTrigger, Redux Toolkit, Node.js, Express, MongoDB, Git, GitHub, AWS Cloud, Vite, Responsive Architecture, REST APIs.';
        break;
      case 'resume':
        window.open('/Vishnu_resume.pdf', '_blank');
        outputText = 'Opening Vishnu_resume.pdf in a new tab...';
        break;
      case 'contact':
        outputText = (
          <div className="space-y-1 text-[#94A3B8]">
            <p>Email: <a href="mailto:vp1173667@gmail.com" className="text-blue-400 underline">vp1173667@gmail.com</a></p>
            <p>GitHub: <a href="https://github.com/Vishnu-8349" target="_blank" rel="noreferrer" className="text-blue-400 underline">github.com/Vishnu-8349</a></p>
            <p>LinkedIn: <span className="text-blue-400">linkedin.com/in/vishnu-pandey</span></p>
          </div>
        );
        break;
      case '':
        outputText = '';
        break;
      default:
        outputText = `Error: Instruction "${cmdText}" not recognized. Type "help" for a list of valid commands.`;
    }

    if (outputText !== '') {
      setHistory([...newHistory, { type: 'output', text: outputText }]);
    } else {
      setHistory(newHistory);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(input);
      setInput('');
    }
  };

  return (
    <section id="terminal" className="relative w-full py-10 md:py-14 px-6 md:px-8 overflow-hidden z-10 flex items-center justify-center border-t border-white/5">
      <div className="absolute right-[-10%] top-[30%] w-[380px] h-[380px] bg-blue-950/5 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="w-full max-w-3xl flex flex-col items-center">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400 bg-blue-500/5 border border-blue-500/10 px-3 py-1 rounded-full">
            Shell
          </span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white mt-4">
            Interactive Console
          </h2>
        </div>

        {/* Console Box */}
        <div 
          onClick={focusInput}
          className="w-full bg-[#121826]/85 glass border border-white/5 rounded-xl shadow-2xl overflow-hidden font-mono text-xs text-[#94A3B8] p-5 cursor-text relative"
        >
          {/* Chrome header */}
          <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-4 text-white/40">
            <div className="flex items-center space-x-1.5">
              <div className="w-2 h-2 rounded-full bg-red-500/25" />
              <div className="w-2 h-2 rounded-full bg-yellow-500/25" />
              <div className="w-2 h-2 rounded-full bg-green-500/25" />
              <span className="text-[9px] tracking-widest pl-2 font-bold flex items-center gap-1.5 font-mono">
                <TermIcon size={12} className="text-blue-500" />
                VISHNU_OS@SHELL:~
              </span>
            </div>
            <span className="text-[9px] uppercase tracking-widest">v1.0.4</span>
          </div>

          {/* Console output display */}
          <div className="space-y-3.5 max-h-[280px] overflow-y-auto pr-2 no-scrollbar scroll-smooth font-mono">
            {history.map((log, idx) => (
              <div key={idx} className="leading-relaxed">
                {log.type === 'input' ? (
                  <p className="text-blue-400 font-bold font-mono">
                    <span>vishnu_user@os:~$ </span>
                    <span className="text-white font-mono">{log.text}</span>
                  </p>
                ) : (
                  <div className="text-slate-300 font-semibold font-mono">{log.text}</div>
                )}
              </div>
            ))}
            <div ref={terminalEndRef} />
          </div>

          {/* Interactive cursor line */}
          <div className="flex items-center gap-2 mt-4 pt-3 border-t border-white/5 text-blue-400 font-bold font-mono">
            <span>vishnu_user@os:~$</span>
            <div className="flex-1 flex items-center relative">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="w-full bg-transparent text-white border-none outline-none focus:ring-0 p-0 font-mono caret-blue-500"
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck="false"
              />
              {input === '' && (
                <span className="absolute left-0 w-2 h-3.5 bg-blue-500 animate-pulse pointer-events-none" />
              )}
            </div>
            <CornerDownLeft size={11} className="text-slate-500" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Terminal;
