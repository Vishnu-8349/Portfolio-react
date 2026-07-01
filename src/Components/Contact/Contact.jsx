import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Send } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus('submitting');
    const formData = new FormData(event.target);
    formData.append("access_key", "a2306404-983f-4ac0-ace3-635df3e44870");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());

      if (res.success) {
        setStatus('success');
        event.target.reset();
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 4000);
      }
    } catch (err) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <section id="contact" className="relative w-full py-10 md:py-14 px-6 md:px-8 overflow-hidden z-10 flex items-center justify-center border-t border-white/5">
      {/* Dynamic Glow decoration */}
      <div className="absolute right-[-10%] bottom-[-15%] w-[400px] h-[400px] bg-blue-900/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="w-full max-w-5xl">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400 bg-blue-500/5 border border-blue-500/10 px-3 py-1 rounded-full">
            Inquiry
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase tracking-tight text-white mt-4">
            Let's Build Something Exceptional
          </h2>
        </div>

        {/* Layout Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Details Column */}
          <div className="lg:col-span-5 p-6 rounded-2xl glass border border-white/5 flex flex-col justify-between relative">
            <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-blue-500/15 to-transparent" />
            
            <div className="space-y-6">
              <h3 className="text-base font-bold uppercase tracking-tight text-white">Let's talk</h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-semibold">
                I am currently open to frontend roles, contract scopes, and collaborations. Send a message to get in touch.
              </p>
            </div>

            {/* Credentials Info */}
            <div className="space-y-3.5 my-8">
              <a 
                href="mailto:vp1173667@gmail.com" 
                className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.01] border border-white/[0.04] text-[11px] sm:text-xs font-bold text-slate-300 hover:border-blue-500/20 hover:bg-blue-500/[0.015] hover:text-white transition-all duration-300"
              >
                <Mail size={14} className="text-blue-500" />
                <span>vp1173667@gmail.com</span>
              </a>


            </div>

            {/* Social links */}
            <div className="flex gap-3">
              <a 
                href="https://github.com/Vishnu-8349" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-white/[0.01] border border-white/[0.04] text-slate-400 hover:text-white hover:border-white/15 transition-all duration-300 flex items-center justify-center"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
              </a>
              <a 
                href="https://github.com/Vishnu-8349" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-white/[0.01] border border-white/[0.04] text-slate-400 hover:text-white hover:border-white/15 transition-all duration-300 flex items-center justify-center"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>

          </div>

          {/* Form Column */}
          <form 
            onSubmit={onSubmit} 
            className="lg:col-span-7 p-6 md:p-8 rounded-2xl glass border border-white/5 flex flex-col justify-between relative space-y-6"
          >
            <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-blue-500/15 to-transparent" />
            
            <div className="space-y-1">
              <label className="text-[9px] font-bold uppercase tracking-widest text-slate-500">Your Name</label>
              <input 
                required 
                type="text" 
                name="name" 
                placeholder="Enter your name"
                className="w-full bg-[#121826]/40 border border-white/5 focus:border-blue-500/40 rounded-lg p-3 text-xs text-white outline-none transition-all duration-300" 
              />
            </div>

            <div className="space-y-1">
              <label className="text-[9px] font-bold uppercase tracking-widest text-slate-500">Your Email</label>
              <input 
                required 
                type="email" 
                name="email" 
                placeholder="Enter your email"
                className="w-full bg-[#121826]/40 border border-white/5 focus:border-blue-500/40 rounded-lg p-3 text-xs text-white outline-none transition-all duration-300" 
              />
            </div>

            <div className="space-y-1">
              <label className="text-[9px] font-bold uppercase tracking-widest text-slate-500">Message</label>
              <textarea 
                required 
                name="message" 
                rows="5" 
                placeholder="Enter your message details"
                className="w-full bg-[#121826]/40 border border-white/5 focus:border-blue-500/40 rounded-lg p-3 text-xs text-white outline-none transition-all duration-300 resize-none" 
              />
            </div>

            {/* Submit Block */}
            <div className="pt-2">
              <button
                disabled={status === 'submitting'}
                className="w-full relative h-11 rounded-full text-[10px] font-bold uppercase tracking-widest text-[#0B0F19] bg-[#F8FAFC] hover:bg-white disabled:bg-slate-800 disabled:text-slate-500 transition-all duration-300 overflow-hidden flex items-center justify-center shadow-[0_4px_15px_rgba(255,255,255,0.05)]"
              >
                <AnimatePresence mode="wait">
                  {status === 'idle' && (
                    <motion.span 
                      key="idle" 
                      initial={{ opacity: 0 }} 
                      animate={{ opacity: 1 }} 
                      exit={{ opacity: 0 }} 
                      className="flex items-center gap-2"
                    >
                      Send Message <Send size={11} />
                    </motion.span>
                  )}
                  {status === 'submitting' && (
                    <motion.span 
                      key="submitting" 
                      initial={{ opacity: 0 }} 
                      animate={{ opacity: 1 }} 
                      exit={{ opacity: 0 }}
                      className="animate-pulse"
                    >
                      TRANSMITTING...
                    </motion.span>
                  )}
                  {status === 'success' && (
                    <motion.span 
                      key="success" 
                      initial={{ opacity: 0, scale: 0.8 }} 
                      animate={{ opacity: 1, scale: 1 }} 
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-1.5 text-emerald-600 font-bold"
                    >
                      SENT SUCCESSFULLY
                      <motion.div
                        initial={{ x: 0, y: 0, opacity: 1 }}
                        animate={{ x: 100, y: -50, opacity: 0, rotate: 15 }}
                        transition={{ duration: 1.2, ease: 'easeOut' }}
                        className="inline-block ml-1"
                      >
                        <Send size={11} />
                      </motion.div>
                    </motion.span>
                  )}
                  {status === 'error' && (
                    <motion.span 
                      key="error" 
                      initial={{ opacity: 0 }} 
                      animate={{ opacity: 1 }} 
                      exit={{ opacity: 0 }}
                      className="text-red-500 font-bold"
                    >
                      SUBMISSION FAILED
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>

          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;
