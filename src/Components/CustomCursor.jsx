import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [cursorType, setCursorType] = useState('default'); // 'default' | 'pointer' | 'project'
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 40, stiffness: 450, mass: 0.4 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const updateCursorType = (e) => {
      const target = e.target;
      if (!target) return;

      const hasView = target.closest('[data-cursor="view"]');
      const isClickable = target.closest('a, button, select, input, textarea, [role="button"], .interactive');

      if (hasView) {
        setCursorType('project');
      } else if (isClickable) {
        setCursorType('pointer');
      } else {
        setCursorType('default');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseover', updateCursorType);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseover', updateCursorType);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer tracking ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-blue-500/40 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-screen hidden lg:block"
        style={{
          x: cursorX,
          y: cursorY,
        }}
        animate={{
          scale: cursorType === 'pointer' ? 1.5 : cursorType === 'project' ? 2.5 : 1,
          backgroundColor: cursorType === 'pointer' ? 'rgba(59, 130, 246, 0.12)' : cursorType === 'project' ? '#F8FAFC' : 'rgba(59, 130, 246, 0)',
          borderColor: cursorType === 'project' ? '#F8FAFC' : '#3B82F6',
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      >
        {cursorType === 'project' && (
          <span className="text-[10px] uppercase font-bold tracking-widest text-[#0B0F19] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none">
            View
          </span>
        )}
      </motion.div>

      {/* Inner tracking dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-blue-500 rounded-full pointer-events-none z-[10000] -translate-x-1/2 -translate-y-1/2 hidden lg:block"
        style={{
          x: cursorX,
          y: cursorY,
        }}
        animate={{
          scale: cursorType === 'pointer' ? 0.4 : cursorType === 'project' ? 0 : 1,
        }}
      />
    </>
  );
};

export default CustomCursor;
