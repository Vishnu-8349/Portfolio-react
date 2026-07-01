import React, { useEffect, useRef, useState } from 'react';

const PremiumBackground = () => {
  const canvasRef = useRef(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMouse((prev) => ({
        ...prev,
        targetX: e.clientX,
        targetY: e.clientY,
      }));
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particle definition
    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 1.5 + 0.5;
        this.speedX = Math.random() * 0.2 - 0.1;
        this.speedY = Math.random() * 0.2 - 0.1;
        this.alpha = Math.random() * 0.4 + 0.1;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Screen wrapping
        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(148, 163, 184, ${this.alpha})`;
        ctx.fill();
      }
    }

    const particleCount = Math.min(Math.round((width * height) / 18000), 80);
    const particles = Array.from({ length: particleCount }, () => new Particle());

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth lag interpolation for spotlight mapping
      setMouse((prev) => {
        const dx = prev.targetX - prev.x;
        const dy = prev.targetY - prev.y;
        const nextX = prev.x + dx * 0.05;
        const nextY = prev.y + dy * 0.05;

        // Interactive mouse spotlight gradient overlay
        const spotlight = ctx.createRadialGradient(
          nextX,
          nextY,
          0,
          nextX,
          nextY,
          Math.max(width, height) * 0.3
        );
        spotlight.addColorStop(0, 'rgba(59, 130, 246, 0.04)');
        spotlight.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = spotlight;
        ctx.fillRect(0, 0, width, height);

        return { ...prev, x: nextX, y: nextY };
      });

      // Render floating stars/particles
      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full -z-50 overflow-hidden bg-[#0B0F19] pointer-events-none">
      {/* Animated deep gradients (Aurora lights) */}
      <div 
        className="absolute top-[-30%] left-[-15%] w-[80vw] h-[80vw] rounded-full bg-blue-900/10 aurora-glow"
        style={{
          transform: `translate(${mouse.x * 0.02}px, ${mouse.y * 0.02}px)`,
          transition: 'transform 0.1s linear',
        }}
      />
      <div 
        className="absolute bottom-[-20%] right-[-15%] w-[70vw] h-[70vw] rounded-full bg-indigo-950/15 aurora-glow"
        style={{
          transform: `translate(${-mouse.x * 0.015}px, ${-mouse.y * 0.015}px)`,
          transition: 'transform 0.1s linear',
        }}
      />
      <div 
        className="absolute top-[25%] right-[10%] w-[55vw] h-[55vw] rounded-full bg-blue-950/10 aurora-glow"
        style={{
          transform: `translate(${mouse.x * 0.01}px, ${-mouse.y * 0.01}px)`,
          transition: 'transform 0.1s linear',
        }}
      />

      {/* Canvas Layer */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Repeating noise grain pattern */}
      <div className="absolute inset-0 opacity-[0.012] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:12px_12px] pointer-events-none" />
    </div>
  );
};

export default PremiumBackground;
