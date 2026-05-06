import { useEffect, useRef } from 'react';

const PARTICLE_COUNT = 120;
const CONNECTION_DISTANCE = 130;
const GOLD_R = 212;
const GOLD_G = 175;
const GOLD_B = 55;

const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let particles = [];

    const resize = () => {
      const prevW = canvas.width;
      const prevH = canvas.height;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      if (particles.length && prevW && prevH) {
        const scaleX = canvas.width / prevW;
        const scaleY = canvas.height / prevH;
        for (const p of particles) {
          p.x *= scaleX;
          p.y *= scaleY;
        }
      }
    };
    resize();
    window.addEventListener('resize', resize);

    particles = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      radius: Math.random() * 1.6 + 0.5,
      opacity: Math.random() * 0.5 + 0.15,
      pulseSpeed: Math.random() * 0.018 + 0.006,
      pulseOffset: Math.random() * Math.PI * 2,
    }));

    let frame = 0;
    let animId;
    let paused = false;

    const handleVisibility = () => {
      paused = document.hidden;
      if (!paused) animId = requestAnimationFrame(animate);
    };
    document.addEventListener('visibilitychange', handleVisibility);

    const animate = () => {
      if (paused) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      frame++;

      ctx.fillStyle = `rgb(${GOLD_R},${GOLD_G},${GOLD_B})`;
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = canvas.width;
        else if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        else if (p.y > canvas.height) p.y = 0;

        const pulse = Math.sin(frame * p.pulseSpeed + p.pulseOffset) * 0.25 + 0.75;
        ctx.globalAlpha = p.opacity * pulse;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      const connDistSq = CONNECTION_DISTANCE * CONNECTION_DISTANCE;
      ctx.globalAlpha = 1;
      ctx.strokeStyle = `rgba(${GOLD_R},${GOLD_G},${GOLD_B},0.15)`;
      ctx.lineWidth = 0.6;
      ctx.beginPath();
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          if (dx * dx + dy * dy < connDistSq) {
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
          }
        }
      }
      ctx.stroke();
      ctx.globalAlpha = 1;

      animId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', handleVisibility);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-50"
    />
  );
};

export default ParticleBackground;
