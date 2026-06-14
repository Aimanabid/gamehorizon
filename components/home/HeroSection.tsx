"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { Play, ChevronDown, Zap, Shield, Globe } from "lucide-react";

const badges = [
  { icon: Zap,    text: "50+ Games Shipped" },
  { icon: Shield, text: "Award-Winning Studio" },
  { icon: Globe,  text: "1M+ Players Worldwide" },
];

/* ── circuit SVG lines rendered as background ── */
function CircuitLines() {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-[0.07] pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="cl" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor="#2979FF" stopOpacity="0" />
          <stop offset="50%"  stopColor="#00E5FF" stopOpacity="1" />
          <stop offset="100%" stopColor="#2979FF" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* horizontal lines */}
      {[15, 30, 50, 68, 82].map((y, i) => (
        <line key={`h${i}`} x1="0" y1={`${y}%`} x2="100%" y2={`${y}%`}
          stroke="url(#cl)" strokeWidth="1" />
      ))}
      {/* vertical lines */}
      {[12, 28, 50, 72, 88].map((x, i) => (
        <line key={`v${i}`} x1={`${x}%`} y1="0" x2={`${x}%`} y2="100%"
          stroke="url(#cl)" strokeWidth="1" />
      ))}
      {/* corner dots */}
      {[[12,15],[28,30],[50,50],[72,68],[88,82]].map(([x,y], i) => (
        <circle key={`d${i}`} cx={`${x}%`} cy={`${y}%`} r="3"
          fill="#00E5FF" opacity="0.6" />
      ))}
    </svg>
  );
}

/* ── canvas-based particles ── */
function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    type P = { x:number; y:number; vx:number; vy:number; r:number; alpha:number; color:string };
    const colors = ["#2979FF","#00E5FF","#7B2FFF","#2979FF","#00E5FF"];
    const particles: P[] = Array.from({ length: 60 }, () => ({
      x:     Math.random() * canvas.width,
      y:     Math.random() * canvas.height,
      vx:    (Math.random() - 0.5) * 0.4,
      vy:    -Math.random() * 0.5 - 0.1,
      r:     Math.random() * 1.5 + 0.3,
      alpha: Math.random() * 0.6 + 0.2,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();

        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= 0.001;

        if (p.y < 0 || p.alpha <= 0) {
          p.x     = Math.random() * canvas.width;
          p.y     = canvas.height + 5;
          p.alpha = Math.random() * 0.6 + 0.2;
          p.vy    = -Math.random() * 0.5 - 0.1;
          p.vx    = (Math.random() - 0.5) * 0.4;
        }
      }
      ctx.globalAlpha = 1;
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
}

/* ── HUD corner bracket ── */
function HudCorner({ pos }: { pos: "tl"|"tr"|"bl"|"br" }) {
  const cls = {
    tl: "top-6 left-6 border-t-2 border-l-2",
    tr: "top-6 right-6 border-t-2 border-r-2",
    bl: "bottom-6 left-6 border-b-2 border-l-2",
    br: "bottom-6 right-6 border-b-2 border-r-2",
  }[pos];
  return (
    <div className={`absolute w-8 h-8 border-brand-primary/60 ${cls}`} />
  );
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-brand-dark">

      {/* Hex dot grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(41,121,255,0.15) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      {/* Radial glow + purple */}
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full bg-brand-purple/10 blur-3xl pointer-events-none" />

      {/* Fade to black at bottom */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-brand-dark to-transparent" />

      {/* Circuit overlay */}
      <CircuitLines />

      {/* Particles */}
      <Particles />

      {/* Animated scan line */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute left-0 right-0 h-px"
          style={{
            background:
              "linear-gradient(90deg,transparent,rgba(0,229,255,0.5),transparent)",
          }}
          animate={{ top: ["0%", "100%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
        />
      </div>

      {/* HUD corners */}
      <HudCorner pos="tl" />
      <HudCorner pos="tr" />
      <HudCorner pos="bl" />
      <HudCorner pos="br" />

      {/* HUD coordinates */}
      <div className="absolute top-24 left-8 hud-label hidden lg:block opacity-40">
        X:0482 Y:1920
      </div>
      <div className="absolute top-24 right-8 hud-label hidden lg:block opacity-40 text-right">
        SECTOR: ALPHA-7
      </div>
      <div className="absolute bottom-24 left-8 hud-label hidden lg:block opacity-40">
        SYS: ONLINE ●
      </div>
      <div className="absolute bottom-24 right-8 hud-label hidden lg:block opacity-40 text-right">
        VER 2025.1
      </div>

      {/* ── Main content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 text-center">

        {/* Glitch headline */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative inline-block mb-2"
        >
          <h1 className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-none tracking-tight select-none">
            {/* Base text */}
            <span className="block text-white glow-text">WHERE EPIC</span>

            {/* Gradient line with glitch layers */}
            <span className="relative block">
              <span className="text-gradient">WORLDS ARE</span>
              {/* Glitch layer 1 — cyan shift */}
              <span
                className="absolute inset-0 text-[#00E5FF] opacity-0 animate-glitch"
                aria-hidden
                style={{ textShadow: "2px 0 #00E5FF" }}
              >
                WORLDS ARE
              </span>
              {/* Glitch layer 2 — purple shift */}
              <span
                className="absolute inset-0 text-[#7B2FFF] opacity-0 animate-glitch2"
                aria-hidden
                style={{ textShadow: "-2px 0 #7B2FFF" }}
              >
                WORLDS ARE
              </span>
            </span>

            <span className="block text-white glow-text">BORN</span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-300 leading-relaxed mb-10 mt-6"
        >
          GameHorizon is a premium game development studio crafting immersive,
          boundary-pushing experiences across mobile, PC, and console platforms.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
        >
          <Link
            href="/games"
            className="group relative inline-flex items-center gap-2 px-8 py-4 text-base font-bold text-white overflow-hidden clip-corner-both shadow-glow hover:shadow-glow-lg transition-shadow duration-300"
          >
            <span className="absolute inset-0 bg-blue-gradient" />
            <span className="absolute inset-0 bg-shine bg-[length:200%_100%] animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative">Explore Our Games</span>
            <span className="relative text-brand-secondary">→</span>
          </Link>

          <Link
            href="/about"
            className="group inline-flex items-center gap-2 px-8 py-4 text-base font-bold text-white clip-corner-both bg-glass border border-brand-primary/30 hover:border-brand-primary/70 hover:shadow-glow-sm transition-all duration-200"
          >
            <Play className="w-4 h-4 text-brand-secondary group-hover:text-white transition-colors" />
            Watch Showreel
          </Link>
        </motion.div>

        {/* Badge strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          {badges.map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="flex items-center gap-2 px-4 py-2 rounded-none clip-corner bg-white/4 border border-brand-primary/20 text-sm text-slate-300 hover:border-brand-primary/50 hover:bg-brand-primary/8 transition-all"
            >
              <Icon className="w-4 h-4 text-brand-secondary" />
              {text}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="hud-label opacity-50">SCROLL</span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-brand-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
}
